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
        surname:'',
        email:'',
        city:'',
        zipCode:'',
        localization:'',
        content:''
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
            <div className='wrapper adoptACatWrapper'>
                <h2>Adoption</h2>
                <div className="annoucements">
                    {/*{announcements.map(el =>*/}
                    {/*<div className="announcement" key={el.id}>*/}
                    {/*    <p>{el.title}</p>*/}
                    {/*</div>*/}
                    {/*)}*/}
                </div>
                <div className='addAnnouncement'>
                    <form onSubmit={submitHandler}>
                        <label>
                            Title
                            <input
                                type="text"
                                placeholder="Please put tittle of your announcement"
                                name="title"
                                value={state.title}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Please put your name
                            <input
                                type="text"
                                placeholder='Please put your name'
                                name="name"
                                value={state.name}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Please put your surname
                            <input
                                type="text"
                                placeholder="Please put your name"
                                name="surname"
                                value={state.surname}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Please put your email
                            <input
                                type="email"
                                placeholder="Please put your email"
                                name="email"
                                value={state.email}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Please put your Zip Code
                            <input
                                type="text"
                                placeholder='Please put your Zip Code'
                                name="zipCode"
                                value={state.zipCode}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Please put your City
                            <input
                                type="text"
                                placeholder="Please put your City"
                                name="city"
                                value={state.city}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Please put your localization
                            <input
                                type="text"
                                placeholder="Please put your localization"
                                name="localization"
                                value={state.localization}
                                onChange={onChangeHandler}
                            />
                        </label>
                        <label>
                            Please put your message
                            <textarea
                                name="content"
                                id="announcement"
                                cols="80" rows="10"
                                value={state.content}
                                onChange={onChangeHandler}
                            >
                            </textarea>
                        </label>
                        <input type="submit" value="Send announcement"/>
                    </form>
                </div>
            </div>
        </section>
    )

}

export default AdoptACat;