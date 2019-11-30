import React, {useState} from 'react';
import axios from 'axios'

const axiosAdoption = axios.create({
   baseURL:'https://cats-app-d2f04.firebaseio.com/'
});

function AdoptACat() {
    const [name, setName] = useState('');
    const [surname,setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [localization, setLocalization] = useState('');
    const [content, setContent] = useState('');

    const submitHandler = async () => {
        event.preventDefault();
        await axiosAdoption.post('/adoption.json', {
            name: name,
            surname:surname,
            email:email,
            zipCode: zipCode,
            city: city,
            localization: localization,
            content: content
        })
            .then(res => console.log(res, alert("announcement placed")))
            .catch(err => console.log(err));
        setName('');
        setSurname('');
        setEmail('');
        setZipCode('');
        setCity('');
        setLocalization('');
        setContent('')
    };

    return (
        <section className='adoptionSection'>
            <div className='wrapper adoptACatWrapper'>
                <h2>Adoption</h2>
                <div className='addAnnouncement'>
                    <form onSubmit={submitHandler}>
                        <label>
                            Please put your name
                            <input
                                type="text"
                                placeholder='Please put your name'
                                name="name"
                                value={name}
                                onChange={event => setName(event.target.value)}
                            />
                        </label>
                        <label>
                            Please put your surname
                            <input
                                type="text"
                                placeholder="Please put your name"
                                name="surname"
                                value={surname}
                                onChange={event => setSurname(event.target.value)}
                            />
                        </label>
                        <label>
                            Please put your email
                            <input
                                type="email"
                                placeholder="Please put your email"
                                name="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </label>
                        <label>
                            Please put your Zip Code
                            <input
                                type="text"
                                placeholder='Please put your Zip Code'
                                name="ZipCode"
                                value={zipCode}
                                onChange={event => setZipCode(event.target.value)}
                            />
                        </label>
                        <label>
                            Please put your City
                            <input
                                type="text"
                                placeholder="Please put your City"
                                name="city"
                                value={city}
                                onChange={event => setCity(event.target.value)}
                            />
                        </label>
                        <label>
                            Please put your localization
                            <input
                                type="text"
                                placeholder="Please put your localization"
                                name="localization"
                                value={localization}
                                onChange={event => setLocalization(event.target.value)}
                            />
                        </label>
                        <label>
                            Please put your message
                            <textarea
                                name="content"
                                id="announcement"
                                cols="80" rows="10"
                                value={content}
                                onChange={event => setContent(event.target.value)}
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