import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './Page/Error/NotFound';
import { WebLink } from './Layout/json/Web'
import Home from './Page/Home/Home';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
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
