import React from 'react'
import style from './Form.module.css'

function Form() {
  return (
    <div className={style.form}>
        <div className={style.formcontent}>
            <h1>Subscribe to our Newsletter</h1>
            <p>Get e-mail updates about our latest shop and special offers.</p>
        </div>
        <div className={style.forminput}>
            <input type="email" placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Form