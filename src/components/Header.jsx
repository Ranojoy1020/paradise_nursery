import {Link} from 'react-router-dom'

export const Header = ({useCart}) => {
    const { cart } = useCart();
    return (
      <header className="p-4 bg-green-700 text-white flex justify-between">
        <Link to="/" className="text-lg font-bold">Paradise Nursery</Link>
        <Link to="/cart">🛒 ({cart.length})</Link>
      </header>
    );
  };