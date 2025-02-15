import {Link} from 'react-router-dom'

export const LandingPage = () => (
    <div className="h-screen flex flex-col justify-center items-center bg-green-200">
      <h1 className="text-3xl font-bold">Welcome to Paradise Nursery</h1>
      <p className="mt-2">Your one-stop shop for beautiful houseplants!</p>
      <Link to="/products" className="mt-4 bg-green-600 text-white p-2 rounded">Get Started</Link>
    </div>
  );