import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';



const Listitems = (props) => {
       

return(
    <div className="listitems_style">
      
      <li className='new_item'> {props.text}
     <button className="del_btn" onClick={() => {
        props.onSelect(props.id)
       }} ><DeleteIcon /></button> </li>

{/* <button className='btn_edit' onClick={() => {props.onClick(props.id)}}>EDIT</button> */}
        



    </div>
)

}

export default Listitems