import React from 'react';
import { deleteContact } from '../../api/api';
import { useLocation } from "wouter";

const Card = ({ contact }) => {
    const [location, setLocation] = useLocation();

    const onDeleteContact = async (id) => {
        if(window.confirm('Are you sure you want to delete this contact?')) {
            await deleteContact(id);
            alert("Note dleted successfully!")
            setLocation("/contacts");
        }
    }

    const onEditContact = async (id) => {
        setLocation(`/edit-contact/${id}`);
    }

    return (
        <div className="card">
            <div className="container-card">
                <h3>{contact.name}</h3>
                <p>Phone: {contact.phone}</p>
                <p>Email: {contact.email}</p>
                <p>Address: {contact.address}</p>
                <p>ID: {contact.id}</p>
                <button 
                    className="btn edit"
                    onClick={() => onEditContact(contact.id)}>Edit</button>
                <button 
                    className="btn delete"
                    onClick={() => onDeleteContact(contact.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Card;
