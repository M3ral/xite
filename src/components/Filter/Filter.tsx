import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import {Genre} from "../../types";
import {Box, Container, FormControl} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    marginBottom: 20,
    background: "#FFF",
    padding: "44px 24px 24px"
  },
  innerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  search: {
    width: "100%"
  },
  selectContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      flexDirection: "column",
      justifyContent: "space-around"
    }
  },
  select: {
    width: "45%",
    textAlign: "left",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      marginTop: 20
    }
  }
}));

interface FilterProps {
  genres: Genre[]
  years: number[]
  filters: {
    textSearchQuery: string
    genre_id: number[]
    release_year: number[]
  }
  onChange: (event: React.ChangeEvent<{ name?: string; value: unknown } | HTMLTextAreaElement | HTMLInputElement>) => void
}

export const Filter: React.FC<FilterProps> = ({genres, years, filters, onChange}) => {
  const classes = useStyles();

  return (
    <Box boxShadow={1} className={classes.container} data-testid="filter">
      <Container maxWidth="lg">
        <FormControl fullWidth variant="outlined" className={classes.innerContainer}>
          <TextField
            className={classes.search}
            label="Find your favorite artist or label"
            autoComplete="off"
            variant="outlined"
            id="text-filter"
            name="textSearchQuery"
            value={filters.textSearchQuery}
            onChange={onChange}
          />


          <div className={classes.selectContainer}>
            <TextField
              className={classes.select}
              select
              name="genre_id"
              id="genres"
              variant="outlined"
              label="Genres"
              SelectProps={{
                multiple: true,
                value: filters.genre_id,
                onChange: onChange
              }}
            >
              {genres.map(genre => <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>)}
            </TextField>

            <TextField
              className={classes.select}
              select
              name="release_year"
              id="years"
              variant="outlined"
              label="Years"
              SelectProps={{
                multiple: true,
                value: filters.release_year,
                onChange: onChange
              }}
            >
              {years.map(year => <MenuItem key={year} value={year}>{year}</MenuItem>)}
            </TextField>
          </div>

        </FormControl>
      </Container>
    </Box>
  );
}
