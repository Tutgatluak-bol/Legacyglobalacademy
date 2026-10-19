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

      <main className="overflow-hidden">
        <Academics />

        <section id="about" className="py-12">
          <About setPlayState={setPlayState} />
        </section>

        <section id="gallery" className="py-12">
          <Title subTitle="Our Gallery" title="Life at Legacy" />
          <Campus />
        </section>

        <section className="py-12">
          <Title
            subTitle="Our Community"
            title="What Our Community Says"
          />
          <Testimonials />
        </section>

        <section id="contact" className="py-12">
          <Title subTitle="Contact Us" title="Get in Touch" />
          <Contact />
        </section>
      </main>
    </>
  );
};

// Temporary reusable page layout (Enhanced minimal styling)
const SimplePage = ({ subtitle, title, description }) => {
  return (
    <main className="mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)] pt-36 pb-20 min-h-[65vh] bg-white selection:bg-brand-sky/30">
      <span className="inline-block text-[0.74rem] font-extrabold uppercase tracking-[0.2em] text-brand-primary">
        {subtitle}
      </span>

      <h1 className="mt-3 text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-brand-dark">
        {title}
      </h1>

      <p className="mt-4 max-w-[680px] text-[1.05rem] leading-[1.85] text-[#596278]">
        {description}
      </p>
    </main>
  );
};

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="min-h-screen bg-white font-[inherit] text-brand-dark antialiased">
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
                description="Have a question about the school? Use the contact section below to get in touch with our team."
              />

              <section className="pb-24">
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
              description="The page you are looking for does not exist. Please use the navigation menu to find your way back."
            />
          }
        />
      </Routes>

      <Footer />

      <VideoPlayer
        playState={playState}
        setPlayState={setPlayState}
      />
    </div>
  );
};

export default App;