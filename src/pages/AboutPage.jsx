import { useContext, useState } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import { connect } from 'react-redux'
import { changeName, changeVisible } from '../store/profile/actions'


function AboutPage (props) {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [ value, setValue ] = useState('')
  
    return (
    <>
        <h1>About Page</h1>
        <p>{theme === 'light' ? '☀️':'🌙'}</p>
        <button onClick={toggleTheme}>Change theme</button>
        <hr></hr>
        <h2>{props.name}</h2>
        <input 
            type="text" 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
        />
        <button onClick={() => props.changeName(value)}>Change name</button>

        
            <div>
                <input 
                    type="checkbox" 
                    id="visible" 
                    checked={props.visible}  
                    value={props.visible} 
                    onChange={() => props.toggle}
                />
                <label for="visible">Visible</label>
            </div>
           <button onClick={() => props.toggle()}>Change</button>
    </>
    )
}

const mapStateToProps = (state) => ({
    name: state.profile.name,
    visible: state.profile.visible 
})

const mapDispatchToProps = (dispatch) => ({
    toggle: () => dispatch(changeVisible()),
    changeName: (value) => dispatch(changeName(value))
})

export const AboutWithConnect = connect(mapStateToProps, mapDispatchToProps)(AboutPage)