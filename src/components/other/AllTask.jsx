import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className="p-5 rounded mt-5">

    <div className="bg-red-400 mb-2 py-2 px-4 flex flex-wrap lg:flex-nowrap justify-between rounded">
      <h2 className="text-lg font-medium w-full lg:w-1/5 mb-2 lg:mb-0">Employee Name</h2>
      <h3 className="text-lg font-medium w-full lg:w-1/5 mb-2 lg:mb-0">New Task</h3>
      <h5 className="text-lg font-medium w-full lg:w-1/5 mb-2 lg:mb-0">Active Task</h5>
      <h5 className="text-lg font-medium w-full lg:w-1/5 mb-2 lg:mb-0">Completed</h5>
      <h5 className="text-lg font-medium w-full lg:w-1/5">Failed</h5>
    </div>
  

    <div>
      {userData.map((elem, idx) => (
        <div
          key={idx}
          className="border-2 border-emerald-500 mb-2 py-2 px-4 flex flex-wrap lg:flex-nowrap justify-between rounded"
        >
          <h2 className="text-lg font-medium w-full lg:w-1/5 mb-2 lg:mb-0">{elem.firstName}</h2>
          <h3 className="text-lg font-medium w-full lg:w-1/5 mb-2 lg:mb-0 text-blue-400">{elem.taskCounts.newTask}</h3>
          <h5 className="text-lg font-medium w-full lg:w-1/5 mb-2 lg:mb-0 text-yellow-400">{elem.taskCounts.active}</h5>
          <h5 className="text-lg font-medium w-full lg:w-1/5 mb-2 lg:mb-0 text-white">{elem.taskCounts.completed}</h5>
          <h5 className="text-lg font-medium w-full lg:w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default AllTask