import React from 'react';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';

const DetailItemPage = () => {
    const { id } = useParams();

    return(
        <ItemDetailContainer id={id} />
    )
}

export default DetailItemPage;