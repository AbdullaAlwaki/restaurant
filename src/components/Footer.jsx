import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faLinkedinIn,faCcMastercard,faCcVisa,faPaypal} from "@fortawesome/free-brands-svg-icons"
import "../styles/Footer.css";







function Footer() {
    const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.2482974880027!2d13.441952384194233!3d52.47463987980567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fe357b7b88d%3A0xac3788f704e9f660!2z2KfZhNmF2LfYudmFINin2YTZitmF2YbZig!5e0!3m2!1sar!2sde!4v1674637960897!5m2!1sar!2sde"
    " 
      style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> `
    /* const [isNavExpanded, setIsNavExpanded] = useState(false); */
    return<footer>
            <div className="Fup" >
            <div className="iframe fadd" dangerouslySetInnerHTML={{__html: iframe?iframe:""}}></div>
            <div className="Fpages fadd">
                <h3 className="pages">Pages </h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/menu" >Menu</a></li>
                </ul>
            </div>
            
            <div className="Fservices fadd">
                <h3>Services</h3>
                <ul>
                    <li><a href="/">Sign in</a></li>
                    <li><a href="/about">Order</a></li>
                </ul>
            </div>

            <div className="Fcontact fadd">
                <h3>Contact info:</h3>
                <br />
                <p> Karl-Marx-Straße 172 ,
                 12043 Berlin</p>
                 <br />
                <p>Phone: +49 30 12345678</p>
                <br />
                <div className="Ficons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
               <FontAwesomeIcon icon={faLinkedinIn} />
               </div>

                <div>
     
            </div>
            </div>  
        </div>
            <div className="Fdown">
                <p>© 2021 All rights reserved</p>
                <div className="Fpayments">
                    <FontAwesomeIcon icon={faCcMastercard} />
                    <FontAwesomeIcon icon={faCcVisa} />
                    <FontAwesomeIcon icon={faPaypal} />

                </div>
            </div>


    </footer>

        
}


export default Footer;