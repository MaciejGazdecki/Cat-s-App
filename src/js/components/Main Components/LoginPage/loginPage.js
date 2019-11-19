import React, {useState, useEffect} from 'react';
const uniqid = require('uniqid');

function LoginPage() {
    const [user, setUser] = useState('');

    const handleSubmit = () => {
        if (user.trim()) {
            localStorage.setItem('userName', user);
            localStorage.setItem('userID', uniqid());
        }
    };

    let pageUser = '';
    if (localStorage.getItem('userName')) pageUser = localStorage.getItem('userName');

    const form =
        <>
            <h1>SIGN IN</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Please put your name
                    <input type="text" id={'login'}  onChange={(event => setUser(event.target.value)) }/>
                </label>
                <input type="submit" value="Log in" />
            </form>
        </>;

    const userOnPage =
        <div className={'userOnPage'}>
            <p>{`YOU ARE CURRENTLY LOGGED AS ${pageUser.toUpperCase()}`}</p>
        </div>;

    return (
        <div className={'wrapper'}>
            <div className={'loginPage'}>
                {pageUser ? userOnPage : form}
            </div>
        </div>
    )

}

export default LoginPage;