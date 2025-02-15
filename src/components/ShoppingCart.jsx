
export const ShoppingCart = ({useCart}) => {
    const { cart, removeFromCart } = useCart();
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="p-4 border rounded mt-2">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-500 text-white p-2 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    );
  };
