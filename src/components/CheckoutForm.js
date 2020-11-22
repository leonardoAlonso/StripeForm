import React from 'react'
import CardSection from './CardSection'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    
    const handleSubmit = async (ev) => {
      ev.preventDefault();

      if (!stripe || !elements) {

        return;

      }

      const cardElement = elements.getElement(CardElement);

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })

      if (error) {
        console.log(['error'], error);
      } else {
        console.log(['PaymentMethod'], paymentMethod);
        let response = fetch('http://localhost/api/acept_payment',
          {'payment_method': paymentMethod}).then((response) => {
            console.log(response)
          }).catch((error) => {
            console.log('[error]', error)
          });
      }

    }

    return (
        <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
                <h1>Formulario de Pago</h1>
                <div className="form-group">
                    <CardSection/>
                </div>
                <button disabled={!stripe} className="btn btn-primary">Donate</button>
            </form>
        </div>
    )
}

export default CheckoutForm;
