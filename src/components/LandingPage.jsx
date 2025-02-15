import {Link} from 'react-router-dom'



export const LandingPage = () => (
    <div className="h-screen flex flex-col justify-center items-center bg-black/50 text-white ">
      <img src="../../public/bgImg.jpg" alt="houseplants" className="w-full h-full object-cover -z-10 absolute" />
      <h1 className="text-3xl font-bold ">Welcome to Paradise Nursery</h1>
      <p className="mt-2">Your one-stop shop for beautiful houseplants!</p>
      <Link to="/products" className="mt-4 bg-green-600 text-white p-2 rounded">Get Started</Link>
    </div>
  );