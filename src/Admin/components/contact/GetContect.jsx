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
    <div>
      <h1>Contact</h1>
      {res.map((item) => {
        return (
          <div key={item._id}>
            <p>{item._id}</p>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GetContact;