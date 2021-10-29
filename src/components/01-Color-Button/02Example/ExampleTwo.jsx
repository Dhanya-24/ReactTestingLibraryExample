import React from 'react'

export default function ExampleTwo() {
   
    const [buttonColor, setButtonColor] = React.useState('red');
    const newButtonColor = buttonColor === 'red' ? "blue" : "red";
    const [disabled, setDisabled] = React.useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setButtonColor(newButtonColor)
    }

    const handleOnCheckboxChange = (e) => {

        const isChecked = e.target.checked;
        setDisabled(isChecked)
    }

    return (
        <div>
            <button style={{backgroundColor: disabled ? "gray" : buttonColor}} onClick={handleClick} disabled={disabled}>
              Change to {newButtonColor}
            </button>
            <br/>
            <input type="checkbox" id="disable-button-checkbox" defaultChecked={disabled} aria-checked={disabled} onChange={handleOnCheckboxChange} />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    )
}
