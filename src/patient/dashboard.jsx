import React from 'react'
import PatientSidebar from './view/patientsidebar'
import PatientNavbar from './view/patientnavbar'

function PatientDashboard() {
  return (
    <>
    <PatientSidebar/>
    <div className='relative md:ml-64 bg-blueGray-100'>
        <PatientNavbar/>
    </div>
    </>
  )
}

export default PatientDashboard