import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { fff } from '../Login/Login.jsx';



export default function UserDetail(flage) {
    
    

    console.log(fff);
    const [showPopUp, setShowPopUp] = useState(false);
    const intitial="arman"
    // console.log(flage,"this is flage");
    const[fName,setFname]=useState("fName")
    const[lName,setlName]=useState("lName")
    const[eml,setEml]=useState("abc@gmail.com")
    const[ph,setPh]=useState("123456789")

  return (
    <div>
    {
       flage?(<div className="bg-white overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the   <span className='text-red-600'>{fName}</span>
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {fName+"   " +"    "+lName}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {eml}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Phone number
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {ph}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    123 Main St<br/>
                     Anytown, IND 12123
                </dd>
            </div>
        </dl>
    </div>
    <Link to={"/Login"} onClick={intitial} className="w-full text-red-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in
                    </Link>
            </div>):(<div>
      {/* <button onClick={handleShowPopUp}>Show Pop-up</button> */}
      {showPopUp && (
        <div className='rounded-lg ' style={{ border: '3px solid black' , padding: '30px', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <p className='text-red-600'>This is a pop-up message!</p>
        </div>
      )}
    </div>)
    }
      

            
    </div>
  )
}


