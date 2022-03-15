import {
  Routes,
  Route
} from 'react-router-dom';
import CreatePage from './components/CreatePage';
import HomePage from './components/HomePage';
import Viewpage from './components/ViewPage';

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/create" element={<CreatePage />} />
        <Route path="/records/view" element={<Viewpage />} />

      </Routes>
   </>
  );
}

export default App;
