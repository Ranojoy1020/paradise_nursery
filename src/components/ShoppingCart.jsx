import { useContext } from "react";
import { CartContext } from "../CartContext";

export const ShoppingCart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    return (
      <div className="p-4 flex flex-col items-center w-screen">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
          {cart.map((item, index) => (
            <div key={index} className="p-4 border rounded mt-2 w-sm bg-gray-200 border-0">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromCart(index)}
                className="mt-2 bg-red-500 text-white p-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          
          <h2 className="text-2xl font-bold">Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h2>
          </>
        )}
      </div>
    );
  };
