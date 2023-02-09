import React from 'react';
import { table } from '../../../help/getData';

export default function UpdateTable() {
    const [res, setRes] = React.useState([]);
    const [dataTables, setDataTables] = React.useState([]);
    const [dataTable, setDataTable] = React.useState(null);
    const data = React.useContext(table);
    React.useEffect(() => {
        data.then((res) => {
            setDataTables(res);
        })
        .catch((err) => {
            console.log(err);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleTable = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const id = form.get("id");
        const data = dataTables.find((item) => item._id === id);
        setDataTable(data);
    };
    const handleChange = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const persons = form.get("persons");
        const time = form.get("time");
        const date = form.get("date");
        const data = {
            name,
            persons,
            time,
            date
        }
        try {
            const response = await fetch(`https://mern-restaurant-backend.onrender.com/api/table/${dataTable._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            setRes(result);
        } catch (error) {
            console.log(error);
        }
    };


  return (
    <div>
        <h1>Update Table</h1>
        {res && <h2>{res.message}</h2>}
        {res && <h2>{res.error}</h2>}
        <form action="" onSubmit={handleTable}>
        <input type="text" name="id" id="id" placeholder="Enter Table Id" />
        <button>Find Table </button>
        </form>
        {dataTable && (
            <form action="" onSubmit={handleChange}>
            <input type="text" name="name" id="name" placeholder="Enter Table Name" defaultValue={dataTable.name} />
            <input type="number" name="persons" id="persons" placeholder="Enter Table Persons" defaultValue={dataTable.persons} />
            <input type="text" name="time" id="time" placeholder="Enter Table Time" defaultValue={dataTable.time} />
            <input type="date" name="date" id="date" placeholder="Enter Table Date" defaultValue={dataTable.date} />
            <button>Update Table </button>  
            </form>
        )}

    </div>
  )
}
