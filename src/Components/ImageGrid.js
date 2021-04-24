import React, { useState } from 'react'
import Modal from 'react-modal'

const ImageGrid = ({ error, images }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null)

    return (
        <div>
            <div className="errorMsg">{error}</div>
            {images.map((image, index) => {
                return <img src={image.url}
                    className="imageGrid"
                    alt={image.name}
                    key={index}
                    onClick={() => {
                        setModalIsOpen(true);
                        setSelectedIndex(index);
                    }} />

            })}
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    },
                    content: {
                        position: 'absolute',
                        top: '100px',
                        left: '150px',
                        right: '150px',
                        bottom: '100px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '10px'
                    }
                }}>
                <img className="modal-image" src={images[selectedIndex]?.url} alt={images[selectedIndex]?.name} />
            </Modal>


        </div >
    )
}

export default ImageGrid
