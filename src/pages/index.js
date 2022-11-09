import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from './Home.module.css'
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Cards from "../components/Card"
import LoremIpsum from "../components/Lorem"
const json = {
  "adaptiveform": "0.11.0-Pre",
  "items": [
    {
      "fieldType": "text-input",
      "label": {
        "value": "Enter your Name"
      },
      "name": "textInput"
    }
  ],
  "metadata": {
    "grammar": "json-formula-1.0.0",
    "version": "1.0.0"
  }
}
const cards = [
  {
    id: 1,
    title: 'Accounts',
    description : 'Manage your Money'
  },
  {
    id: 2,
    title: 'Loans',
    description : 'Achieve your Goals'
  },
  {
    id: 3,
    title: 'Credit Cards',
    description : 'Get Ahead'
  },
  {
    id: 4,
    title: 'Save & Invest',
    description : 'Grow your money'
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <div className={styles.container}>
    <Navigation/>

<main className={styles.main}>
  <div className={styles.hero}>
    <h1>We take your money matters seriously.</h1>
    <h2>so that you do not.</h2>
  </div>
  <div className={styles.welcomeContainer}>
    <div className={styles.welcome}>
      <h1>Welcome to your new bank</h1>
      <p>We’re here to bring your life goals closer, and always will be... 
        Because we take your money choices as seriously as you do. #WKNDBank</p>
    </div>
    <h1 className={styles.title}>
      What we can do
    </h1>
    <Cards cards={cards}/>
  </div>
  <div className={styles.whyBank}>
    <div className={styles.whyBankImage}></div>
    <div className={styles.whyBankText}>
      <h1>Why WKND</h1>
      <ul>
        <li><LoremIpsum words={10}/></li>
        <li><LoremIpsum words={10}/></li>
        <li><LoremIpsum words={10}/></li>
      </ul>
    </div>
  </div>
</main>

<Footer />
    </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
