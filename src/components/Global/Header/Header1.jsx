import Link from 'next/link';
import { FiPercent, FiShoppingCart } from "react-icons/fi"; 
import { FiUser } from "react-icons/fi";
import { FaPercentage } from "react-icons/fa";
const Header1 = () => {
  return (
    <header className="bg-white ">
      <div className="container mx-auto flex items-center justify-between py-3 ">
        {/* Logo */}
        <div className="flex items-center ">
          <img src="/nav.png" alt="Logo"  className='w-50 h-auto'/>    
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-6">
  <Link href="/cart" className="relative">
    <FiShoppingCart className="h-6 w-6 text-gray-700" /> {/* Using react-icon */}
  </Link>

  <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full">
      <FaPercentage className="text-black text-xl" />
    </div>

  <button className="flex items-center border-2 border-green-600 px-3 py-1 rounded-md space-x-2 hover:bg-green-50 transition">
      <FiUser className="h-5 w-5 text-green-600" />
      <span className="text-green-600 font-medium">Login</span>
    </button>


   

        </div>




      </div>
    </header>
  );
};

export default Header1;
