import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import LinearIndeterminate from '../LinearLoading/Loading';
import { doc, getDoc } from "firebase/firestore";
import dataBase from "../../firebase";

const ItemDetailContainer = ({ id }) => {
    const [ film, setFilm ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getMovies = async () => {
        const docRef = doc(dataBase, "peliculas", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let product = docSnap.data();
            product.id = docSnap.id;
            setFilm(product);
        } else {
            console.log("No such document!");
        }
    }

    useEffect(() => {
<<<<<<< HEAD
=======
        getMovies().then( () => { 
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        });
    }, [id]);
>>>>>>> firebase

    return(
        <>
            <div className="Detail-Container">
                {
                    loading ? (
                        <div className='circular-progress'>
                            <LinearIndeterminate />
                        </div>
                    ) : (
                        <>
                            <h2>Detalle de la Pelicula:</h2>
                            <ItemDetail item={film}/>
                        </>
                    )
                }
            </div>
        </>
    );
}

export default ItemDetailContainer;