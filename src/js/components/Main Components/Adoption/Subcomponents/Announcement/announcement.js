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
            <div className="announcementImgContainer">
                <img className='iconAdoption' src={CatLogo} alt="cat"/>
                <div className="catDetails">
                    <p className="announcementTitle">{title}</p>
                    <p><span>Name of cat: </span>{catName}</p>
                    <p><span>Age of cat:</span> {catAge}</p>
                    <p><span>Gender:</span> {gender}</p>
                </div>
            </div>
            <div className="announcementSubsection">
                <div className='announcementDetails'>
                    <p><span>Contact name:</span> {name}</p>
                    <p><span>Contact email:</span> {email}</p>
                    <p><span>Localization:</span> {zipCode} {city}</p>
                    <p>{content}</p>
                </div>
                <button className='sendMessage'>Send Message</button>
            </div>
        </div>
    )
}

export default Announcement;