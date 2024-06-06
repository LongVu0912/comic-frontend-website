import {ComicDetail, Header} from '../components';
import {useParams} from "react-router-dom";

const ComicDetailView = () => {
    const {comicId} = useParams();
    return (
        <>
            <Header/>
            <ComicDetail comicId={comicId}/>
        </>
    );
}

export default ComicDetailView;