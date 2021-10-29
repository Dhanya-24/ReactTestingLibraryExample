import React from 'react';


export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

export default function ExampleThree() {
   
    const [buttonColor, setButtonColor] = React.useState('MediumVioletRed');
    const newButtonColor = buttonColor === 'MediumVioletRed' ? "MidnightBlue" : "MediumVioletRed";
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
              Change to {replaceCamelWithSpaces(newButtonColor)}
            </button>
            <br/>
            <input type="checkbox" id="disable-button-checkbox" defaultChecked={disabled} aria-checked={disabled} onChange={handleOnCheckboxChange} />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </div>
    )
}
