import './App.css';
import { HashRouter, Route, Routes, useParams } from 'react-router-dom';
import Policy from './components/Privacy_Policy';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path="/privacy_policy_pages/" element={<div >hi</div>} />
      <Route path="/privacy_policy_pages/:dynamicName" element={<DynamicPage />} />
    </Routes>
  </HashRouter>
  );
}

function DynamicPage() {
  const { dynamicName } = useParams();
  return <Policy productName={dynamicName}/>;
}


export default App;
