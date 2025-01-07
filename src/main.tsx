import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.tsx';
import Policy from './components/Privacy_Policy.tsx'

const router = createBrowserRouter([
  {
    path: "/privacy_policy_pages/",
    element: <App />,
    children: [
      {
        path: "/privacy_policy_pages/:productName",
        element: <Policy/>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
