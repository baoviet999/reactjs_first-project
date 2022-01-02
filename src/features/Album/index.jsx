import React from 'react';
import AlbumList from './components/AlbumList';

const albums = [
    {
        name: "nhac hay",
        thumbnail:
            "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/0/c/a/90ca2b18751b56f4e3667561a71880bf.jpg",
        id: 1,
    },
    {
        name: "treeen tinh ban duoi tinh yeu",
        thumbnail:
            "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/4/d/5/d4d52cdbcbc88b018129ef26cb85aed7.jpg",
        id: 2,
    },
    {
        name: "huong Ly",
        thumbnail:
            "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/8/4/e/e84ed28458ca745f2a8df9f2dc375c1a.jpg",
        id: 3,
    },
];

function AlbumFeature() {
    return (
        <div>
            <h2>co the ban se thich</h2>
            <AlbumList albums={ albums}/>
        </div>
    );
}

export default AlbumFeature;