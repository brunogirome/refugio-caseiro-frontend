import React from 'react';

import { Container } from './styles';

import BlackNav from './blackNav/index';
import Banner from './banner/index';
import About from './about/index';
import Special from './special/index';

const Home = () => {
  return (
    <Container>
        <BlackNav />
        <Banner />
        <About />
        <Special />
    </ Container>
  );
}

export default Home;
