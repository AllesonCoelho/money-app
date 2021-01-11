import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducers from './main/reducer.js'
import App from './main/app.jsx'

const store = createStore(reducers)
ReactDom.render(
    <Provider store={store}>
        <App/> 

    </Provider>,
    
document.getElementById('app'))