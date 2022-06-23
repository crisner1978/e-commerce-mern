import { useShoppingCart } from "use-shopping-cart";
import axios from 'axios'
import toast from 'react-hot-toast'
import { getStripe } from "./getStripe";

export default function useCheckout() {
  const { cartDetails, clearCart } = useShoppingCart()

  async function handleCheckout() {
    const stripe = await getStripe()
    const session = await axios.post('/api/checkout-sessions', cartDetails).then((res) => res.data).catch((error) => {
      toast.error("Checkout Failed!")
      console.log("Error during checkout", error)
    })
    if (session) {
      stripe.redirectToCheckout({ sessionId: session.id });
      // setTimeout(() => {
      //   clearCart()
      // }, 3000) 
    }
  }
  return handleCheckout;
}
