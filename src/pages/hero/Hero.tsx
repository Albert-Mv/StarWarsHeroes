import React, { FC } from 'react';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import HeroInfo from '../../components/HeroInfo';
import { Container } from '@mui/material';

const Hero: FC = () => {
  return (
    <Container
      disableGutters={true}
      sx={{ width: 1, height: 1, display: 'flex', flexFlow: 'column' }}
    >
      <Header />
      <HeroInfo />
      <Footer />
    </Container>
  );
};

export default Hero;
