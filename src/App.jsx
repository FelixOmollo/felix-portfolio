import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/Detailspage';
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
