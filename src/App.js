import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './components/CheckoutForm'

const App = () => {
    const stripePromice = loadStripe('stripe_public_key')
    
    return (
        <div className="container">
            <div className="row">
                <Elements stripe={stripePromice}>
                    {/* Load the checkout form */}
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    )
}

export default App
