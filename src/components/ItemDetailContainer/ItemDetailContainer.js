import React, { useState, useEffect } from 'react';
// import movieList from '../../info/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import LinearIndeterminate from '../LinearLoading/Loading';
import { doc, getDoc } from "firebase/firestore";
import dataBase from "../../firebase";
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetailContainer = ({ link }) => {
    const { link } = useParams();
    // const navigate = useNavigate();

    const [ film, setFilm ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getMovies = async () => {
        const docRef = doc(dataBase, "peliculas", link);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let product = docSnap.data();
            product.id = docSnap.id;
            setFilm(product);
        } else {
            console.log("No such document!");
        }
    }

    const getItem = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout( () => resolve(getMovies()), 2000)
        })
        let result = promise;
        return result;
    };

    useEffect(() => {
        getMovies();
        setTimeout(() => {
            setLoading(true);
        }, 3000);
        getItem()
            .then( data => {
                const finded = data.find(element => element.link == link);
                setFilm(finded);
            } );
    }, [link]);

    return(
        <>
            <div className="Detail-Container">
                {
                    loading ? (
                        <>
                            <h2>Detalle de la Pelicula:</h2>
                            <ItemDetail item={film}/>
                        </>
                    ) : (
                        <div className='circular-progress'>
                            <LinearIndeterminate />
                        </div>
                    )
                }
            </div>
        </>
    );
}

export default ItemDetailContainer;