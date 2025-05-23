import React from 'react'
import style from './Customer.module.css'

function Customer() {
    return (
        <div className={style.customer}>
            <div className={style.customerup}>
                <i>Testimony</i>
                <h1>Our satisfied customer says</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            
            <div className={style.customerdown}>
                <div className={style.customerline}></div>
                <div className={style.customercontent}>
                    <img src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg.webp" alt="" />
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h1>Garreth Smith</h1>
                    <span>UI Designer</span>
                </div>
                <div className={style.customerline}></div>
                <div className={style.customercontent}>
                    <img src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg.webp" alt="" />
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h1>Garreth Smith</h1>
                    <span>UI Designer</span>
                </div>
                <div className={style.customerline}></div>
                <div className={style.customercontent}>
                    <img src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg.webp" alt="" />
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h1>Garreth Smith</h1>
                    <span>UI Designer</span>
                </div>
            </div>
        </div>
    )
}

export default Customer