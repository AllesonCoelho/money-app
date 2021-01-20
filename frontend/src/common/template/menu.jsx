import React from 'react'
import MenuItem from '../template/menuItem.jsx'
import MenuTree from '../template/menuTree.jsx'


export default props => {
    return (
        <ul className="sidebar-menu">
            <MenuItem path="/" label="Dashboard" icon='dashboard'/>
            <MenuTree label="Cadastro" icon="edit">
                <MenuItem path="billingCycle"
                label="Ciclos de pagamentos" icon="usd"
                />
                
            </MenuTree>

        </ul>

    )

}