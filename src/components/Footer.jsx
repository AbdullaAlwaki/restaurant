import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faLinkedinIn,faCcMastercard,faCcVisa,faPaypal} from "@fortawesome/free-brands-svg-icons"
import "../styles/Home/Footer.css";
import { Link } from "react-router-dom";







function Footer() {
    const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.248117032569!2d13.437575016005983!3d52.474643147341666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fe357b7b88d%3A0xac3788f704e9f660!2sJemenitisches%20Restaurant!5e0!3m2!1sen!2sde!4v1674737063564!5m2!1sen!2sde" ;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    /* const [isNavExpanded, setIsNavExpanded] = useState(false); */
    return<footer>
            <div className="Fup" >
            <div className="iframe fadd" dangerouslySetInnerHTML={{__html: iframe?iframe:""}}></div>
            <div className="Fpages fadd">
                <h3 className="h3-Fpages ">Pages </h3>
                <ul className="ul_services">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/menu" >Menu</Link></li>
                </ul>
            </div>
            
            <div className="Fservices fadd">
                <h3 className="headingFooter h3-Fservices">Services</h3>
                <ul className="ul_services ">
                    <li><a href="/">Book a Table</a></li>
                    <li><a href="/about">Order</a></li>
                </ul>
            </div>

            <div className="Fcontact fadd">
                <h3 className="headingFooter">Contact info:</h3>
                <br />
                <p> Karl-Marx-Straße 172 ,
                 12043 Berlin</p>
                 <br />
                <p>Phone: +49 30 12345678</p>
                <br />
                <div className="Ficons">
                <FontAwesomeIcon className="facebook_icon" icon={faFacebook} />
                <FontAwesomeIcon className="twitter_icon" icon={faTwitter} />
               <FontAwesomeIcon className="linkedin_icon" icon={faLinkedinIn} />
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