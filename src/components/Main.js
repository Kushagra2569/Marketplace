import React from 'react'
import TopHeader from './TopHeader'
import Sidebar from './Sidebar'
import Content from './Content'

function Main() {
    return (
        <div className='main'>
            <TopHeader />
            <Sidebar />
            <div className='wrapperCenter' >
                <Content />
            </div>
        </div>
    )
}

export default Main