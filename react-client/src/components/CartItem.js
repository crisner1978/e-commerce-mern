import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import formatProductPrice from "../utils/formatProductPrice";

export default function CartItem({ cartItem, setOpen }) {
  const { setItemQuantity } = useShoppingCart();

  function handleQuantity(event) {
    setItemQuantity(cartItem.id, parseInt(event.target.value))
  }

  return (
    <div className="flex w-full">
      <div className="flex items-center px-4 py-3 hover:bg-gray-100 -mx-4 w-full justify-between">
        <div className="flex">
          <img
            className="h-16 w-16 rounded-full object-cover mx-1"
            src={cartItem.image}
            alt="avatar"
          />
          <p className="text-gray-600 text-lg mx-2">
            <Link to={`/${cartItem.id}`} onClick={() => setOpen(false)}>
            <span className="font-bold">{cartItem.name}</span>
            </Link>  <br />
            {formatProductPrice(cartItem)} x {cartItem.quantity}
          </p>
        </div>
        <div>
          <input
            style={{ width: 50 }}
            className="border-solid border-2"
            type="number"
            value={cartItem.quantity}
            onChange={handleQuantity}
            min={0}
          />
        </div>
      </div>
    </div>
  );
}
