import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ResetPassword.css'

function ResetPassword() {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        confirmPassword:""
    })

    const [error, setError] = useState(null)
    const [notification, setNotification] = useState(null)

    const navigate = useNavigate()

    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({...formData, [key]:value})
    }

    const handleReset = (event) => {
        event.preventDefault()
        
        if (formData.password == formData.confirmPassword){
            fetch('https://dedanite-online.onrender.com/resetpassword', {
                method:'PUT',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            .then((response) => {
                if (response.ok){
                    response.json()

                    setNotification('Password reset successfully')
                    setTimeout(() => {
                        navigate('/login')
                    }, 1000);
                }else{
                    return response.json().then((errorData) => {
                        throw new Error (`${errorData.message}`)
                    })
                }
            })
            .catch((error) => {
                setError(error.message)
                setTimeout(() => {
                    setError(null)
                }, 1000);
            })
        } else{
            setError('password not matching')
            setTimeout(() => {
                setError(null)
            }, 1000);
        }
    }

  return (
    <div className='reset'>
        <div className='reset_container'>
            <h1>Reset Password</h1>
            <form onSubmit={handleReset} className='reset_form'>
                <input 
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                />

                <input 
                    name='password'
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Password'
                />

                <input 
                    name='confirmPassword'
                    type='password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirm Password'
                />
                {error ? (<div className='error'>{error}</div>):("")}
                {notification ? (<div className='success'>{notification}</div>):("")}

                <button type='submit'>
                    Reset Password
                </button>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword;