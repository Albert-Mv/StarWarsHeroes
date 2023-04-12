import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { FC } from "react";

interface IEditableField {
  name: string;
  value: string;
  isEditable: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditableField: FC<IEditableField> = React.memo(
  (props: IEditableField) => {
    const { name, value, onChange, isEditable } = props;

    return (
      // <Box sx={{ display: "flex", flexFlow: "row", alignItems: "flex-end" }}>
        <><Grid item xs={12} sm={6}><Typography variant="button">{`${name}: `}</Typography></Grid>
        <Grid item xs={12} sm={6}>{isEditable ? (
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={value}
            onChange={onChange}
            size={"small"}
          />
        ) : (
          <Typography>{value}</Typography>
        )}
        </Grid></>
        

    );
  }
);

export default EditableField;
