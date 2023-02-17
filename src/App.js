import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SingleDragon } from './page/SingleDragon';
import {Home} from './page/Home'
import  ErrorPage  from './page/Error';
import { FavoritePage } from './page/FavoritePage';

const App = () => {

  return (
    <>
       <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dragon/:id' element={<SingleDragon />} />
        <Route path='favorites' element={<FavoritePage />} />
        <Route path='*' element={<ErrorPage />} />
        </Routes>
       </Router>
    </>
  );
}

export default App;
