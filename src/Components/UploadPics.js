import React, { useState } from 'react'
import storage from '../firebase/config'

const UploadPics = () => {

    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState('')
    const [url, setUrl] = useState('')

    const onChangeHandler = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const onClickHandler = () => {

        const upload = storage.ref(`images/${image.name}`).put(image)
        upload.on("state_changed",
            snap => {
                const progress = (Math.round((snap.bytesTransferred / snap.totalBytes) * 100))
                setProgress(progress)
            },
            err => {
                setError(err)
            },
            () => {
                storage.ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url)
                    })
            })
    }

    return (


        <div>
            <h1>Clicky</h1>
            <div className="input-div">
                <h2>Add yours</h2>
                <input type="file" id="upload" onChange={onChangeHandler} />
                <label htmlFor="upload" className="label-btn" onClick={onClickHandler}>+</label>
            </div>
        </div>
    )
}

export default UploadPics
