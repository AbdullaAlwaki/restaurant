import React from "react";
import { dataContext } from "../Context/context";
import "../../styles/Home/Offer.css";

function Offer() {
  const { state } = React.useContext(dataContext);
  const [offer, setOffer] = React.useState([]);
  React.useEffect(() => {
    
    setOffer(state.offer);
  }, [state.offer]);

  return (
    <div className="container_offer">
      <h2 className="heading_offer">Offer of the week</h2>
      <div className="offer">
        {offer.map((item, index) => {
          return (
            <div key={index} className="cont_offer">
              <section className="sectionOffer">
                <figure className="figureOffer">
                  <p className="new_sticker">%</p>
                  <img className="food_img" src={item.images} alt="" />
                  <figcaption className="nameOffer">{item.name}</figcaption>
                  <figcaption className="priceOffer">{item.price} €</figcaption>
                  <figcaption className="descriptionOffer">
                    {item.description}
                  </figcaption>
                </figure>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Offer;
