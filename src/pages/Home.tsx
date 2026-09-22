import { Hero } from "../components/Hero";
import { Workshops } from "../components/Workshops";
import { ProductionCenter } from "../components/ProductionCenter";
import { About } from "../components/About";
import { Teachers } from "../components/Teachers";
import { Admission } from "../components/Admission";
import { Faculties } from "../components/Faculties";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Workshops />
      <Faculties />
      <Teachers />
      <Admission />
      <ProductionCenter />
      {/* <Events /> */}
    </>
  );
};

export default Home;
