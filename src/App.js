import HomePage from "./page/homepage/HomePage";
import { useState } from "react";
// import { GlobalProvider } from "./context/GlobalState";
import InboxPage from "./page/inboxpage/InboxPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompletedPage from "./page/completepage/CompletedPage";
import Starred from "./page/staredpage/Starred";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route
            index
            element={<HomePage modal={modal} setModal={setModal} />}
          />
          <Route
            path="/"
            element={<HomePage modal={modal} setModal={setModal} />}
          />
          <Route path="/complete" element={<CompletedPage />} />
          <Route path="/star" element={<Starred />} />
          <Route path="/inbox" element={<InboxPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
