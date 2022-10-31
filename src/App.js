
import './App.css';
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'
import EmpList from './EmpList';
import EmpCreate from './EmpCreate';
import Details from './Details'
import EmpEdit from './EmpEdit';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
  <Routes>
    <Route path='/' element={<EmpList/>}>

    </Route>
    <Route path='/employee/create' element={<EmpCreate/>}>
</Route>
<Route path='/employee/detail/:empid' element={<Details/>}>
</Route>
<Route path='/employee/edit/:empid' element={<EmpEdit/>}>
</Route>
    </Routes>
    </BrowserRouter>
    </div>
  );


}

export default App;
