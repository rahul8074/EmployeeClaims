import React from 'react';
import Sidebar from './components/Sidebar';
import Claims from './components/Claims';
import './App.css'

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen App">
      <Sidebar />
       <Claims />
    </div>
  );
}

export default App;
