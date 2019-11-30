import React from 'react';

function Announcement(props) {
    const {
        id,
        title,
        content,
        name,
        email,
        zipCode,
        city,
        gender,
        catAge,
        catName
    } = props;
    return (
        <div className="announcement" key={id}>
            <p>{title}</p>
            <p>{content}</p>
            <p>Contact name: {name}</p>
            <p>Contact email: {email}</p>
            <p>Localization: {zipCode} {city}</p>
        </div>
    )
}

export default Announcement;