import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import { useState } from 'react';
import './style.scss'

AlbumList.propTypes = {
    albums : PropTypes.array
};
AlbumList.defaultProps = {
    albums : []
}

function AlbumList({ albums }) {
    const [a, setA] = useState(0)
    const handleChange = () => {
        setA(prev => (
            prev === 2 ? prev - 1 : prev + 1
           
        ))
    }
    return (
        <ul className="album-list">
            {
                <li className="album-item">
                    <AlbumItem album={albums[a]}/>
                </li>
            }
            <button onClick={handleChange}>Click</button>
            
        </ul>
    );
}

export default AlbumList;