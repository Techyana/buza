import './App.css';
import SideNav from './components/sideNav/SideNav';
import MainDisplay from './components/mainDisplay/MainDisplay';
import SideDisplay from './components/sideDisplay/SideDisplay';

function App() {
  return (
    <>
      <div className="main">
      <SideNav />
      <MainDisplay />
      <SideDisplay />
      </div>
    </>
  );
}

export default App;
