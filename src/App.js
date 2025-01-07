import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Policy from './components/Privacy_Policy';

function App() {
  return (
    <Router basename={'/privacy_policy_pages'}>
    <Routes>
      <Route exact path="/privacy_policy_pages" element={<div >hi</div>} />
      <Route path="/:dynamicName" element={<DynamicPage />} />
    </Routes>
  </Router>
  );
}

function DynamicPage() {
  const { dynamicName } = useParams();
  return <Policy productName={dynamicName}/>;
}


export default App;
