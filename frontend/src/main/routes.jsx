import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'
import BillingCycle from '../billingCycle/billingCycle.jsx'
import Dashboard from '../dashboard/dashboard.jsx'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingCycle' component={BillingCycle}/>
        <Redirect from='*' to='/'/>

    </Router>

)