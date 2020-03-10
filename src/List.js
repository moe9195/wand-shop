import React from 'react';
import Card from './Card';

function List(props) {
    const wandsList = props.wands.map(wands => <Card wand={wands} key={wands.core}/>);
    
    return (
        <div className="wands">
            <h3 className="text-center">Wands</h3>
            <div className="row">
                {wandsList}
            </div>
        </div>
    );
}

export default List;