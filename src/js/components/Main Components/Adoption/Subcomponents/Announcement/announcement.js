import React from 'react';
import CatLogo from "../../../../../../../images/adoption3.jpg"

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
        <div className="announcement">
            <img className='iconAdoption' src={CatLogo} alt="cat"/>
            <p>{title}</p>
            <p>{content}</p>
            <p>Name of cat: {catName}</p>
            <p>Age of cat: {catAge}</p>
            <p>Gender: {gender}</p>
            <p>Contact name: {name}</p>
            <p>Contact email: {email}</p>
            <p>Localization: {zipCode} {city}</p>
        </div>
    )
}

export default Announcement;