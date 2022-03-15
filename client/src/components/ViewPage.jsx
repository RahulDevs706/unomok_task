import s from "../styles/ViewPage.module.css"
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";

import Loader from "./utils/Loader"

import { useNavigate } from 'react-router-dom'

import axios from "axios"

import {AiOutlineRollback as Back} from "react-icons/ai"

const Viewpage = () => {
  const router = useNavigate();
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    setLoading(true)
    axios.get('/api/v1/user')
      .then((data) => {
          setData(data.data.data)
          setLoading(false);
        })
    }, [])
    

  const columns=[
    {
      field:"id",
      headerName:"User Id",
      minWidth: 200,
      flex:1
    },
    {
      field:"fName",
      headerName:"First Name",
      minWidth: 125,
      flex:1
    },
    {
      field:"lName",
      headerName:"Last Name",
      minWidth: 125,
      flex:1
    },
    {
      field:"email",
      headerName:"Email",
      minWidth: 200,
      flex:0.8
    },
    {
      field:"dob",
      headerName:"Date of Birth",
      minWidth: 125,
      flex:1.2,
      type:"date"
    },

    {
      field:"description",
      headerName:"Description",
      minWidth: 220,
      flex:1.2
    },
  ]

  const rows = [];

  data && data.forEach(item=>{
    const temp = item.dob.substring(0, 10)
    rows.push({
      id:item._id,
      fName:item.fName,
      lName:item.lName,
      email:item.email,
      dob:temp,
      description:item.description
    })
  })

  return (
    <>
      {isLoading?(<Loader />):(
        <div className={s.container}>
          <div className={s.wrapper}>
            <div className={s.header}>
              <div onClick={()=>router("/")} className={s.icon}>
                <Back />
              </div>
              <h1> Records</h1>
            </div>

            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={15}
                disableSelectionOnClick
                className={s.table}
                autoHeight
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Viewpage