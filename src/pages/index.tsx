import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DUGA-1</title>
        <meta name="description" content="Fictional hosting service website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <main className={styles.main}>
        Learn. Build. Repeat.

        We offer server solutions for our customers.
      </main>

      <Footer />
    </>
  )
}
