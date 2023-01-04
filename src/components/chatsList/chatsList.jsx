import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addChat, delChat } from "../../store/messages/actions";
import { selectChat } from "../../store/messages/selectors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import style from'./chatList.module.css'

export function ChatsList () {
  const [value, setChatsList] = useState('')
  const dispatch = useDispatch()
  const chats = useSelector(selectChat)

  const handleChange = (e) => {
    setChatsList(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()  
    dispatch(addChat(value))
  }
  
  return (
    <>
      <h1>ChatsList</h1>
      <List>
        {chats.map((chat)=> (
          <>
          <ListItem >
            <ListItemAvatar>
                <Avatar src="/broken-image.jpg"></Avatar>
            </ListItemAvatar>
            
            <Link to={`/chat/${chat.name}`} >
              <ListItemText
                primary={chat.name}
                key={chat.id}
              />
            </Link>
            <Button className={style.btn}
                    onClick={() => dispatch(delChat(chat.name))}
                    variant="outlined" 
                    color="success"
                >x
                </Button>
             
          </ListItem>
          <Divider variant="inset" component="li" />
        </>        
        ))}
      </List>
      
      
     

      <form className={style.form} onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Enter name of your chat" 
                    variant="outlined"
                    size="small"
                    color="success"               
                    type="text" 
                    value={value} 
                    onChange={handleChange}
                    autoFocus={true}
                    ref={function(input) {
                        if (input != null) {
                          input.focus();
                        }}}
                    />
                <Button 
                    type='submit' 
                    variant="outlined" 
                    color="success"
                >Create Chat
                </Button>
            </form>
    </>
  )
}

