import React from 'react'
import CardSection from './CardSection'

const CheckoutForm = () => {
    return (
        <div className="col-lg-12">
            <form>
                <h1>Formulario de Pago</h1>
                <div className="form-group">
                    <CardSection/>
                </div>
                <button className="btn btn-primary">Pay</button>
            </form>
        </div>
    )
}

export default CheckoutForm
