import styles from "../styles/index.module.css";
import Hero from "../layouts/Hero/Hero";
import Features from "../layouts/Features/Features";
import Roadmap from "../layouts/Roadmap/Roadmap";
import Team from "../layouts/Team/Team";

const Landing = () => {
  return (
    <>
      <Hero />
      <Features />
      <Roadmap />
      <Team />
    </>
  );
};

export default Landing;
