import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {init} from '../billingCycle/billingCycleActions.js'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput.jsx'
import ItemList from './itemList.jsx'
import Summary from './summary.jsx'

class BillingCycleForm extends Component{
    calculareSummary(){
        const sum = (t, v) => t + v
        return{
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum, 0),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum, 0)
        }
    }
    render(){
        const {handleSubmit, readOnly, credits, debts} = this.props
        const {sumOfCredits, sumOfDebts} = this.calculareSummary()
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome'/>

                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly}
                    label='Mes' cols='12 4' placeholder='Informe o mes'/>

                    <Field name='year' component={LabelAndInput} type='number' readOnly={readOnly}
                    label='Ano' cols='12 4' placeholder='Informe o ano'/>

                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>

                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                    field='credits' legend='Creditos'/>

                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                    field='debts' legend='Debitos' showStatus={true} />

                </div>
                <div className="box-footer">
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className="btn btn-default"
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>

        )
    }
}
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state =>({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)