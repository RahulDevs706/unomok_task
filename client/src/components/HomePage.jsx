import s from "../styles/HomePage.module.css"
import {IoCreate as Create} from "react-icons/io5"
import {BsViewList as View} from "react-icons/bs"
import {useNavigate} from "react-router-dom"

const HomePage = () => {

    let navigate = useNavigate();
const handleClick = (event)=>{
    if(event==="create"){
        navigate("/user/create");
    }
    else if(event==="view"){
        navigate("/records/view");
    }
}
  return (
    <>
        <div className={s.container}>
            
            <div className={s.wrapper}>
            <div className={s.pageInfo}>
                <h1>Welcome !</h1>
                <h3>A mini web project to create and view users</h3>
            </div>
            <div className={s.btnContainer}>
                <button onClick={()=>handleClick("view")} className={s.view}>
                    <View /> View 
                </button>
                <button onClick={()=>handleClick("create")} className={s.create}>
                    <Create /> Create
                </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default HomePage