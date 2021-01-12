import {combineReducers} from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer.js'
import TabReducer from '../common/tab/tabReducer.js'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})


export default rootReducer