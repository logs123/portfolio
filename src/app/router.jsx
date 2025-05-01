import { Route, Routes } from 'react-router';
import Layout from '../layouts/index.jsx';
import Home from './routes/home.jsx';
import About from './routes/about.jsx';
import Projects from './routes/projects.jsx';
import Contact from './routes/contact.jsx';

export default function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='projects' element={<Projects />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes>
    );
}