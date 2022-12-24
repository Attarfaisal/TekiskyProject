import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormPage from './Pages/Form1';
import Form2 from './Pages/Form2';
import Form3 from './Pages/Form3';


function App() {
  return (
    <div >
      <Routes>
        <Route path='' element={<FormPage />}></Route>
        <Route path='personalsubmit' element={<Form2 />}>
        <Route path='educationsubmit' element={<Form3 />}> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
