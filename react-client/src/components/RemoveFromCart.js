import React from "react";
import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

export default function RemoveFromCart({ product }) {
  const { removeItem, cartCount } = useShoppingCart()

  function handleRemoveItem() {
    removeItem(product.id)
    toast.success(`${product.name} is removed from your cart!`)
  }
  console.log("product.id", product.id)
  return (
    <button disabled={!cartCount} onClick={handleRemoveItem} className={` ${cartCount === 0 ? "bg-gray-400 flex ml-2 text-gray-200 border-0 py-2 px-6 focus:outline-none rounded" : "flex ml-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"} `}>
      Remove
    </button>
  );
}
