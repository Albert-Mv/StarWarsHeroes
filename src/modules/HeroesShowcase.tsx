import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IHero } from "../types/IHero";
import HeroCard from "../components/HeroCard";
import Pagination from "../components/Pagination";
import { Box, CircularProgress, Container, Grid } from "@mui/material";

const HeroesShowcase: FC = () => {
  const heroes = useSelector<RootState, IHero[]>((state) => state.heroes.list);
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.heroes.isLoading
  );

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2} sx={{ flex: "1", p: 2 }}>
          {heroes.map((item) => (
            <Grid item key={item.name} xs={6} sm={3} md={2} lg={2}>
              <HeroCard name={item.name} />
            </Grid>
          ))}
        </Grid>
      )}
      <Box sx={{ marginTop: "auto", margin: 2 }}>
        <Pagination />
      </Box>
    </Box>
  );
};

export default HeroesShowcase;
