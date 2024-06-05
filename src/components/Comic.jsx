import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Comic = () => {
    const [comics, setComics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://comic.pantech.vn:8080/api/comic/getAllComics')
            .then(response => response.json())
            .then(data => {
                setComics(data.result);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex flex-wrap justify-center">
                {comics.map(comic => (
                    <div key={comic.id} className="card w-52 bg-base-100 shadow-xl p-0 mr-6 mb-6">
                        <div className="badge badge-accent absolute top-0 left-0 m-2">NEW</div>
                        <figure>
                            <img src={comic.thumbnailUrl} className="w-52 h-72 rounded" alt=""/>
                        </figure>
                        <div className="card-body p-2">
                            <Link to={`/comic/${comic.id}`}>
                                <h2 className="card-title text-left font-bold text-base line-clamp-2 h-16">
                                    {comic.name}
                                </h2>
                            </Link>
                            <p className="text-left font-light pb-0 ">Updated: {comic.lastChapter.createdAt} </p>
                            <p className="text-left font-medium line-clamp-1">Chapter {comic.lastChapter.chapterNumber}: {comic.lastChapter.title}</p>
                        </div>
                    </div>))
                }
            </div>
        </>
    )
}

export default Comic