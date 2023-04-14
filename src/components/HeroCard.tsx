import React, { FC } from 'react';
import { IHero } from '../types/IHero';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

type IHeroCard = Pick<IHero, 'name'>

const HeroCard: FC<IHeroCard> = (props: IHeroCard) => {
  const { name } = props;

  return (
    <Card
      elevation={3}
      sx={{
        maxWidth: 200,
        ':hover': { bgcolor: 'lightgray' },
        height: { xs: 1, md: 140 },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant='button' component='div'>
          {name}
        </Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          <Link to={`heroes/${name}`}>Learn more</Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
