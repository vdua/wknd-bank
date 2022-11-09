import React from "react";
import * as styles from './Navigation.module.css'
import { Link } from "gatsby"
export default function Navigation() {
    return (
        <nav id="sticky-header" className={styles.navContainer}>
            <h2 className={styles.logo}>W</h2>
            <ul className={styles.nav}>
                <li><Link href="/">Home</Link></li>
                <li>
                    <Link href="/invest">
                        Invest
                    </Link></li>
                <li>
                    <Link href="/insure">
                        Insure
                    </Link></li>
                <li>
                    <Link href="/borrow">
                        Borrow
                    </Link></li>
                <li>
                    <Link href="/contact-us">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}