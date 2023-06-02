import React from 'react'

function Tittle({title, span}) {
    return (
        <div className="Title">
            <h3>
                {title}
                <span style={{zIndex: -1}}> {span}</span>
            </h3>
        </div>
    )
}

export default Tittle;
