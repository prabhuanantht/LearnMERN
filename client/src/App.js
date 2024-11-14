import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Add from "./components/addDoctor/Add.jsx";

function App() {
  const route  = createBrowserRouter([
    {
      path: "/add",
      element: <Add />,
    }
  ]);
  return (
    <div className = "App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
