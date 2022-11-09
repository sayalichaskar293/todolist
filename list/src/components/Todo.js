import React, {useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddBoxIcon from '@mui/icons-material/AddBox';

import '../App.css'
import Listitems from './Listitems.js';



function Todo() {

    const [input, setInput] = useState("")

    const [items, setItems] = useState([])
   
   
   
   const newItem = (event) =>{
     setInput(event.target.value)
   }
    
   const addItem = () => {
     setItems((alreadyItem) => {
       return [...alreadyItem, input]
     } ) 
     setInput("")
   }
   
   const deleteItems = (id) => {
       console.log("deleted")
       setItems((alreadyItem) => {
           return alreadyItem.filter((arrElem, index) => {
   return index!==id
           })
       })
      }


  return (
    <>
       <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#570530', height: '100vh' }} >
            <br/>
            <br/>
            <br/>
            <br/>
        <Card sx={{ maxWidth: 370 }} className="card">
      <CardContent>
        
        
        <Typography  variant="h4" component="div" className='main_header'>
          To-Do List
        </Typography>
        <div className='add_div'>
        <input type="text" placeholder='Add Item' value={input} onChange={newItem} className="input_holder"></input>
        <button type="button" onClick={addItem} className="btn_add" ><AddBoxIcon/></button>
        </div>
        <ul>
          {items.map(( itemvalue, index) => {
            return ( <div><Listitems key={index} id={index} text={itemvalue} onSelect = {deleteItems} className="del_btn" /></div>
              
            )})}
 

          
          
        
        </ul>
        
      
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Box>
      </Container>
    </React.Fragment>

    </>
  )
}

export default Todo