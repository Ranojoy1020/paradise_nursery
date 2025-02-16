import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext';

export const Header = () => {
    const { cart } = useContext(CartContext);
    return (
      <header className="p-4 bg-green-700 text-white flex justify-between sticky top-0 z-10">
        <Link to="/" className="text-lg font-bold">Paradise Nursery</Link>
        <nav>
          <Link to="/products" className="mx-2">Products</Link>
        </nav>
        <div className='relative'>
        <Link to="/cart">🛒 </Link>
        {
          cart.length > 0 ?
          <span className='bg-red-500 text-white rounded-full text-xs absolute size-4 right-5 px-1'>{cart.reduce((acc, item) => acc + item.quantity, 0) }</span>
          : ''
        }
        
        </div>
      </header>
    );
  };