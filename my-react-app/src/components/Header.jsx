import React from 'react';
import { CiUser } from "react-icons/ci";
const Header = () => {
    return (
        <div>
            <header className="header py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center align-items-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                       <img src="https://icms-image.slatic.net/images/ims-web/e6ac6883-1158-4663-bda4-df5a1aa066e5.png" alt="" srcset="" className='logo'/>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
                    <nav className="nav ms-auto">
                        <ul className="nav me-auto">
                            <li className="nav-item"><a href="/" className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>
                            <li className="nav-item"><a href="./Features" className="nav-link link-body-emphasis px-2">Features</a></li>
                            <li className="nav-item"><a href="./Product" className="nav-link link-body-emphasis px-2">Product</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">FAQs</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">About</a></li>
                        </ul>
                        <ul className="nav">
                            <li className="nav-item"><a href="./login" className="nav-link link-body-emphasis px-2"><CiUser />Login</a></li> 
                            <li className="nav-item"><a href="#" className="nav-link link-body-emphasis px-2">Sign up</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;
