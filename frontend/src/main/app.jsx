import '../common/template/dependencies'
import React from 'react'
import Header from '../common/template/header.jsx'
import SideBar from '../common/template/sideBar.jsx'
import Footer from '../common/template/footer.jsx'
import Routes from './routes.jsx'
import Messages from '../common/msg/messages.jsx'

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer/>
        <Messages/>
    </div>
)