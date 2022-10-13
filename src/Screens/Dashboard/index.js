import React from 'react'

import Sidebar from '../../Componets/Sidebar'
import Main from '../../Componets/Main'
import './_dashboard.scss'

function Dashboard() {
  return (
    <div className='dashboard'>
    <Sidebar/>
    <Main/>
    </div>
  )
}

export default Dashboard