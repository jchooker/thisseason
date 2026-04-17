'use client';
import Link from 'next/link';
import Cart from './Cart';
import styles from '@/app/cart/cart.module.css'
import {useState} from 'react';

export default function Navbar() {
    //might need to have the itemcount exist elsewhere depending on scope requirements
    const [itemCount, setItemCount] = useState<number>(0);
    return (
        <nav className='navbar navbar-expland-lg navbar-light bg-light border-bottom'>
            <div className='container'>
                <Link href="/" className='navbar-brand fw-bold'>
                <h1>

                    Storefront Demo

                </h1>
                </Link>
                <div className='navbar-nav ms-auto'>
                    <Link href="/" className='nav-link'>
                    Home
                    </Link>
                    <Link href="/products" className='nav-link'>
                    Products
                    </Link>
                    {/* <Link href="/cart" className='nav-link remove-anchor-styling position-relative'>
                        <i className="bi bi-cart4" style={{fontSize: `2rem`}}></i>
                        <span className='top-0 start-100 text-light bg-danger position-absolute badge rounded-badge'>{itemCount}</span> */}
                        {/* <i className='bi bi-2-circle-fill bg-danger'>1</i> */}

                    {/* </Link> */}
                    <Cart itemCount={itemCount}></Cart>
                </div>
            </div>
        </nav>
    );
}