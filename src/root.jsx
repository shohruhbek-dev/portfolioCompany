import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contacts from './pages/contacts';
import clsx from 'clsx';
import Layout from './components/layout';
import Services from './pages/services';

import './App.css'
function Root() {
  return (
    <div className={clsx("mainContainer")}>

      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />

        </Routes>
      </Layout>
    </div>
  );
}

export default Root;