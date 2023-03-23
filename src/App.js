import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SimpleTable from './components/SimpleTable';
import UserRegister from './components/UserRegister';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<SimpleTable />} path="/" />
          <Route element={<UserRegister />} path="/register" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
