import React, { useState } from 'react'
import s from "../styles/CreatePage.module.css"

import {BiRename as Name} from "react-icons/bi"
import {HiOutlineMail as Mail} from "react-icons/hi"
import {FaBirthdayCake as DOB} from "react-icons/fa"

import axios from "axios"

import { useNavigate } from 'react-router-dom'
import ErrorMessage from './utils/ErrorMessage'
import Loader from './utils/Loader'

const CreatePage = () => {

  const [isLoading, setLoading] = useState(false)

  const router = useNavigate();
  const initialMessage = {
    message:"",
    success:"",
  }

  const [error, setError] = useState(initialMessage);

    const initialState = {
        fName:"",
        lName:"",
        email:"",
        dob:"",
        description:""
    }

    function clearError(){
      setError(initialMessage);
    }
    
    const [data, setData] = useState(initialState);
    
    const {fName, lName, email, description} = data
    
    const handleChange = (e)=>{
      const {name, value} = e.target;
      if(name==="dob"){
        const tempD = new Date(value);
        setData({...data, [name]:tempD});
      }else{
        setData({...data, [name]:value});
      }
    }

    const  handleSubmit = async(e)=>{
      e.preventDefault();
      setLoading(true)
      
      const config = {
        headers:{"content-type":"application/json"}
      }
  
      await axios.post("/api/v1/user", data, config)
      .then(res=>{
        setLoading(false)
        setError(res.data);
        setTimeout(()=>{
          clearError();
          router("/");
        }, 4000)
      })    
      .catch(error=>{
        setLoading(false)
        setError(error.response.data);
        setTimeout(clearError, 4000)
      })
    }
  return (
    <>
    {isLoading?<Loader />:(
      <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.pageDetails}>
          <h1>Add Your Details</h1>
        </div>
        <div className={s.formContainer}>
          <form onSubmit={handleSubmit}>

            <div className={s.nameInput}>
              <div>
                <Name />
                <input 
                  type="text"
                  placeholder="Enter your first name"
                  name="fName"
                  value={fName}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div>
                <Name />
                <input 
                  type="text"
                  placeholder="Enter your last name"
                  name="lName"
                  value={lName}
                  onChange={handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className={s.emailInput}>
              <Mail />
              <input 
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={handleChange}
                  required={true}
              />
            </div>
            <div className={s.dobInput}>
              <DOB />
              <input 
                type="date"
                name="dob"
                placeholder="Enter Date of Birth"
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className={s.description}>
              <textarea 
                name="description"
                placeholder="Write a few words about yourself..."
                value={description}
                onChange={handleChange}
              />
            </div>

            {error.message!=="" && (
                <ErrorMessage success={error.success} message={error.message} />
            )}

            <div className={s.btnContainer}>
              <button>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )}
  </>
  )
}

export default CreatePage