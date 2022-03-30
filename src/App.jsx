import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Doctors from './pages/Doctors/Doctors';
import Book from './pages/Book/Book';
import Appointments from './pages/Appointments/Appointments';
import AddDoctor from './pages/AddDoctor/AddDoctor';
import SideBar from './components/sidebar/Sidebar';
import HamburgerIcon from './components/HamburgerIcon/HamburgerIcon';

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened && window.innerWidth < 768) {
      document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
    }
  }, [menuOpened]);

  // initial theme state from local storage
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      document.getElementsByTagName('html')[0].classList.add(localTheme);
    }
  }, []);

  const handleMenu = () => {
    if (window.innerWidth < 768) setMenuOpened((prev) => !prev);
  };
  return (
    <>
      <header>
        <nav>
          <HamburgerIcon handleMenu={handleMenu} menuOpened={menuOpened} />
        </nav>
      </header>
      <main className="grid grid-cols-12 h-screen">
        <SideBar menuOpened={menuOpened} setMenuOpened={handleMenu} />
        <section className="col-span-12  pt-20 px-4 dark-theme-bg theme-transition md:col-span-10 md:p-4 h-screen">
          <Routes>
            <Route path="/" element={<Doctors />} />
            <Route path="/book-appointment" element={<Book />} />
            <Route path="/my-appointments" element={<Appointments />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default App;
