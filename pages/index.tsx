import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [foo, setFoo] = useState('');

  const fetchData = async () => {
    try{
      const res = await fetch(`${process.env.BACKEND_SERVICE}/foo`)
      const isFoo = await res.json()
      setFoo(isFoo)
    }catch(err){
      console.error(err)
    }
  }
 
  useEffect(() => {
    fetchData()
  }, [])
 
  return (
    <div className={styles.container}>
      <Head>
        <title>React Template</title>
        <meta name="description" content="Sistema Acadêmico de Gestão" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} data-testid="title">React Template</h1>
         <p data-testid="api-return">{foo}</p>
      </main> 
    </div>
  )
}


export default Home
