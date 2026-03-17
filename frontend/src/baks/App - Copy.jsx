import { useState, useEffect } from 'react';

import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import Gallery from './components/Gallery.jsx'

  const modeStructure = {
  "Pre-existing": ["Historical", "Photos", "Performance"],
  "Construction": [
        "Existing Foundation",
        "Additions",
        "DER Envelope",
        "Party Walls",
        "Mechanical",
        "Issues",
        "Downloads"
        ],
  "Occupied": ["Features", "Performance"],
  "About": ["Contractors", "Contact"],
  "Restricted": ["Op. Manual", "Utilities", "Air Quality"]
};

function App() {
  const [mainMode, setMainMode] = useState('Home'); // or 'Pre-existing', 'Construction', etc.
  const [subMode, setSubMode] = useState(null); // based on selected mainMode

  useEffect(() => {
       setSubMode(null);
      }, [mainMode]);

  function handleChangeMainMode(newMainMode) {
      setMainMode(newMainMode)
  }  

  function handleChangeSubMode(newSubMode) {
      setSubMode(newSubMode)
  }  
  
  return (
    <>
            {/* container */}
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen ">

            {/* header */}
          <h1 className="text-3xl font-bold text-white text-center  bg-[#4CAF50]/75 max-h-[80px] overflow-hidden py-6">358 High Street - Duplex Deep Energy Retrofit </h1>


            {/* middle area of sidebar and card area */}
          <div className="grid grid-cols-[18%_1fr]  overflow-hidden">

                {/* filter sidebar */}
            <Sidebar 
              mainMode = {mainMode}
              handleChangeMainMode = {handleChangeMainMode}
              subMode = {subMode}
              handleChangeSubMode = {handleChangeSubMode}
              modeStructure = {modeStructure}
            
            />
                   {/* main content area*/}
            <div  className="flex flex-col h-[calc(100vh-120px)] relative"> {/* full height minus header */}
              {subMode === null  && <p className="text-xl text-center text-black  bg-[#4CAF50]/10 py-4 capitalize">Select a SubSection to View Content</p>}

              <MainContent 
                mainMode = {mainMode}
                subMode = {subMode}
              />

            </div>
              
          </div>
          <footer className="bg-[#4CAF50]/75  p-4 text-white text-center text-sm sticky bottom-0 z-10">copyright Bob</footer>
      </div>

    </>
  )
}

export default App
