import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { Footer } from './common/Footer'
import { Header } from './common/Header'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>

        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
