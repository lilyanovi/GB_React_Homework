import { useState } from 'react'
import { AUTHOR } from '../../constants'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import style from'./form.module.css'

export function Form ({ addMessage}){
    const [text, setText] = useState([])

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