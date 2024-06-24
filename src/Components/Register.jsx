import React, { useState } from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'

function Register() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""

    })
    const [error, setError] = useState(null)
    const [notification, setNotification] = useState(null)

    const handleChange = (event) => {
        const key = event.target.name
        const value = event.target.value
        setFormData({ ...formData, [key]: value })
    }

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (formData.password == formData.confirmPassword){
            fetch('https://dedanite-online.onrender.com/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            .then((response) => {
                if (response.ok){
                    response.json()
                    
                    setNotification('Successfully Registered!')
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000);
                    
                }else{
                    return response.json().then((errorData) => {
                        throw new Error (`${errorData.error}`)
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
            setError('password is not same')
        }
        
        
    }