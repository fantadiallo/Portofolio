import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/project-1" element={<Project1 />} />
          <Route path="/projects/project-2" element={<Project2 />} />
          <Route path="/projects/project-3" element={<Project3 />} />
        </Route>
      </Routes>
    </Router>
  );
}
