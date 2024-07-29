import React from 'react'
import AdminDropdown from './dropdown'
import Adminnavbar from './navbar'
import Sidebar from './sidebar'

function AdminDashboard() {
  return (
    <>
    
    <Sidebar/>
    <div className="relative md:ml-64 bg-blueGray-100">
    <Adminnavbar/>
    </div>
 
    </>
  )
}

export default AdminDashboard