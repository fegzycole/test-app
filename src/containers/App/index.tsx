import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/index';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Movies />} />
        </Routes>
    );
};

export default App;
