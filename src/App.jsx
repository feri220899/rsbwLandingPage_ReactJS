import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Error/NotFound';
import { WebLink } from './Layout/json/Web'
function App() {
  return (
    <>
      <Router>
        <Routes>
          {WebLink.map((item, index) => (
            <Route key={index} path={item.path} element={item.component} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
