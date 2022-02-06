import React, { useState } from 'react';
import { useLocation } from "wouter";
import { initialValues } from '../../services/values';
import { createContact } from '../../api/api';
import '../css/styles.css';

const Create = () => {
    const [contact, setContact] = useState(initialValues);
    const [location, setLocation] = useLocation();

    const handleChange = event => {
        const {name, value} = event.target;
        setContact({...contact, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await createContact(contact);
            console.log(res);

            if(window.confirm('Contact added successfully!')){
                setContact(initialValues);
                setLocation("/contacts");
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="form">
            <h1>Create contact</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}/>
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}/>
                <input 
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}/>
                <input 
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}/>
                <button className="btn-form">Save contact</button>
            </form>
        </div>
    );
};

export default Create;
