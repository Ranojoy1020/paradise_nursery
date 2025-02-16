import { useState, useContext } from "react";
import { CartContext } from "../CartContext";

export const ProductListing = () => {
    const { addToCart } = useContext(CartContext);
    const [products, setProduct] = useState([
      {
        id: 1,
        name: "Aloe Vera",
        category: "Succulent",
        price: 10,
        image: "Aloe.jpg",
        quantity: 0,
        disabled: false
      },
      {
        id: 2,
        name: "Snake Plant",
        category: "Indoor",
        price: 15,
        image: "SnakePlant.jpg",
        quantity: 0,
        disabled: false
      },
      {
        id: 3,
        name: "Peace Lily",
        category: "Flowering",
        price: 20,
        image: "PeaceLily.jpeg",
        quantity: 0,
        disabled: false
      },
      {
        id: 4,
        name: "Spider Plant",
        category: "Indoor",
        price: 12,
        image: "SpiderPlant.jpeg",
        quantity: 0,
        disabled: false
      },
      {
        id: 5,
        name: "Pothos",
        category: "Indoor",
        price: 14,
        image: "Pothos.jpeg",
        quantity: 0,
        disabled: false
      },
      {
        id: 6,
        name: "Fiddle Leaf Fig",
        category: "Indoor",
        price: 25,
        image: "FiddleLeaf.jpg",
        quantity: 0,
        disabled: false
      },
      {
        id: 7,
        name: "Rubber Plant",
        category: "Indoor",
        price: 18,
        image: "RubberPlant.jpg",
        quantity: 0,
        disabled: false
      },
      {
        id: 8,
        name: "ZZ Plant",
        category: "Low Maintenance",
        price: 22,
        image: "zzPlant.jpg",
        quantity: 0,
        disabled: false
      },
      {
        id: 9,
        name: "Calathea",
        category: "Indoor",
        price: 19,
        image: "Calathea.jpg",
        quantity: 0,
        disabled: false
      },
      {
        id: 10,
        name: "Monstera",
        category: "Tropical",
        price: 30,
        image: "Monstera.jpg",
        quantity: 0,
        disabled: false
      }
    ]);

    const groupedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold">Available Plants</h2>
  
        {Object.entries(groupedProducts).map(([category, items]) => (
          <div key={category} className="mt-6">
            <h3 className="text-xl font-semibold border-b-2 pb-2">{category}</h3>
            <div className="grid grid-cols-3 gap-4 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {items.map((plant) => (
                <div key={plant.id} className="p-4 border rounded relative bg-amber-100 border-0">
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <img src={`../../public/${plant.image}`} alt="Image" className="h-32 w-32 absolute right-0 top-0"  />
                  <button
                    disabled={plant.disabled}
                    onClick={() => {
                      addToCart(plant);
                      plant.disabled = true;
                      setProduct([...products]);
                    }}
                    className="mt-2 bg-blue-500 text-white p-2 rounded disabled:opacity-50"
                  >
                    {plant.disabled ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };