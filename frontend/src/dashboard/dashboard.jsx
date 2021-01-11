import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import {getSummary} from './dashboardActions'

import ContentHeader from '../common/template/contentHeader.jsx'
import Content from '../common/template/content.jsx'
import ValueBox from '../common/widget/valueBox.jsx'
import Row from '../common/layout/row.jsx'

class Dashboard extends Component {
    componentWillMount(){
        this.props.getSummary()
    }
    render() {
        const {credit, debt} = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versao 1.0" />
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

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)