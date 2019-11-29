import React, {useState} from 'react';
const uniqid = require('uniqid');

function LoginPage() {
    const [user, setUser] = useState('');

    const handleSubmit = () => {
        if (user.trim()) {
            localStorage.setItem('userName', user);
            localStorage.setItem('userID', uniqid());
            setUser('');
        }
    };

    let pageUser = '';
    if (localStorage.getItem('userName')) pageUser = localStorage.getItem('userName');

    const form =
        <div className='form-wrapper'>
            <h1>SIGN IN</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Please put your name
                    <input type="text" id='login'
                           placeholder='Please put your name'
                           value={user}
                           onChange={(event => setUser(event.target.value)) }
                    />
                </label>
                <input type="submit" value="Log in" />
            </form>
        </div>;

    const logout = () => {
      localStorage.removeItem('userName');
      localStorage.removeItem('userID')
    };

    const userOnPage =
        <div className='userOnPage'>
            <p>{`YOU ARE CURRENTLY LOGGED AS ${pageUser.toUpperCase()}`}</p>
            <button className='logout' onClick={logout}>LOG OUT</button>
        </div>;

    return (
        <section className='loginSection'>
            <div className='wrapper loginPage'>
                {pageUser ? userOnPage : form}
            </div>
        </section>
    )

}

export default LoginPage;