import React, { useEffect } from 'react'

const ProgressBar = ({ progress }) => {

    useEffect(() => {

    }, [progress])

    const fillerStyles = {
        height: '2px',
        width: `${progress}%`,
        backgroundColor: 'pink',
        borderRadius: 'inherit',
        transition: 'width 1s ease-in-out',
        marginTop: "20px",
        float: 'left',

    }

    // const labelStyles = {
    //     padding: 5,
    //     color: 'white',
    //     fontWeight: 'bold'
    // }

    return (

        <div style={fillerStyles}>

        </div>

    )
}

export default ProgressBar
