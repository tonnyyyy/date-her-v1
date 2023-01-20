import {
  RouterProvider,
} from "react-router-dom";
import { LoadingProvider } from "./contexts/LoadingContext";
import router from './routes';

function App() {
  return (
    // <LoadingProvider>    
      <RouterProvider router={router} />
    // </LoadingProvider>
  )
}

export default App
