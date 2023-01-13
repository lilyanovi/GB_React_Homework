import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { AUTHOR } from '../../constants'
import { addMessageWithReply } from '../../store/messages/actions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import style from'./form.module.css'

import { push } from "firebase/database";
import { getMessageListById } from '../../services/firebase'

export function Form (){
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const chatId = useParams()
   

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addMessageWithReply(chatId, {
            author: AUTHOR.user,
            text
        }))
        push(getMessageListById(chatId), {
            author: AUTHOR.user,
            text
          })
        setText('')
    }

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Enter your message" 
                    variant="outlined"
                    size="small"
                    color="success"               
                    type="text" 
                    value={text} 
                    onChange={(event)=> setText(event.target.value)}
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
                >Send
                </Button>
            </form>
        </>
    )
}