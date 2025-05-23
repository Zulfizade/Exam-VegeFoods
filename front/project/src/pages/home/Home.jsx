import React from 'react'
import Mainimg from './components/mainimg/Mainimg'
import style from './Home.module.css'
import Ship from './components/shipping/Ship'
import Product from './components/products/product'
import Customer from './components/customer/Customer'
import Form from './components/form/Form'

function Home() {
  return (
    <div className={style.home}>
      <Mainimg />
      <Ship/>
      <Product/>
      <Customer/>
      <Form/>
    </div>
  )
}

export default Home