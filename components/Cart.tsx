'use client';
import styles from '../app/cart/cart.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Cart({itemCount}: {itemCount: number}) {
    return (
        <a href='/cart' className='remove-anchor-styling'>
            <div className={styles.iconWrapper}>
                <i className='bi bi-cart4' style={{color: `black`, fontSize: `2rem`}}></i>
                {itemCount > 0 ? (
                    <span className={styles.roundedBadge}>
                        {itemCount > 99 ? '99+' : itemCount}
                    </span>
                ) : (

                    <span className={styles.roundedBadge}>
                        0
                    </span>
                )
            }
            </div>
        </a>
    );
}