import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/Detailspage';
import Experience from './components/Experience';
import Mappage from './components/Mappage';
import ProjectDetails from './components/Detailspage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/mappage/:id' element={<Mappage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
