import React from 'react'

export default function Index() {
    return (
        <div>
            <center><h1 style={{ marginTop: "5%" }}> Hi {localStorage.getItem('uName')}</h1></center>
        </div>
    )
}
