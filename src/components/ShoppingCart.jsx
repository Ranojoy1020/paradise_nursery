import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
    const { cart,addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
    return (
      <div className="p-4 flex flex-col items-center w-screen">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
          {cart.map((item, index) => (
            <div key={index} className="p-4 rounded mt-2 w-sm bg-gray-200 border-0 relative">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <img src={`../../public/${item.image}`} alt="Image" className="h-40 w-32 absolute top-0 right-0" />
              <button onClick={() => addToCart(item)} className="w-10 h-10 mx-1 rounded-full bg-green-400 text-white">+</button>
              <button onClick={() => removeFromCart(item)} className="w-10 h-10 mx-1 rounded-full bg-red-400 text-white">-</button>
              <button
                onClick={() => deleteFromCart(item)}
                className="m-2 bg-red-500 text-white p-2 rounded"
              >
                🗑️  
              </button>
            </div>
          ))}
          <div className="flex w-75 justify-between my-5">
          <h2 className="text-2xl font-bold">Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
          <button onClick={() => alert("Coming soon...")} className=" bg-blue-500 text-white p-2 rounded">Checkout</button>
          </div>
          </>
        )}
        <Link to='/products' className="mt-4 bg-blue-500 text-white p-2 rounded">Continue Shopping</Link>
      </div>
    );
  };
