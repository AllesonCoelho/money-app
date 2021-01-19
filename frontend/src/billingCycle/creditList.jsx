import React, { Component } from 'react'
import Grid from '../common/layout/grid'
import { Field } from 'redux-form'

class CreditList extends Component {

    renderRows() {
        return (
            <tr>
                <td><Field name='debts[0].name' component='input' /></td>
                <td><Field name='debts[0].value' component='input' /></td>
                <td></td>
            </tr>
        )
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Creditos</legend>
                    <table className='table'>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Acoes</th>
                        </tr>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>

                </fieldset>

            </Grid>
        )
    }
}

export default CreditList