import ItemList from "../ItemList/ItemList";

const ListMovies = ({children}) => {
    return(
        <div className="container-items">
            <h2>{children}</h2>
            <ItemList />
        </div>
    )
}

export default ListMovies;