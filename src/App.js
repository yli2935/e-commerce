/*
 * @Description: temp
 */
import { RouterProvider } from "react-router-dom";
import "./app.scss"
import routes from './routes';

function App() {
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
