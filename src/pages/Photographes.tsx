import HeaderPhotographes from "../components/layout/HeaderPhotographes";
import FiltersModels from "../components/ui/FiltersModels";
import PhotographesGallery from "../components/sections/PhotographesGallery/PhotographesGallery";
import Footer from "../components/layout/Footer";

const Photographes: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderPhotographes backgroundImage="/images/models-hero.jpg" />
      <FiltersModels />
      <div className="mt-64">
      <PhotographesGallery />
      </div>
      {/* Gallery section below PhotographesGallery component */}
      <div className="mt-64">
        <Footer />
      </div>
    </div>
  );
};

export default Photographes;
