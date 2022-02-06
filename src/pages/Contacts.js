import React from 'react';
import List from '../components/list/List';

const Contacts = ({ params }) => {
    const { id } = params;
    return <List id={id}/>
};

export default Contacts;
