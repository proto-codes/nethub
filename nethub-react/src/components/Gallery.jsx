import React from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


import galleryImg from '../assets/img/snack1.jpeg';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={galleryImg}>
                    <img alt="img1" src={galleryImg} />
                </a>
                <a href={galleryImg}>
                    <img alt="img2" src={galleryImg} />
                </a>
                
            </LightGallery>
        </div>
    );
}

export default Gallery;
