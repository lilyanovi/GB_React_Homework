import { useState } from 'react'
import { Button } from '../ui/button'
import { AUTHOR } from '../../constants'
import style from'./form.module.css'

export function Form ({ addMessage }){
    const [text, setText] = useState('')

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
            <h1>Please, leave your feedback</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(event)=> setText(event.target.value)}
                />
                <Button type='submit'>Send</Button>
            </form>
        </>
    )
}