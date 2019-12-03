import React, {useState, useEffect} from 'react';
const uniqid = require('uniqid');

function LoginPage() {
    const [userName, setUserName] = useState('');
    const [appUser, setAppUser] = useState('');

    const handleSubmit = () => {
        if (userName.trim()) {
            localStorage.setItem('userName', userName);
            localStorage.setItem('userID', uniqid());
            setUserName('');
            setAppUser(localStorage.getItem('userName'));
        }
    };

    useEffect(() => {
        if (localStorage.getItem('userName')) setAppUser(localStorage.getItem('userName'));
    },[appUser]);

    const logout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userID');
        setAppUser('')
    };

    const form =
        <div className='form-wrapper'>
            <h1>SIGN IN</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Please put your name
                    <input type="text" id='login'
                           placeholder='Please put your name'
                           value={userName}
                           onChange={(event => setUserName(event.target.value)) }
                    />
                </label>
                <input type="submit" value="Log in" />
            </form>
        </div>;

    const userOnPage =
        <div className='userOnPage'>
            <p>{`YOU ARE CURRENTLY LOGGED AS ${appUser.toUpperCase()}`}</p>
            <button className='logOut' onClick={logout}>LOG OUT</button>
        </div>;

    return (
        <section className='loginSection'>
            <div className='wrapper loginPage'>
                {appUser ? userOnPage : form}
            </div>
        </section>
    )

}

export default LoginPage;