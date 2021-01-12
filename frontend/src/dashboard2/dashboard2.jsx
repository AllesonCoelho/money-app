import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader.jsx'
import Content from '../common/template/content.jsx'
import ValueBox from '../common/widget/valueBox.jsx'
import Row from '../common/layout/row.jsx'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props){
        super(props)
        this.state = {credit: 0, debt: 0}
    }
    componentWillMount(){
        axios.get(`${BASE_URL}/billingCycles/summary`).then(resp => this.setState(resp.data))
    }
    render() {
        const {credit, debt} = this.state
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versao 2.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`}
                            text="Todal de creditos"
                        />

                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`}
                            text="Todal de debitos"
                        />

                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit-debt}`}
                            text="Todal Consolidado"
                        />

                    </Row>

                </Content>
            </div>
        )
    }
}
