import './App.css';
import Topbar from './components/Topbar';
import Sumz from './pages/Sumz';
import { FetchContextProvider } from './db/FetchContext';

function App() {
  return (
    <div className='w-screen pb-auto px-2 h-max bg-gradient-to-b from-rose-500 to-indigo-700'>
      <FetchContextProvider>
      <Topbar />
      <Sumz />
      </FetchContextProvider>
    </div>
  );
}

export default App;
