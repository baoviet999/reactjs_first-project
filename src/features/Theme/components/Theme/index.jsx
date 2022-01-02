import React, { useState } from 'react';

function Theme({ width, height }) {
    console.log(width)
    const [theme, setTheme] = useState('red')
    
    const handleChange = () => {
        setTheme(prev => (
            prev === '#000' ? '#fff' : '#000'
        ))
    }
    return (
        <div style={{ width : width , height : height ,backgroundColor: theme }}>
            <button onClick={handleChange}>Change</button>
        </div>
    );
}

export default Theme;