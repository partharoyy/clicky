import React, { useState } from 'react'
import storage from '../firebase/config'

const UploadPics = () => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState('')
    const [url, setUrl] = useState('')

    const onChangeHandler = (e) => {

        const file = e.target.files[0]

        if (file) {
            const upload = storage.ref(`images/${file.name}`).put(file)
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
                        .child(file.name)
                        .getDownloadURL()
                        .then(url => {
                            setUrl(url)
                        })
                })
        }



    }

    return (


        <div>
            <h1>Clicky</h1>
            <div className="input-div">
                <h2>Add yours</h2>
                <input type="file" id="upload" onChange={onChangeHandler} />
                <label htmlFor="upload" className="label-btn">+</label>
            </div>
        </div>
    )
}

export default UploadPics
