import React from 'react'
import DoctorSidebar from './view/doctorsidebar'
import DoctorNavbar from './view/doctornavbar'

function DoctorDashboard() {
  return (
    <>
    <DoctorSidebar/>
    <div className='relative md:ml-64 bg-blueGray-100'>
        <DoctorNavbar/>
    </div>
    </>
  )
}

export default DoctorDashboard