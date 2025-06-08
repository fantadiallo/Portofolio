import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Project1Page from './pages/Project1Page/Project1Page';
import Project2Page from './pages/Project2Page/Project2Page';
import Project3Page from './pages/Project3Page/Project3Page';
import ScrollToHash from './components/ScrollToHash';

export default function App() {
  return (
    <Router>
      <>
        <ScrollToHash />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/project-1" element={<Project1Page />} />
            <Route path="/projects/project-2" element={<Project2Page />} />
            <Route path="/projects/project-3" element={<Project3Page />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}
