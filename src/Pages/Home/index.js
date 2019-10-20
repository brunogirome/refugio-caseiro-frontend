import React from 'react';

import BlackNav from './blackNav/index';
import Banner from './banner/index';
import About from './about/index';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
        <BlackNav />
        <Banner />
        <About />
    </ Container>
  );
}

export default Home;
