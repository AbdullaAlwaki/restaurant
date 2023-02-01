import React from "react";
import '../../styles/Services.css'

function Services() {
    return (
        <div className="containerServ">
            <section className="reservation">
                <div className="boxOne">Reservation</div>
                <div className="boxTwo">
                    <p>Would you like to enjoy an unforgettable evening with excellent food? Then visit us! We offer a variety of dishes with courteous service. It doesn't matter whether it's for two or several people, we can get everyone at one table! You are welcome to reserve a table with us in advance via our website or give us a call. We look forward to welcoming you soon!</p>
                    <button className="buttonServ">Book a table now</button>
                </div>
            </section>
            <section className="delivery">
                <div className="boxOne">PickUp & Delivery</div>
                <div className="boxTwo">
                    <p>Would you like to spend a cozy evening at home but don't want to miss out on good food? Then make use of our pick-up or delivery service! You can easily order from home via our homepage or by telephone. Depending on your selection, we will conveniently deliver your food to your home or you can pick it up from us. We look forward to serving you soon!</p>
                    <a href="/menu">
                        <button className="buttonServ">Order now</button>
                    </a>
                    
                </div>
            </section>
        </div>
        )
}

export default Services;