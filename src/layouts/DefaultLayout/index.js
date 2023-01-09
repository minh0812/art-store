import React from 'react'
import Router from '../../router'
import Footer from '../components/Footer'
import Header from '../components/Header'

const DefaultLayout = () => {
  return (
    <main>
        <Header/>
        <Router />
        <Footer />
    </main>
  )
}

export default DefaultLayout