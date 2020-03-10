import React from 'react';

function Card(props) {
    const wand = props.wand
    
    return (
        <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
            <div className="image">
                <img
                   className="card-img-top img-fluid"
                   src={wand.imageUrl}
                   alt={wand.core + " " + wand.wood}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <span>
                    Core: {wand.core} <br></br>
                    Wood: {wand.wood}
                    </span>
                </h5>
                <small className="card-text">
                    Length: {wand.length}
                </small>
            </div>
        </div>
    </div>
    );
}

export default Card;