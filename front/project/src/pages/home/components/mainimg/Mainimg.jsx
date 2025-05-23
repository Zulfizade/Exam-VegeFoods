import React from 'react'
import style from './Mainimg.module.css'

function Mainimg() {
  return (
    <div className={style.mainimg}>
        <div className={style.maincontent}>
            <h1>We Serve Fresh Organic Food</h1>
            <h1>$ Fruits </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Details</button>
        </div>
    </div>
  )
}

export default Mainimg