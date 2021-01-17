import axios from 'axios'
import { template } from 'lodash'
import { toastr } from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions.js'
const BASE_URL = 'http://localhost:3003/api'


export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CICLES_FETCHED',
        payload: request
    }
}


export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operacao Realizada com Sucesso')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            }).catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycles){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycles)
    ]
}