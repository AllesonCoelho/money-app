import '../common/template/dependencies'
import React from 'react'
import Header from '../common/template/header.jsx'
import SideBar from '../common/template/sideBar.jsx'
import Footer from '../common/template/footer.jsx'
import Routes from './routes.jsx'

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            <Routes/>
        </div>
        <Footer/>
    </div>
)