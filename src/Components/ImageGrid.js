import React from 'react'

const ImageGrid = ({ error, images }) => {

    const clickHandler = (index) => {
        console.log(index)
    }

    return (
        <div>
            {images.map((image, index) => {
                return <img src={image.url}
                    className="imageGrid"
                    alt={image.name}
                    key={index}
                    onClick={() => { clickHandler(index) }} />
            })}
            <div className="errorMsg">{error}</div>

        </div >
    )
}

export default ImageGrid
