import React, {useState, useEffect,useReducer} from 'react';
import axios from 'axios';
const uniqid = require('uniqid');

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
                            <h2>Adoption</h2>
                            <h3>FIND YOUR FRIEND</h3>
                            <p>Adoption is an act of love</p>
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
                <div className='addAnnouncement'>
                    <form  className='announcement' onSubmit={submitHandler}>
                        <label>
                            Title:
                            <input
                                type="text"
                                placeholder="Please put tittle of your announcement"
                                name="title"
                                value={state.title}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Your name:
                            <input
                                type="text"
                                placeholder='Please put your name'
                                name="name"
                                value={state.name}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Your email:
                            <input
                                type="email"
                                placeholder="Please put your email"
                                name="email"
                                value={state.email}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                           Cat name:
                            <input
                                type="text"
                                placeholder="Please put cat name"
                                name="title"
                                value={state.catName}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Cat Age:
                            <input
                                type="text"
                                placeholder="Please put cat age"
                                name="title"
                                value={state.catAge}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Cat gender:
                            <input
                                type="text"
                                placeholder="Please put cat gender"
                                name="title"
                                value={state.gender}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Your Zip Code
                            <input
                                type="text"
                                placeholder='Please put your Zip Code'
                                name="zipCode"
                                value={state.zipCode}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Your City
                            <input
                                type="text"
                                placeholder="Please put your City"
                                name="city"
                                value={state.city}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Your message
                            <textarea
                                name="content"
                                id="announcement"
                                cols="80" rows="10"
                                value={state.content}
                                onChange={onChangeHandler}
                                placeholder="Please put your message here"
                            >
                            </textarea>
                        </label>
                        <input type="submit" value="Place announcement"/>
                    </form>
                </div>
            </div>
        </section>
    )

}

export default AdoptACat;