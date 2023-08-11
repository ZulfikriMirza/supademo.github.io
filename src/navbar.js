import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Supademo</div>
        <div>
            <ul className="nav-links">
                <li className="nav-link-item dropdown"><a href="/">Use Cases <span className='UseCase__Span'>&#8964;</span></a>
                    <ul className='dropdown-content'>
                        <li><a href='/'>Use Case 1</a></li>
                        <li><a href='/'>Use Case 2</a></li>
                        <li><a href='/'>Use Case 3</a></li>
                        <li><a href='/'>Use Case 4</a></li>
                        <li><a href='/'>Use Case 5</a></li>
                    </ul>
                </li>
                <li className="nav-link-item dropdown"><a href="/about">Product <span className='Product__Span'>&#8964;</span></a>
                    <ul className='dropdown-content'>
                        <li><a href='/'>Product 1</a></li>
                        <li><a href='/'>Product 2</a></li>
                        <li><a href='/'>Product 3</a></li>
                        <li><a href='/'>Product 4</a></li>
                        <li><a href='/'>Product 5</a></li>
                    </ul>
                </li>
                <li><a href="/services">Showcase</a></li>
                <li><a href="/contact">Pricing</a></li>
                <li><a href="/contact">Sign In</a></li>
                <button className='Demo__Button' href="/contact">Get Supademo For Free</button>
            </ul>

        </div>

    </nav>
  );
}

export default Navbar;