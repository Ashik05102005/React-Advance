import React, { createContext, useContext, useState } from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/SideBar";
import DataView from "./components/DataView";
import Form from "./components/Form";
import { ToastContainer } from "react-toastify";
import { NoteContext } from "./context/NoteContext";

function App() {
  const {darkMode}=useContext(NoteContext);


  return (
    <div className={darkMode 
                  ? "bg-gray-900 text-white min-h-screen"
                  : "bg-white text-black min-h-screen"}>
      <div className="flex w-full ">
        <SideBar/>
        <div className="w-3/4">
          <NavBar className="p-4 border h-20"/>
          <div className="flex flex-wrap m-1 min-h-screen text-black">
            <DataView/>
          </div>
          <Form/>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="coloured"
        className={'z-50'}
       />
    </div>
  );
}

export default App;
