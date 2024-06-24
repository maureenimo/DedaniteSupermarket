import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login({setCustomer}) {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const [error, setError] = useState(null)

    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({...formData, [key]: value})
    }

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()

        fetch('https://dedanite-online.onrender.com/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then((response) => {
            if (response.ok){
                return response.json()
            }else{
                throw new Error ('Wrong credential')
            }
        })
    
        .then((data) => {
            if (data) {
                sessionStorage.setItem('user_id', data.id);
                console.log('User ID stored in session:', data.id);
                setCustomer(data);
                navigate('/');
            } else {
                throw new Error ("Wrong credential");
            }
        })
        .catch((error) => {
            setError(error.message)
            setTimeout(() => {
                setError(null)
            }, 1000);
        })
        
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <h1 className='login-heading'>Welcome Back !</h1>
            <form className='login-form' onSubmit={handleLogin}>
                <h2>Login</h2>
                <input 
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                

                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />
                {error ? (<div className='error'>{error}</div>):("")}

                <div className='forgotpassword'>
                    <Link to='/resetpassword'>Forgot password ?</Link>
                </div>

                <button className='login_button' type='submit'>
                    Sign in
                </button>

                <div className='to_register'>
                    <p>Don't have an account ?</p>
                    <Link to='/register'>Register Now </Link>
                </div>
            


                
            </form>
            <div className='image'>
                <img src='https://i.im.ge/2024/02/08/cLhGuW.logo-color.png'/>
            </div>
        </div>
    </div>
  )
}

export default Login