import React from 'react';

function Form(props) {
    const {state, onChangeHandler,submitHandler} = props;
    return (
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
    )
}

export default Form;