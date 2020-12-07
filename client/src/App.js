import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { useRoutes } from './routes'

import { Footer } from './common/Footer'
import { Header } from './common/Header'

function App() {
  const router = useRoutes()
  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <main>
            {router}
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
