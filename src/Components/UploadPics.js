import React, { useState, useEffect } from 'react'
import { storage, db, timestamp } from '../firebase/config'
import ImageGrid from './ImageGrid'
import ProgressBar from './ProgressBar'

const UploadPics = () => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState('')
    const [images, setImages] = useState([])

    const imageCollection = db.collection('imgURLs')

    const getImages = () => {
        imageCollection
            .orderBy('createdAt', 'desc')
            .onSnapshot(snap => {
                const newList = []
                snap.forEach(doc => {
                    newList.push(doc.data())
                })
                setImages(newList)
            })
    }


    useEffect(() => {
        getImages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onChangeHandler = (e) => {

        const types = ['image/png', 'image/jpeg']

        const file = e.target.files[0]

        if (file && types.includes(file.type)) {
            const upload = storage.ref(`images/${file.name}`).put(file)
            upload.on("state_changed",
                snap => {
                    const progress = (Math.round((snap.bytesTransferred / snap.totalBytes) * 100))
                    setProgress(progress)

                },
                error => {
                    setError(error)
                },
                () => {
                    storage.ref('images')
                        .child(file.name)
                        .getDownloadURL()
                        .then(url => {
                            imageCollection.add({
                                url: url,
                                createdAt: timestamp,
                                name: file.name
                            })
                            setError('')
                        })
                })
        } else {
            setError('Invalid image format')
        }
        return (error, progress)

    }

    return (


        <div>
            <h1>clicky<span style={{ color: "deeppink" }}>.</span></h1>
            <div className="input-div">
                <h2>Add yours</h2>
                <input type="file" id="upload" onChange={onChangeHandler} />
                <label htmlFor="upload" className="label-btn">+</label>

                <ImageGrid error={error} images={images} />
            </div>
            {progress !== 100 && <ProgressBar progress={progress} />}
        </div>
    )
}

export default UploadPics
