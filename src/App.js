import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from './redux/Store'
import Preparation from './components/Preparation'
import Main from './components/Main'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Main/>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App