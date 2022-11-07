import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({characters}: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {JSON.stringify(characters)}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const { results } = await res.json()

  return {
    props: {
      characters: results,
    },
  }
}


export default Home