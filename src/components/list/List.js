import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import Loading from '../loading/Loading';
import { getContacts } from '../../api/api';
import '../css/styles.css';

const List = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllContacts = async () => {
        const snapshot = await getContacts();
        const docs = [];
        snapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
        });

        setContacts(docs);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        getAllContacts();
    }, [])

    return (
        <div className="content">
            <h1>Contacts</h1>
            {
                loading ? <Loading/> :
                contacts.length == 0 ?
                <h1>No Contacts</h1> :
                contacts.map(c => (
                    <div className="center">
                        <Card key={c.id} contact={c}/>
                    </div>
                ))
            }
        </div>
    );
};

export default List;
