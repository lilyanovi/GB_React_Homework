import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../store/profile/types'
import { changeName, changeVisible } from '../store/profile/actions'
import { selectName, selectVisible } from '../store/profile/selectors'

export function ProfilePage () {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const name = useSelector(selectName)
    const visible = useSelector(selectVisible)
    const [ value, setValue ] = useState('')

    const dispatch = useDispatch()
   
    const handleChange = () => {
        dispatch(changeName(value))
        setValue('')
    }

    const handleChangeVisible = () => {
        dispatch(changeVisible())
       
    }

    return (
    <>
        <h1>ProfilePage</h1>
        <p>{theme === 'light' ? '☀️':'🌙'}</p>
        <button onClick={toggleTheme}>Change theme</button>
        <hr></hr>
        <h2>{name}</h2>
        <input 
            type="text" 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
        />
        <button onClick={handleChange}>Change name</button>

        
            <div>
                <input 
                    type="checkbox" 
                    id="visible" 
                    checked={visible}  
                    value={visible} 
                    onChange={handleChangeVisible}
                />
                <label for="visible">Visible</label>
            </div>
           <button onClick={handleChangeVisible}>Change</button>
    </>
    )
}