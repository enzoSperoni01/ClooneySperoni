import ItemCount from '../ItemCount/ItemCount';

const ListMovies = ({children}) => {
    return(
        <div className="container-items">
            <h2>{children}</h2>

            {/* Borrar y añadir ItemList */}
            <div className='items'>
                <ItemCount stock={5} initial={1}/>
                <ItemCount stock={10} initial={1}/>
            </div>
        </div>
    )
}

export default ListMovies;