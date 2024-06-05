import { Route, Routes } from 'react-router-dom';
import { Comic, ComicDetail, ReadChapter } from './components'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Comic />} />
            <Route path="/comic/:comicId" element={<ComicDetail />} />
            <Route path="/comic/chapter/:chapterId" element={<ReadChapter />} />
        </Routes>
    )
}

export default AppRoutes;