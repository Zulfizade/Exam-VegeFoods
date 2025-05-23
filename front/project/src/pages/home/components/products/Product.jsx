import React, { useEffect } from 'react'
import style from './Product.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getProductThunk } from '../../../../redux/reducer/ProductSlice';
import { useState } from 'react';

function Product() {
    const dispatch = useDispatch();
    const { vegetable, loading, error } = useSelector((state) => state.vegetable);

    useEffect(() => {
        dispatch(getProductThunk());
    }, [dispatch]);

    const addToBasket = (product) => {
        const basket = JSON.parse(localStorage.getItem('basket')) || [];

        const updatedProduct = { ...product, count: 1 };

        const existProduct = basket.find((item) => item._id === product._id);

        if (existProduct) {
            existProduct.count++;
        } else {
            basket.push(updatedProduct);
        }

        localStorage.setItem('basket', JSON.stringify(basket));
    };


    const addToWishlist = (product) => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const updatedWishlist = [...wishlist];

        const existProduct = updatedWishlist.find((item) => item._id === product._id);

        if (existProduct) {
            alert('Product already in wishlist');
        } else {
            updatedWishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        }
    };

    const [sorted, setSorted] = useState('default');
    const [searchText, setSearch] = useState('');

    const filteredVegetable = vegetable
        ? vegetable
            .filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
            .sort((a, b) => {
                if (sorted === 'default') return 0;
                if (sorted === 'asc') return a.price - b.price;
                if (sorted === 'desc') return b.price - a.price;
                return 0;
            })
        : [];

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;





    return (

        <div className={style.product}>
            <div className={style.products_up}>
                <i>Featured Products</i>
                <h1>Our Products</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <div className={style.search}>
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className={style.sort}>
                    <select onChange={(e) => setSorted(e.target.value)}>
                        <option value="default">Sort</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>

            <div className={style.products_down}>
                {filteredVegetable && filteredVegetable.map((item) => (
                    <div className={style.product_item} key={item._id}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <h3>{item.price} $</h3>
                        <div className={style.product_itemabsolute}>

                            <button onClick={() => addToBasket(item)}> <i  className="fa-solid fa-cart-shopping"></i> </button>
                            <button onClick={() => addToWishlist(item)}> <i className="fa-regular fa-heart"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Product