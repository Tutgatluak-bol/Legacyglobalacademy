
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import AcademicsPage from "./pages/AcademicsPage";
import NewsPage from "./pages/NewsPage";
import StaffPage from "./pages/StaffPage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Academics from "./components/Academics/Academics";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VIdeoPlayer/VideoPlayer";

// Home page
const Home = ({ setPlayState }) => {
  return (
    <>
      <Hero />

      <main>
        <Academics />

        <section id="about" className="container">
          <About setPlayState={setPlayState} />
        </section>

        <section id="gallery" className="container">
          <Title subTitle="Our Gallery" title="Life at Legacy" />
          <Campus />
        </section>

        <section className="container">
          <Title
            subTitle="Our Community"
            title="What Our Community Says"
          />
          <Testimonials />
        </section>

        <section id="contact" className="container">
          <Title subTitle="Contact Us" title="Get in Touch" />
          <Contact />
        </section>
      </main>
    </>
  );
};

// Temporary reusable page layout
const SimplePage = ({ subtitle, title, description }) => {
  return (
    <main
      style={{
        minHeight: "65vh",
        padding: "150px 10% 90px",
        background: "#ffffff",
      }}
    >
      <p
        style={{
          color: "#455195",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {subtitle}
      </p>

      <h1
        style={{
          marginTop: "12px",
          color: "#242B47",
          fontSize: "clamp(32px, 5vw, 52px)",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          maxWidth: "680px",
          marginTop: "20px",
          color: "#64708A",
          fontSize: "17px",
          lineHeight: 1.8,
        }}
      >
        {description}
      </p>
    </main>
  );
};

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home setPlayState={setPlayState} />}
        />

      <Route 
            path="/about" 
            element={<AboutPage />} 
      />   


        <Route
          path="/academics"
          element={<AcademicsPage />}
        />
        
        <Route 
           path="/news" 
           element={<NewsPage />} 
        />

        <Route 
            path="/staff" 
            element={<StaffPage />} 
        />   
        
        <Route 
            path="/gallery" 
            element={<GalleryPage />} 
        />

        <Route
          path="/contact"
          element={
            <>
              <SimplePage
                subtitle="Get in Touch"
                title="Contact Legacy Global Academy"
                description="Have a question about the school? Use the contact section below to get in touch."
              />

              <section
                className="container"
                style={{ paddingBottom: "80px" }}
              >
                <Contact />
              </section>
            </>
          }
        />

        <Route
          path="*"
          element={
            <SimplePage
              subtitle="Page Not Found"
              title="404 — Page Not Found"
              description="The page you are looking for does not exist. Please use the navigation menu to find your way."
            />
          }
        />
      </Routes>

      <Footer />

      <VideoPlayer
        playState={playState}
        setPlayState={setPlayState}
      />
    </>
  );
};

export default App;
