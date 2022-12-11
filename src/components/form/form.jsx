import { useState } from 'react'
import { AUTHOR } from '../../constants'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import style from'./form.module.css'

export function Form ({ addMessage }){
    const [text, setText] = useState('')
    const [chatsList, setChatsList] = useState([
        { id: 1, name: "One chat" },
        { id: 2, name: "Another chat" },
        { id: 3, name: "Three chat" },
      ]);

    const handleSubmit = (event) => {
        event.preventDefault()
        addMessage({
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