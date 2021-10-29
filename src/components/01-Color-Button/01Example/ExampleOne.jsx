import React from 'react'

export default function ExampleOne() {
    
    const [buttonColor, setButtonColor] = React.useState('red');

    const newButtonColor = buttonColor === 'red' ? "blue" : "red"

    const handleClick = (e) => {
        e.preventDefault();
        setButtonColor(newButtonColor)
    }

    return (
        <div>
            <button style={{backgroundColor:buttonColor}} onClick={handleClick}>
              Change to {newButtonColor}
            </button>
        </div>
    )
}
