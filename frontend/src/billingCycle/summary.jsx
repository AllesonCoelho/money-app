import React, {Component} from 'react'


import Grid from '../common/layout/grid.jsx'
import Row from '../common/layout/row.jsx'
import ValueBox from '../common/widget/valueBox.jsx'


export default ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} 
                text='Total de Creditos'/>
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} 
                text='Total de Debitos'/>
                <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} 
                text='Total do Sumario'/>
            </Row>
        </fieldset>

    </Grid>
)