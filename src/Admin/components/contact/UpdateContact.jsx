import React from 'react';
import {contact} from '../../../help/getData';

export default function UpdateContact() {
    const [res, setRes] = React.useState([]);
    const [dataContacts, setDataContacts] = React.useState([]);
    const [dataContact, setDataContact] = React.useState(null);
    const data = React.useContext(contact);
    React.useEffect(() => {
        data.then((res) => {
            setDataContacts(res);
        })
        .catch((err) => {
            console.log(err);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleContact = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const id = form.get("_id");
        const data = dataContacts.find((item) => item._id === id);
        setDataContact(data);
    };


    const handleChange = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const message = form.get("message");
        const data = {
            name,
            email,
            message
        }
        try {
            const response = await fetch(`https://mern-restaurant-backend.onrender.com/api/contact/${dataContact._id}`, {
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
        <h1>Update Contact</h1>
        {res && <h2>{res.message}</h2>}
        {res && <h2>{res.error}</h2>}
        <form action="" onSubmit={handleContact}>
        <input type="text" name="_id" id="_id" placeholder="Enter Contact Id" />
        <button>Find Contact </button>
      </form>
        {dataContact && (
            <form action="" onSubmit={handleChange}>
                <h3>{dataContact._id}</h3>
                <input type="text" name="name" id="name" defaultValue={dataContact.name} />
                <input type="text" name="email" id="email" defaultValue={dataContact.email} />
                <input type="text" name="message" id="message" defaultValue={dataContact.message} />
                <button>Update Contact</button>
            </form>
        )}
    </div>
  )
}
