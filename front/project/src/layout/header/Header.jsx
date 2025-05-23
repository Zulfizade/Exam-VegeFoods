import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'

function Header() {

  const [basketCount, setBasketCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const basket = JSON.parse(localStorage.getItem('basket')) || [];
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setBasketCount(basket.length);
      setWishlistCount(wishlist.length);
    };

    updateCounts();

    window.addEventListener('storage', updateCounts);
    return () => window.removeEventListener('storage', updateCounts);
  }, []);


  return (
    <div className={style.header}>
      <div className={style.logo}>VEGEFOODS</div>
      <div className={style.menu}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Blog</Link></li>
          <li><Link to="#">Faq</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </div>
      <div className={style.icon}>
        <ul>
          <li><Link to="/wishlist">
            <i className="fa-solid fa-heart"></i>
            [<span className={style.count}>{wishlistCount}</span>]
          </Link> </li>

          <li><Link to="/basket">
            <i className="fa-solid fa-shopping-cart"></i>
            [<span className={style.count}>{basketCount}</span>]
          </Link></li>
        </ul>
      </div>

      <i className={`fa-solid fa-bars ${style.bars}`}></i>
    </div>
  )
}

export default Header