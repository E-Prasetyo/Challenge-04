/* eslint-disable no-unused-vars */
import React from 'react'
import { Navbar, Footer, Header } from '../../Components'
import { Outlet } from 'react-router-dom'

const index = ({children}) => {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default index