import {combineReducers} from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer.js'
import TabReducer from '../common/tab/tabReducer.js'
import BillingCycleReducer from '../billingCycle/billingCycleReducer.js'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})


export default rootReducer