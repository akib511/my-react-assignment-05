import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {


  return (
    <>
      <Navbar />
      <Hero />

      <ToastContainer />
    </>
  );
}

export default App;