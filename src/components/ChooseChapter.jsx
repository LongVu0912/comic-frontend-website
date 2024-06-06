import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ChooseChapter = ({ chapterId, comicId }) => {
    const [chapterList, setChapterList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://comic.pantech.vn:8080/api/chapter/getComicChapters/${comicId}`)
            .then(response => response.json())
            .then(data => {
                setChapterList(data.result);
                setIsLoading(false);
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
        <div className="flex flex-row justify-between max-w-screen-sm mx-auto mb-6">
            <button className="btn btn-accent">Previous</button>
            <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>List</button>
            <button className="btn btn-accent">Next</button>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Chapters List</h3>
                    <div className="items-center">                    
                        {chapterList.map(chapter => (
                        <a key={chapter.id} href={`/comic/${comicId}/chapter/${chapter.id}`} className="btn btn-primary w-full mt-4">
                            Chapter {chapter.chapterNumber}: {chapter.title}
                        </a>
                    ))}
                    </div>

                </div>
            </dialog>
        </div>
    );
}

ChooseChapter.propTypes = {
    chapterId: PropTypes.string,
    comicId: PropTypes.string,
}

export default ChooseChapter;