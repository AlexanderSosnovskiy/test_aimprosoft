import React from 'react'
import './styles/main.scss'
import Productist from './containers/ProductList/ProductList'
import Banner from './components/Banner/Banner'

function App() {
  return (
    <>
      <Banner />
      <main className='r2l-main-content'>
        <div className='container-fluid'>
          <header className='r2l-header-desk'></header>
          <header className='r2l-header-mob'></header>
        </div>
        <Productist />
      </main>
    </>
  )
}

export default App
