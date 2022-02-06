import React from 'react';
import Update from '../components/form/Update';
;


const UpdateContact = ({ params }) => {
    const { id } = params;
    return <Update id={id}/>;
};

export default UpdateContact;
