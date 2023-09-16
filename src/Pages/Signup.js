import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {

    const [credentials, setcredentials] = useState({ username: "", email: "", password: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("hi");
        const response = await fetch("http://localhost:8000/api/createUser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username: credentials.username, email: credentials.email, password: credentials.password})
        });
        const json =await response.json()
        console.log(json);


        if(!json.success)
        alert('Enter Correct Credentials');
    }

    const onChanges = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Name">Username</label>
                        <input type="text" className="form-control" placeholder="Enter Name" name='username' value={credentials.username} onChange={onChanges} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChanges} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChanges} />
                    </div>
                    {/* <Link to='/Login' type="submit" className='m-3 btn btn-info'>Submit</Link> */}

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to='/Login' className='m-3 btn btn-danger'>Already a User</Link>
                </form>
            </div>
        </>
    )
}

export default Signup;