import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';

const DetailItemPage = () => {
    const { link } = useParams();

    return(
        <ItemDetailContainer link={link} />
    )
}

export default DetailItemPage;