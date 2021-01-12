import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader.jsx'
import Content from '../common/template/content.jsx'


class BillingCycle extends Component{
    render(){
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small=''Cadastro/>

                <Content>
                    Ciclos de pagamentos
                </Content>
            </div>
        )
    }
}

export default BillingCycle