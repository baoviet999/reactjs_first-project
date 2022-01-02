import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
AlbumItem.propTypes = {
    album : PropTypes.object
};
AlbumItem.defaultProps = {
    album : {}
}

function AlbumItem({album}) {
    return (
        <div className="album-item__wrap">
            <div className="album-img">
                <img src={album.thumbnail} alt={album.id} />
            </div>
            <div className="album-name">
                <p>{album.name}</p>
            </div>
        </div>
    );
}

export default AlbumItem;