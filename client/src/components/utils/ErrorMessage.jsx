import s from "../../styles/utils/ErrorMessage.module.css"

const ErrorMessage = ({message, success}) => {
  return (
    <>
        <div className={s.container}>
            <span className={success?(s.success):(s.fail)}>{message}</span>
        </div>
    </>
  )
}

export default ErrorMessage