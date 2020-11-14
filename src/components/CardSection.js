import React, { useState } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import '../css/stripe_form.css'

const  CardSection = () => {

    const [state, setState] = useState({
        'error': false,
        'errorMessage': ''
    })

    const card_element_options = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4",
                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a",
            },
            hidePostalCode: true
        }
    }

    const handleOnChanage = (event) => {
        console.log(event)
        setState({...state, errorMessage: ''})
        if (event.error) {
            setState({error: true, errorMessage:event.error.message})
        }
    }

    return (
        <>
            <CardElement options={card_element_options} onChange={handleOnChanage}/>
            <div className="card-errors">
            <p>{state.errorMessage}</p>
            </div>
        </>
    )
}

export default CardSection
