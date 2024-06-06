import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ChapterImages = () => {
    const { chapterId } = useParams();
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
        return (
            <div className="flex h-screen items-center justify-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col items-center max-w-screen-lg text-center m-auto">
                {chapter.imageUrls.map((image, index) => (
                    <img key={index} src={image} alt="" className="w-8/12" />
                ))}
            </div>
        </>
    )
}

export default ChapterImages