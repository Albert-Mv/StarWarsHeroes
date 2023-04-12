import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import store, { RootState } from "../redux/store";
import { IHero } from "../types/IHero";
import EditableField from "./EditableField";
import {
  clearHeroData,
  setHeroData,
  updateHeroField,
} from "../redux/slices/hero";
import { Box, Button, Grid } from "@mui/material";

const HeroInfo: FC = React.memo(() => {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const heroes = useSelector<RootState, IHero[]>((state) => state.heroes.list);
  const localHero = useSelector<RootState, IHero>((state) => state.hero);
  const isLocalDirty = useSelector<RootState, boolean>(
    (state) => state.hero.isDirty
  );
  const dispatch = useDispatch();

  const storeHero = useMemo(
    () => heroes.find((item) => item.name == id),
    [heroes]
  );

  useEffect(() => {
    const heroFromStorage = localStorage.getItem(id!);

    if (heroFromStorage) {
      dispatch(setHeroData(JSON.parse(heroFromStorage)));
    }
  }, []);

  const generateField = useCallback(
    (field: keyof IHero, value: string) => {
      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateHeroField({ field, value: e.target.value }));
      };

      return (
        <EditableField
          key={field}
          name={field}
          value={value}
          isEditable={isEditing}
          onChange={onChange}
        />
      );
    },
    [isEditing]
  );

  const getFields = useCallback(() => {
    return (
      <Grid container spacing={2} p={2}>
      {Object.entries(((isLocalDirty ? localHero : storeHero) as object) || {})
        .sort((a, b) => (a[0] > b[0] ? -1 : 1))
        .map((item) => {
          if (typeof item[1] == "string") {
            return generateField(item[0] as keyof IHero, item[1]);
          }
        })}
      </Grid>
    );
  }, [isEditing, localHero, storeHero]);

  const onSave = useCallback(() => {
    const stringifiedHero = JSON.stringify(localHero);
    localStorage.setItem(id!, stringifiedHero);
    setIsEditing(false);
  }, [localHero]);

  const onEdit = useCallback(() => {
    dispatch(setHeroData(isLocalDirty ? localHero : storeHero!));
    setIsEditing(true);
  }, [localHero, storeHero]);

  const onReset = useCallback(() => {
    localStorage.removeItem(id!);
    dispatch(clearHeroData());
  }, []);

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: "1",
      }}
    >
      {getFields()}
      <Box sx={{ display: "flex", flexFlow: "row", p: 2}} gap={1}>
        {isEditing ? (
          <Button onClick={onSave} variant="contained">
            Save
          </Button>
        ) : (
          <Button onClick={onEdit} variant="contained">
            Edit
          </Button>
        )}
        <Button onClick={onReset} disabled={isEditing} variant="contained">
          Reset
        </Button>
      </Box>
    </Box>
  );
});

export default HeroInfo;
