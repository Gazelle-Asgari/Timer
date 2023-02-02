import Box from "./Components/Box";
import SavedTimer from "./Components/SavedTimer";
import {RouterProvider , createBrowserRouter} from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Box />,
    },
    {
      path: "/time/:time",
      element: <SavedTimer />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;