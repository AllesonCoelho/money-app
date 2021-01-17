import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ContentHeader from '../common/template/contentHeader.jsx'
import Content from '../common/template/content.jsx'
import Tabs from '../common/tab/tabs.jsx'
import TabsHeader from '../common/tab/tabsHeader.jsx'
import TabsContent from '../common/tab/tabsContent.jsx'
import TabHeader from '../common/tab/tabHeader.jsx'
import TabContent from '../common/tab/tabContent.jsx'
import {selectTab, showTabs} from '../common/tab/tabActions.js'
import {create} from '../billingCycle/billingCycleActions.js'

import List from '../billingCycle/billingCycleList.jsx'
import Form from '../billingCycle/billingCycleForm.jsx'


class BillingCycle extends Component{
    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small=''Cadastro/>

                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pen' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />

                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List/>
                            </TabContent>
                            <TabContent id='tabCreate'><h1>Incluir</h1>
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form/>
                            </TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)