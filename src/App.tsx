import './reset.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PageControls from './components/PageControls/PageControls';
import ListContainer from './components/ListContainer/ListContainer';

function App() {
  return (
    <>
      <Navbar />
      <PageControls />
      <ListContainer />
    </>
  );
}

export default App;
