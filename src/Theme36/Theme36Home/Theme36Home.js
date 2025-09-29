import Theme36NavBar from '../Theme36NavBar';
import Theme36Hero from './Theme36Hero';
import Theme36About from './Theme36About';
import Theme36Vision from './Theme36Vision';
import Theme36Testimonials from './Theme36Testimonials';
import Theme36Contact from './Theme36Contact';
import Theme36Footer from '../Theme36Footer';
import './style.js';

const Theme36Home = () => {
  return (
    <main style={{ position: "relative" }}>
      <Theme36NavBar />
      <Theme36Hero />
      <Theme36About />
      <Theme36Vision />
      <Theme36Testimonials />
      <Theme36Contact />
      <Theme36Footer />
    </main>
  );
};

export default Theme36Home;