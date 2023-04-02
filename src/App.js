import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
