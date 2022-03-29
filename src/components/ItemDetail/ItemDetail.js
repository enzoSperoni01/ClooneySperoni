import React from 'react';

const ItemDetail = ({ item }) => {
    const { id, title, gender, url, parragraph } = item;
    return(
        <div key={id} className='Card-Detail'>
            <img src={url} alt={`Poster ${title}`}/>

            <div>
                <h2>{title}</h2>
                <h3>{gender}</h3>
                <p>{parragraph}</p>
            </div>
        </div>
    )
}

export default ItemDetail;