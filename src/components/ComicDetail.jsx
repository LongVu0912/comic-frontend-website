import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const ComicDetail = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://comic.pantech.vn:8080/api/comic/getComicInformation/${comicId}`)
            .then(response => response.json())
            .then(data => {
                setComic(data.result);
                setIsLoading(false);
            });
    }, [comicId]);

    useEffect(() => {
        fetch(`http://comic.pantech.vn:8080/api/chapter/getComicChapters/${comicId}`)
            .then(response => response.json())
            .then(data => {
                setChapters(data.result);
            });
    }, [comicId]);

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="p-10 pt-2">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={comic.thumbnailUrl} className="w-64 h-96"
                             alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title mb-0 font-bold">{comic.name}</h2>
                    <h2 className="card-title mb-0 font-medium text-base">{comic.author}</h2>
                    <h2 className="mb-3 font-medium text-left">
                        View: {comic.view}, Rating: {comic.averageRatingScore}
                    </h2>
                    <div className="flex flex-row">
                        {comic.genres.map(genre => (
                            <h2 key={genre.id} className="badge badge-accent mr-4">{genre.name}</h2>
                        ))}
                    </div>
                    <h2 className="font-normal text-left max-w-screen-xl">
                        {comic.description}
                    </h2>
                </div>
            </div>

            <div className="flex flex-col items-center">
                {chapters.map(chapter => (
                    <Link key={chapter.id} to={`/comic/${comicId}/chapter/${chapter.id}`}>
                        <div className="btn btn-primary w-[500px] mt-4 justify-start">
                            Chapter {chapter.chapterNumber}: {chapter.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ComicDetail