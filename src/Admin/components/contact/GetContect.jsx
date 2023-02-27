import React from "react";
import { contact } from "../../../help/getData";

function GetContact() {
  const [res, setRes] = React.useState([]);
  const data = React.useContext(contact);
  React.useEffect(() => {
    data.then((jsonRes) => {
      setRes(jsonRes);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="get-contacts">
      <h1>Contact</h1>
      <div className="get-contacts-all">
      {res.map((item) => {
        return (
          <div className="get-contacts-items" key={item._id}>
            <p><span> ID : </span> {item._id} </p>
            <h3> Name: {item.name}</h3>
            <p> <span> Email:</span>{item.email}</p>
            <p><span> Text:</span>{item.message}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default GetContact;