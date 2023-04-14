import React, { FC } from 'react';
import HeroesShowcase from '../../modules/HeroesShowcase';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import { Container } from '@mui/material';

const Home: FC = () => {
  return (
    <Container
      disableGutters={true}
      sx={{ width: 1, height: 1, display: 'flex', flexFlow: 'column' }}
    >
      <Header />
      <HeroesShowcase />
      <Footer />
    </Container>
  );
};

export default Home;
