import React from 'react';
import Theme from './components/Theme';
function ThemeFeature(props) {
    return (
        <div>
            <Theme width="100px" height="100px" />
            <Theme width="200px" height="200px" />
            <Theme width="300px" height="300px" />
        </div>
    );
}

export default ThemeFeature;