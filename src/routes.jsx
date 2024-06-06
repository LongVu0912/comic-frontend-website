import { Route, Routes } from 'react-router-dom';
import { MainView, ComicDetailView, ReadingView } from "./views";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/comic/:comicId" element={<ComicDetailView />} />
            <Route path="/comic/:comicId/chapter/:chapterId" element={<ReadingView />} />
        </Routes>
    )
}

export default AppRoutes;