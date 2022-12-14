import "./App.css"
import { useState } from "react";
import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import Header from "./components/header";
import Listing from "./components/listing";


function App() {
  const [nftsForOwner, setNftsForOwner] = useState();

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <div className="header">
                <Header
                setNftsForOwner={setNftsForOwner}
                nftsForOwner={nftsForOwner}
                />
              </div>
              <div className="listing">
                <Listing
                nftsForOwner={nftsForOwner}
                />
              </div>
            </div>
          }>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
