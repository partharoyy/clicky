import React from 'react'

const ImageGrid = ({ error, images }) => {
    console.log(images)

    return (
        <div>
            {images.map((image,index) => {
                console.log(image)
                return <img src={image.url} className="imageGrid" alt="url.name" key={index}/>
            })}
            <div>{error}</div>

        </div >
    )
}

export default ImageGrid
