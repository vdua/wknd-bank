import React from 'react'
import Cards from '../components/Card'
import Footer from '../components/Footer'
import LoremIpsum from '../components/Lorem'
import Navigation from '../components/Navigation'
import * as styles from './Borrow.module.css'
import Seo from "../components/seo"
import {AdaptiveForm} from '@aemforms/af-react-renderer'
import {mappings} from '@aemforms/af-react-components'
import { useEffect, useState } from 'react'
import { Provider as Spectrum3Provider, defaultTheme } from '@adobe/react-spectrum'
import { graphql, useStaticQuery } from "gatsby"
const cards = [
  {
    id: 1,
    title: 'Honest guidance',
    description : 'Know before you apply'
  },
  {
    id: 2,
    title: 'Affordable',
    description : 'Get an offer you can afford to repay'
  },
  {
    id: 3,
    title: 'Competitive',
    description : 'Interest rate based on your risk profile'
  },
  {
    id: 4,
    title: 'Transparent',
    description : 'No hidden fees'
  }
]
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

const url = "http://localhost:4502/adobe/forms/af/L2NvbnRlbnQvZm9ybXMvYWYvd2tuZC9sb2FuLWNhbGN1bGF0b3ItMQ=="

export default function Borrow() {

  const data = useStaticQuery(graphql`
      query {
        formJson {
          definition
        }
      }
    `)

    console.log(data)

  return (
    <div className={styles.container}>
      <Navigation/>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Get a personal loan</h1>
          <h2>Applying is simple</h2>
        </div>
        <div className={styles.welcomeContainer}>
          <h1>
            Why choose a Personal Loan from us
          </h1>
          <Cards cards={cards}/>
        </div>
        <div className={styles.loanCalculator}>
            <h1>Use the calculator to see what works for you</h1>
        </div>
        <Spectrum3Provider theme={defaultTheme}>
            <AdaptiveForm mappings={mappings} formJson={data.formJson.definition} />
        </Spectrum3Provider>
      </main>

        <Footer/>
    </div>
  )
}

export const Head = () => <Seo title="Borrow" />