export const ProductListing = ({useCart}) => {
    const { addToCart } = useCart();
    const products = [
      { id: 1, name: "Aloe Vera", price: 10 },
      { id: 2, name: "Snake Plant", price: 15 },
      { id: 3, name: "Peace Lily", price: 20 },
    ];
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Available Plants</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {products.map((plant) => (
            <div key={plant.id} className="p-4 border rounded">
              <h3>{plant.name}</h3>
              <p>${plant.price}</p>
              <button
                onClick={() => addToCart(plant)}
                className="mt-2 bg-blue-500 text-white p-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

