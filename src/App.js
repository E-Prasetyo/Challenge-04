import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Layout, Home, Details } from './Pages'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path="detail/:id" element={<Details />}/>
        </Route>
      </Routes>
  );
}

export default App;
