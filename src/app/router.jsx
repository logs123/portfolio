import { Route, Routes } from 'react-router';
import Layout from '../layouts/index.jsx';
import HomePage from './routes/home/index.jsx';
import AboutPage from './routes/about/index.jsx';
import ExperiencePage from './routes/experience/index.jsx';
import ProjectsPage from './routes/projects/index.jsx';

export default function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='experience' element={<ExperiencePage />} />
                <Route path='projects' element={<ProjectsPage />} />
            </Route>
        </Routes>
    );
}