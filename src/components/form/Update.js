import React, { useState, useEffect } from 'react';
import { useLocation } from "wouter";
import { initialValues } from '../../services/values';
import { getOneContact, updateContact } from '../../api/api';
import '../css/styles.css';

const Update = ({ id }) => {
    const [contact, setContact] = useState(initialValues);
    const [location, setLocation] = useLocation();

    const handleChange = event => {
        const {name, value} = event.target;
        setContact({...contact, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await updateContact(id, contact);
            console.log(res);

            if(window.confirm('Contact updated successfully!')) {
                setContact(initialValues);
                setLocation("/contacts");
            }
        } catch(err) {
            console.error(err);
        }
    }

    const getContact = async (id) => {
        try {
            const res = await getOneContact(id);
            console.log(res);

            setContact({...res.data()});
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getContact(id);
    }, [])

    return (
        <div className="form">
            <h1>Update contact</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={contact.name}/>
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={contact.email}/>
                <input 
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    value={contact.phone}/>
                <input 
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    value={contact.address}/>
                <button className="btn-form">Update contact</button>
            </form>
        </div>
    );
};

export default Update;
