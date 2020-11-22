import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './components/CheckoutForm'

const App = () => {
    const stripePromice = loadStripe('pk_test_51HlSYHKhxZ5cDMuiMpauk4IMhWzvtimO6TaL3f0JPaYTtNTpp4YjxKsvkaA7HvuEhJtkw9YdyKRVA4D5VFcSepRF00HPPIQcct')
    
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
