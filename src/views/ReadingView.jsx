import {useParams} from "react-router-dom";
import {ChapterImages, ChooseChapter, Header} from "../components";

const ReadingView = () => {
    const {chapterId, comicId} = useParams();
    return (
        <>
            <Header/>
            <ChooseChapter chapterId={chapterId} comicId={comicId}/>
            <ChapterImages chapterId={chapterId}/>
        </>
    );
}

export default ReadingView;