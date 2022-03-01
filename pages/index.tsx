import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Head>
        <title>Modal Headless UI Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal />
    </div>
  )
}

export default Home
