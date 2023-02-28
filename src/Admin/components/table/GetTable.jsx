import React from "react";
import { table } from "../../../help/getData";

function Table() {
  const allTable = React.useContext(table);
  const [bookTable, setBookTable] = React.useState([]);
  React.useEffect(() => {
    allTable
      .then((jsonRes) => {
        setBookTable(jsonRes);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="get-table">
      <h1>Book Table</h1>
      <div className="get-table-all">
      {bookTable.map((item) => {
        return (
          <div  className="get-table-items"key={item._id}>
            <h3> Name:  {item.name}</h3>
            <p><span> ID : </span> {item._id} </p>
            <p><span> No. :  </span>{item.persons}</p>
            <p><span>Date :  </span> {item.date}</p>
            <p><span> Time :  </span>{item.time}</p>
          </div>
        );
      })}
      </div>
      
    </div>
  );
}

export default Table;