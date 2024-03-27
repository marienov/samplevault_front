import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";



function App() {

  const [selectedMenu, setSelectedMenu] = useState('Лента');

  const handleMenuSelect = (menuName) => {
      setSelectedMenu(menuName);
  };

  return (
    <div className="App">
      <Navbar onMenuClick={handleMenuSelect}/>
      <MainPage selectedMenuDrop={selectedMenu} handlerselectedMenuDrop={handleMenuSelect}/>
      
    </div>
  );
}

export default App;
