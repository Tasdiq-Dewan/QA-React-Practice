import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import Users from './Users';
import Contact from './Contact';
import NotFound404 from './NotFound';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/test">404 Test</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<NotFound404/>}></Route>
      </Routes>
    </>
  );
}

export default App;
