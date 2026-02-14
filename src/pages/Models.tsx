import HeaderModels from "../components/layout/HeaderModels";
import FiltersModels from "../components/ui/FiltersModels";
import ModelsGallery from "../components/sections/ModelsGallery/ModelsGallery";
import Footer from "../components/layout/Footer";

const Models: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderModels backgroundImage="/images/models-hero.jpg" />
      <FiltersModels />
      <div className="mt-64">
      <ModelsGallery />
      </div>
      {/* Gallery section below ModelsGallery component */}
      <div className="mt-64">
        <Footer />
      </div>
    </div>
  );
};

export default Models;