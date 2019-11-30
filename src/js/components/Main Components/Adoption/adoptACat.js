import React, {useState, useEffect,useReducer} from 'react';
import axios from 'axios';
const uniqid = require('uniqid');
import Form from "./Subcomponents/Form/form";

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

    return (
        <section className='adoptionSection'>
            <div className="carousel">
                <div className="blackLayerAdoption">
                    <div className="carouselWrapper wrapper">
                        <div className='adoptHeader'>
                            <h2>ADOPTION</h2>
                            <h3>-FIND YOUR FRIEND-</h3>
                            <p>Adoption is an act of <span>love</span></p>
                        </div>
                        <div className="annoucements">
                            <h2>Actual Announcements</h2>
                            {announcements.map(el =>
                                <div className="announcement" key={el.id}>
                                    <p>{el.title}</p>
                                    <p>{el.content}</p>
                                    <p>Contact name: {el.name}</p>
                                    <p>Contact email: {el.email}</p>
                                    <p>Localization: {el.zipCode} {el.city}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='wrapper adoptACatWrapper'>
                <Form
                    state={state}
                    submitHandler={submitHandler}
                    onChangeHandler={onChangeHandler}
                />
            </div>
        </section>
    )

}

export default AdoptACat;