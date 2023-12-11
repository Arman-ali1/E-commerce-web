import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Login() {

const[flage,setFlage]=useState(true)
const[fName,setFname]=useState("fName")
const[lName,setlName]=useState("lName")
const[eml,setEml]=useState("abc@gmail.com")
const[ph,setPh]=useState("123456789")
const[pass,setPass]=useState("")
const[eeem,setEmail]=useState("")

const emailse=(e)=>{
setEmail(e.target.value);
}
const setpass=(e)=>{
    setPass(e.target.value);
    }

    // async function fetchData() {
    //     try { 
    //         await axios.get("http://localhost:3300/loginuser",{pass,eeem})
    //             .then(res => {

    //                 console.log(res.data);
    //                 const name=res.data[0].firstName;
    //                 // setName(name);
    //                 setFname(res.data[0].firstName);
    //                 setlName(res.data[0].lastName);
    //                 setEml(res.data[0].email);
    //                 setPh(res.data[0].phone);

    //                 console.log(name);

    //             })
    //             .catch(e => {
    //                 console.log("problen in sending res");
    //             });
    //     } catch {
    //         console.log("something went wront to call api get(LoginUser)");
    //     }

    //     setFlage(!flage)

    // }

    async function fetchData() {
            try { 
                await axios.post("http://localhost:3300/loginuserDetail",{pass,eeem})
                    .then(res => {
    
                        console.log(res.data);
                        // const name=res.data[0].firstName;
                        // // setName(name);
                        // setFname(res.data[0].firstName);
                        // setlName(res.data[0].lastName);
                        // setEml(res.data[0].email);
                        // setPh(res.data[0].phone);
    
                        // console.log(name);
    
                    })
                    .catch(e => {
                        console.log("problen in sending res");
                    });
            } catch {
                console.log("something went wront to call api get(LoginUser)");
            }
    
            setFlage(!flage)
    
        }

function submit() {
   
    console.log("loginf section start");
    fetchData();
}

function intitial(){
    setFlage(!flage)
}
  return (
        <>{
flage?<section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          LoginUser    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
                  <div>
                      <label forhtml="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={emailse} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label forhtml="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={setpass} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label forhtml="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-white hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <Link to={"/Login"} onClick={submit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in
                    </Link>
                  
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
          </div>
      </div>
                </div>
            </section>:
<div className="bg-white overflow-hidden shadow rounded-lg border">
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
</div>
        }
            
            
        </>
  )
}

