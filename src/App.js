import React from "react";
import Navbar from "./components/UI/Navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <div style={{borderBottom: "1px solid red"}}/> */}
      <MainPage />
      
    </div>
  );
}

export default App;
