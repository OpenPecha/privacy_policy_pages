import {  Routes, Route } from "react-router-dom";
import DynamicPage from "./components/Privacy_Policy"; // Component to handle dynamic routes

function App() {
  return (
      <Routes>
        {/* <Route index path="/" element={<div>hi</div>} /> */}
        <Route path="/:productName" element={<DynamicPage />} />
      </Routes>
  );
}

export default App;
