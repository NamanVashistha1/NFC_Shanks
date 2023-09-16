import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const [credentials, setcredentials] = useState({ email: "", password: "" })

    // When a user checks in:
    const checkIn = () => {
        const today = new Date().toISOString().split('T')[0];
        const lastCheckInDate = localStorage.getItem('lastCheckInDate');

        if (lastCheckInDate === today) {
            // User has already checked in today.
            alert('You have already checked in today.');
        } else {
            // User is checking in for the first time today.
            localStorage.setItem('lastCheckInDate', today);
            const streak = parseInt(localStorage.getItem('streak') || 0);
            console.log(localStorage.setItem('streak', streak + 1));

            // Reward the user with one coin.
            const coins = parseInt(localStorage.getItem('coins') || 0);
            localStorage.setItem('coins', coins + 1);
            alert('You earned 1 coin for checking in!');
        }
    };

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/loginUser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);


        if (!json.success)
            alert('Enter Correct Credentials');

        if (json.success) {
            localStorage.setItem("authToken", json.authToken)
            console.log(localStorage.getItem("authToken"))
            navigate("/")
            checkIn()
        }
    }



    const onChanges = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChanges} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChanges} />
                    </div>
                    <Link to='/Survey' type="submit" className='m-3 btn btn-success'>Submit</Link>

                    {/* <button type="submit" className="m-3 btn btn-success">Submit</button> */}
                    <Link to='/SignUp' className='m-3 btn btn-danger'>New User</Link>
                </form>
            </div>
        </>
    )
}