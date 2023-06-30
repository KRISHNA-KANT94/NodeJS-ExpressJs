import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeForm from './Component/EmployeeForm';
import EmployeeTable from './Component/EmployeeTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeForm/>}></Route>
        <Route path='/employeetable' element={<EmployeeTable/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
