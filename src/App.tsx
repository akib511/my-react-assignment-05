import Navbar from "./components/Navbar"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      <Navbar />

      <ToastContainer />
    </>
  );
}

export default App;