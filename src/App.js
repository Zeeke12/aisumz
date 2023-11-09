import './App.css';
import Topbar from './components/Topbar';
import Sumz from './pages/Sumz';
import { FetchContextProvider } from './db/FetchContext';
import './App.css';

function App() {
  return (
    <div className='w-screen px-2 h-max max-h-max '>
      <FetchContextProvider>
      <Topbar />
      <Sumz />
      </FetchContextProvider>
    </div>
  );
}

export default App;
