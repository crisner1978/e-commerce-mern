// @ts-nocheck
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { useShoppingCart } from "use-shopping-cart";
import { modalState } from '../atoms/modalAtom';
import useCheckout from '../utils/useCheckout';
import CartItem from "./CartItem";

export default function CartModal() {
  const [open, setOpen] = useRecoilState(modalState)
  const { formattedTotalPrice, cartCount, cartDetails } = useShoppingCart();
  const handleCheckout = useCheckout()

  const cartItems = Object.keys(cartDetails).map(key => cartDetails[key])
  console.log("cartItems", cartItems)

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex flex-col items-start p-4 full ">
                  <div className="flex items-center w-full mb-4">
                    <Dialog.Title className="text-gray-900 font-medium text-lg">
                      Cart Summary: {formattedTotalPrice} ({cartCount} items)
                    </Dialog.Title>
                  </div>
                  <hr />
                  {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} setOpen={setOpen} />
                  ))}
                  <div className="ml-auto mt-4">
                    <button
                      onClick={handleCheckout}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      style={{ marginRight: 4 }}>
                      Checkout Now
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Still Shopping
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}