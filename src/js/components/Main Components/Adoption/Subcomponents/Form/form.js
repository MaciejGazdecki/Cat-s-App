import React from 'react';
import useForm from 'react-hook-form';
import axios from "axios";
import uniqid from "uniqid"
import PropTypes from "prop-types"


const axiosAdoption = axios.create({
    baseURL:'https://cats-app-d2f04.firebaseio.com/'
});

function Form() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        event.preventDefault();
        await axiosAdoption.post('/adoption.json', {...data, id: uniqid()})
            .then(res => console.log(res, alert("announcement placed")))
            .catch(err => console.log(err));
    };
    return (
            <form  className='announcement' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        Title:
                        <input
                            type="text"
                            placeholder="Please put tittle here"
                            name="title"
                            ref={register({required:true, maxLength: 50})}
                        />
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'maxLength' && (
                            <p>You can only use 50 characters</p>
                        )}
                    </label>
                    <label>
                        Your name:
                        <input
                            type="text"
                            placeholder='Please put your name'
                            name="name"
                            ref={register({required:true, minLength: 3})}
                        />
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'minLength' && (
                            <p>Minimum length is 3 characters</p>
                        )}
                    </label>
                    <label>
                        Your email:
                        <input
                            type="email"
                            placeholder="Please put your email"
                            name="email"
                            ref={register({required:true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/})}
                        />
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'pattern' && (
                            <p>Email format incorrect</p>
                        )}
                    </label>
                    <label>
                        Cat name:
                        <input
                            type="text"
                            placeholder="Please put cat name"
                            name="catName"
                            ref={register({required:true, minLength: 3})}
                        />
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'minLength' && (
                            <p>Minimum length is 3 characters</p>
                        )}
                    </label>
                    <label>
                        Cat Age (months or years):
                        <input
                            type="text"
                            placeholder="Please put cat age"
                            name="catAge"
                            ref={register({required:true, minLength: 3, maxLength: 10})}
                        />
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'minLength' && (
                            <p>Minimum length is 3 characters</p>
                        )}
                        {errors.title && errors.title.type === 'maxLength' && (
                            <p>Maximum length is 10 characters</p>
                        )}
                    </label>
                    <label>
                        Cat gender:
                        <input
                            type="text"
                            placeholder="Please put cat gender"
                            name="gender"
                            ref={register({required:true, minLength: 3, maxLength: 10})}
                        />
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'minLength' && (
                            <p>Minimum length is 3 characters</p>
                        )}
                        {errors.title && errors.title.type === 'maxLength' && (
                            <p>Maximum length is 10 characters</p>
                        )}
                    </label>
                </div>
                <div>
                    <label>
                        Your Zip Code
                        <input
                            type="text"
                            placeholder='Please put your Zip Code'
                            name="zipCode"
                            ref={register({required:true, pattern: /[0-9]{5}/ || /[0-9]{2}-[0-9]{3}/ })}
                        />
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'pattern' && (
                            <p>Invalid postcode format, please put eg. 12345 or 12-345</p>
                        )}
                    </label>
                    <label>
                        Your City
                        <input
                            type="text"
                            placeholder="Please put your City"
                            name="city"
                            ref={register({required:true, minLength: 3})}
                        />
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'minLength' && (
                            <p>Minimum length is 3 characters</p>
                        )}
                    </label>
                    <label>
                        Your message
                        <textarea
                            name="content"
                            id="announcement"
                            cols="80" rows="9"
                            placeholder="Please put your message here"
                            ref={register({required:true, minLength: 3, maxLength: 300})}
                        >
                        </textarea>
                        {errors.title && errors.title.type === 'required' && (
                            <p>This field is required</p>
                        )}
                        {errors.title && errors.title.type === 'minLength' && (
                            <p>Minimum length is 3 characters</p>
                        )}
                        {errors.title && errors.title.type === 'maxLength' && (
                            <p>Maximum length is 300 characters</p>
                        )}
                    </label>
                    <input className="submitBtn" type="submit" value="Place announcement"/>
                </div>
            </form>
    )
}

export default Form;

Form.propTypes = {
    state: PropTypes.object.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    submitHandler: PropTypes.func.isRequired
};