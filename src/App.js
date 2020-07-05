import React from 'react';
import './App.css';
import GalleryComponent from "./components/GalleryComponent/GalleryComponent";
import GridComponent from "./components/GridComponent/GridComponent";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <div className="header">
        Тестовое задание
      </div>

      <GalleryComponent/>

      <GridComponent/>

      <Form />
    </div>
  );
}

export default App;
