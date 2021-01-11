import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader.jsx'
import Content from '../common/template/content.jsx'
import ValueBox from '../common/widget/valueBox.jsx'
import Row from '../common/layout/row.jsx'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versao 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value="R$ 10"
                            text="Todal de creditos"
                        />

                        <ValueBox cols="12 4" color="red" icon="credit-card" value="R$ 10"
                            text="Todal de debitos"
                        />

                        <ValueBox cols="12 4" color="blue" icon="money" value="R$ 0"
                            text="Todal Consolidado"
                        />

                    </Row>

                </Content>
            </div>
        )
    }
}

export default Dashboard