import React from 'react'

function Alert(props) {
    
    return (
        <div className='w-50 mx-auto' style={{height:"40px" , textAlign:"center"}} >
        {props.alert && <div className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert">
           <strong>{props.alert.msg}</strong> 
        </div>}
        </div>
    )
}

export default Alert