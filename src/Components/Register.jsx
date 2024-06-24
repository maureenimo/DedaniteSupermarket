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
