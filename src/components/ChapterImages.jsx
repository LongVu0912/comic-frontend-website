import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ReadChapter = () => {
    const {chapterId} = useParams();
    const [chapter, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://comic.pantech.vn:8080/api/chapter/getChapter/${chapterId}`)
            .then(response => response.json())
            .then(data => {
                setChapters(data.result);
                setIsLoading(false);
            });
    }, [chapterId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex flex-col items-center">
                {chapter.imageUrls.map(image => (
                    <img key={chapter.id} src={image} alt="" className="w-8/12"/>
                ))
                }
            </div>
        </>
    )
}

export default ReadChapter