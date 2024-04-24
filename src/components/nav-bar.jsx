import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import { useState } from 'react';

const Navbar = () => {
    const [ navOpen, setNavOpen ] = useState(false);
    
    const toggleNavOpen = () => {
        setNavOpen(!navOpen);
    }
    return (
        <>
            <nav className="sticky top-0 z-50 py-3 background-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative lg:text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img src={ logo } alt="logo" className="h-10 w-10 mr-2" />
                            <span className="text-xl tracking-tight">ComputR</span>
                        </div>
                        <ul className="hidden lg:flex ml-14 space-x-12">
                            { navItems.map((item, index) => (
                                <li key={ index }>
                                    <a href={ item.href }>{ item.text }</a>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden lg:flex justify-center items-center space-x-12">
                        <a href="#" className="border px-3 py-2 rounded-md">Sign In</a>
                        <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 px-3 py-2 rounded-md">Create an Account</a>
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={ toggleNavOpen }>
                                { navOpen ? <X /> : <Menu /> }
                            </button>
                        </div>
                    </div>
                    {navOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className='mb-6'>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={ item.href }>{ item.text }</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="px-3 py-2 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
                </div>
            </nav>




        </>
    );
}

export default Navbar;