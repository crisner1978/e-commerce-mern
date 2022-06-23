import { loadStripe } from "@stripe/stripe-js"

let stripePromise

export const getStripe = async () => {
  if(!stripePromise) {
    stripePromise = await loadStripe(`${process.env.REACT_APP_STRIPE_PK}`)
  }
  return stripePromise;
}