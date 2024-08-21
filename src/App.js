import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {store} from './redux/Store'
import Preparation from './components/Preparation'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Preparation/>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App