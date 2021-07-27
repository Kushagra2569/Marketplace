import React from 'react'
import TopHeader from './TopHeader'
import Sidebar from './Sidebar'
import Content from './Content'
import logo from './logo.png'

function Main() {
    return (
        <div className='main'>
            <img src={logo} className='logo'></img>
            <TopHeader />
            <Sidebar />
            <div className='wrapperCenter' >
                <Content />
            </div>
        </div>
    )
}

export default Main