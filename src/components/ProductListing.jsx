import { useContext } from "react";
import { CartContext } from "../CartContext";

export const ProductListing = () => {
    const { addToCart } = useContext(CartContext);
    const products = [
      {
        id: 1,
        name: "Aloe Vera",
        category: "Succulent",
        price: 10,
        image: "https://www.thespruce.com/thmb/HlY9QdgrPffczjaPfhw2Hk5H6Vk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grow-aloe-vera-indoors-1902776-06-744b832d509f43e8b7e5f6453a9ddaa0.jpg"
      },
      {
        id: 2,
        name: "Snake Plant",
        category: "Indoor",
        price: 15,
        image: "https://www.thespruce.com/thmb/qnP5HfMt-gdnpm-xZC3QkOLMBfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-hero-c6c97ea95d434a61a34304e43e588bf5.jpg"
      },
      {
        id: 3,
        name: "Peace Lily",
        category: "Flowering",
        price: 20,
        image: "https://www.thespruce.com/thmb/-w8JqCjjIjUkj1c1GAyYXY0HB4E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/peace-lily-care-guide-1902775-hero-f49b2f02640443a88d420b2173bce5f4.jpg"
      },
      {
        id: 4,
        name: "Spider Plant",
        category: "Indoor",
        price: 12,
        image: "https://www.thespruce.com/thmb/34A70hyZzTpQU6xT_4xUyTJSUlU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grow-and-care-for-spider-plants-1902777-hero-1f58e7e118b44b87bd32a041e7d24dcb.jpg"
      },
      {
        id: 5,
        name: "Pothos",
        category: "Indoor",
        price: 14,
        image: "https://www.thespruce.com/thmb/KJ2A6Q_MtSgbesZgktMDc_vBhVU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pothos-plant-care-guide-1902771-hero-e7f6125242a648fd81d190e205274799.jpg"
      },
      {
        id: 6,
        name: "Fiddle Leaf Fig",
        category: "Indoor",
        price: 25,
        image: "https://www.thespruce.com/thmb/Q-kGFW5X1lqNolS8H5Z60ezPbQQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fiddle-leaf-fig-care-guide-1902774-hero-121-60a918a8577e4be89646d62ea413b5e8.jpg"
      },
      {
        id: 7,
        name: "Rubber Plant",
        category: "Indoor",
        price: 18,
        image: "https://www.thespruce.com/thmb/fg5FOK0vdhe0IXdPr8ky3g8HdkY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rubber-plant-care-guide-1902773-hero-bd32165381b944d7b4b3d2e528f16ff7.jpg"
      },
      {
        id: 8,
        name: "ZZ Plant",
        category: "Low Maintenance",
        price: 22,
        image: "https://www.thespruce.com/thmb/htP6Oot07Ib6jASly-4AGADcVmc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grow-zz-plants-1902782-hero-1-29d0674468fc43818b1e961f3f0b26cb.jpg"
      },
      {
        id: 9,
        name: "Calathea",
        category: "Indoor",
        price: 19,
        image: "https://www.thespruce.com/thmb/8Mb5lW8AJhDqyoaT5dZx7hQb1tc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/calathea-plants-1902781-hero-d8737b4f841847cd9b689a64226a44aa.jpg"
      },
      {
        id: 10,
        name: "Monstera",
        category: "Tropical",
        price: 30,
        image: "https://www.thespruce.com/thmb/DEysBWE2Rg1rwbAnnd_ak5_7r4A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/monstera-deliciosa-care-guide-1902778-hero-5295ef022b1a4da584f73dff872d768b.jpg"
      }
    ];

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
        ))}
      </div>
    );
  };