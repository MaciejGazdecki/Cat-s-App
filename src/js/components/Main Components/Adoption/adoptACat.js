
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from "./Subcomponents/Form/form";
import Announcement from "./Subcomponents/Announcement/announcement";
import Cat from "../../../../../images/contactbg1.png";
import {AppUserContext} from "../../../App/appUserContext";

const axiosAdoption = axios.create({
   baseURL:'https://cats-app-d2f04.firebaseio.com/'
});

function AdoptACat() {
    const [announcements, setAnnouncements] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 1;

    useEffect(() => {
       const fetchData = async () => {
           return axiosAdoption.get('/adoption.json')
       };
       fetchData()
           .then(res => setAnnouncements(Object.values(res.data)))
           .catch(err => console.log(err));
    });

    const onClickNextHandler = () => {
        if (announcements.length === page) {
            setPage(prevState => prevState);
        } else {
            setPage(prevState => prevState +1);
        }
    };

    const onClickPreviousHandler = () => {
        if(page > 1) setPage(prevState => prevState -1);
    };

    return (
        <section className='adoptionSection'>
            <section className="carousel">
                <div className="blackLayerAdoption">
                    <div className="carouselWrapper wrapper">
                        <div className='adoptHeader'>
                            <h2>ADOPTION</h2>
                            <h3>-FIND YOUR FRIEND-</h3>
                            <p>Adoption is an act of <span>love</span></p>
                        </div>
                        <section className="annoucements">
                            <p onClick={onClickPreviousHandler}><i className="fas fa-chevron-left"></i></p>
                            {announcements.slice(page*perPage - perPage, page*perPage).map(el =>
                                <Announcement
                                    key={el.id}
                                    title={el.title}
                                    content={el.content}
                                    name={el.name}
                                    email={el.email}
                                    zipCode={el.zipCode}
                                    city={el.city}
                                    gender={el.gender}
                                    catAge={el.catAge}
                                    catName={el.catName}
                                />
                            )}
                            <p onClick={onClickNextHandler}><i className="fas fa-chevron-right"></i></p>
                        </section>
                    </div>
                </div>
            </section>
            <section className='wrapper formWrapper'>
                <div className="catForm">
                    <img  src={Cat} alt=""/>
                </div>
                <Form/>
            </section>
        </section>
    )

}

export default AdoptACat;