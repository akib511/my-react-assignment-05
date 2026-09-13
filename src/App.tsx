import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./types/technology";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");
        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadySelected) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTechnology = selectedTechnologies.find(
      (technology) => technology.id === id,
    );

    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id),
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack!`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack!");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />
      <Hero />

      <TechnologySection
        technologies={technologies}
        selectedTechnologies={selectedTechnologies}
        onAddToStack={handleAddToStack}
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
