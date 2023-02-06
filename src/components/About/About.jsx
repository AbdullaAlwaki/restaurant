import React from "react";
import "../../styles/about.css";
import abdulla from"../../images/abdulla.jpg";
import ahmed from "../../images/ahmed.jpg";
import romina from "../../images/romina.jpg";
import kamalpreet from "../../images/kamalpreet.jpg";
import sergey from "../../images/sergey.jpg";
import food_serving from "../../images/food_serving.png";



function About() {
    return (
        <div className="about_container">
            <div className="about_section">
                <div>
                    <h2 className="about_heading">About Us</h2>
                    <p className="about_solgan"> Food Without Error</p>
            
                    <p className="about_para">
                        Food Without Error is a food delivery service that provid healthy and delicious meals to customers. We are a team of five students from  <a className="about_a" href="https://www.digitalcareerinstitute.org/"> DCI</a>  Digital Career Institute. We are  passionate about food and we want to make it easier for people to eat healthy and delicious food. We are  currently offering our service in Berlin, Germany.
                    </p>
                </div>
                <div>
                    <img className="about_section_img" src={food_serving} alt="about" />
                </div>
            </div>
            <div className="about_characters">
                <div>
                    <img className="about_img" src={ahmed} alt="ahmed" />
                    <h3 className="about_name">Ahmed</h3>
                    <span className="about_descreption">always excited to learn new</span>    
                </div>
                <div>
                    <img  className="about_img"src={abdulla} alt="abdulla" />
                    <h3 className="about_name">Abdulla </h3>
                    <span className="about_descreption">the head master of Chaos</span>    
                </div>
                <div>
                    <img className="about_img" src={kamalpreet} alt="kamalpreet" />
                    <h3 className="about_name">Kamalpreet</h3>
                    <span className="about_descreption">very curious about the new topics </span>    
                </div>
                <div>
                    <img  className="about_img"src={romina} alt="romina" />
                    <h3 className="about_name">Romina</h3>
                    <span className="about_descreption">like to style everthing perfectly</span>    
                </div>
                <div>
                    <img  className="about_img"src={sergey}alt="sergey" />
                    <h3 className="about_name ">Sergey</h3>
                    <span className="about_descreption"> A true backend expert </span> 
                </div>   
            </div>
        </div>
    )
}
      
export default About;

