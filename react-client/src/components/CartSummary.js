import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { useShoppingCart } from "use-shopping-cart";
import { modalState } from "../atoms/modalAtom";

export default function CartSummary() {
  const { formattedTotalPrice, cartCount } = useShoppingCart()
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useRecoilState(modalState)
  
  return (
    <>
      <nav onClick={() => setOpen(true)} className="md:ml-auto flex flex-wrap items-center text-base cursor-pointer">
        <span className="hover:text-white flex items-center mr-3">
          <span className="mr-3">{formattedTotalPrice} ({cartCount})</span>
          <ShoppingCartIcon className="h-8 w-8" />
        </span>
      </nav>
    </>
  );
}
