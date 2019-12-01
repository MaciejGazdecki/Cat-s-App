import React, {useState, useEffect,useReducer} from 'react';
import axios from 'axios';
const uniqid = require('uniqid');
import Form from "./Subcomponents/Form/form";
import Announcement from "./Subcomponents/Announcement/announcement";

const axiosAdoption = axios.create({
   baseURL:'https://cats-app-d2f04.firebaseio.com/'
});

function AdoptACat() {
    const initialState = {
        title: '',
        name: localStorage.getItem('userName'),
        email:'',
        city:'',
        zipCode:'',
        content:'',
        gender:'',
        catAge:'',
        catName:''
    };

    const reducer = (state, action) => {
        if (action.type === "CLEAR") {
            return initialState
        }
        if (action.type === "SET_VALUE") {
            return {
                ...state,
                [action.name]: action.value
            }
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const [announcements, setAnnouncements] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 2;

    useEffect(() => {
       const fetchData = async () => {
           return axiosAdoption.get('/adoption.json')
       };
       fetchData()
           .then(res => setAnnouncements(Object.values(res.data)))
           .catch(err => console.log(err))
    });

    const onChangeHandler = (e) => {
        dispatch({type:"SET_VALUE", name: e.target.name, value: e.target.value});
    };

    const submitHandler = async () => {
        event.preventDefault();
        await axiosAdoption.post('/adoption.json', {...state, id: uniqid()})
            .then(res => console.log(res, alert("announcement placed")))
            .catch(err => console.log(err));
        dispatch({type:"CLEAR"})
    };
    const onClickNextHandler = () => {
        if (announcements.slice(page*perPage - perPage, page*perPage).length < perPage) {
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
            <section className='wrapper adoptACatWrapper'>
                <Form
                    state={state}
                    submitHandler={submitHandler}
                    onChangeHandler={onChangeHandler}
                />
            </section>
        </section>
    )

}

export default AdoptACat;