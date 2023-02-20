import './App.css';
import { Route, Routes,} from "react-router"
import Layout from './components/Layout/index';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}> </Route>
        </Routes>
    </>
  )
}

export default App;
