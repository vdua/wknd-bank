import React from 'react'
import * as styles from './Footer.module.css'

export default function Footer() {
    return (<footer className={styles.footer}>
        <div className={styles.disclaimer}>
        <h2>
            WKND
        </h2>
        <p> This website is solely made for demonstrating AEM Forms Headless Capabilities. It has no relation with 
            any Bank or Financial Institution</p>
        </div>
        <div>
        © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>)
}