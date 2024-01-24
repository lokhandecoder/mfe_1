import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LayoutComponent from "../Fixed/LayoutComponent";
import RandomTable from "../MaterialUI/RandomTable";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { debounce } from "../../GenericMethods/Methods";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function PersonListPage() {
  const [seachData, setSearchData] = useState<String>("");
  const handleSearch = (val) => {
    setSearchData(val);
  };
  const Search = debounce(() => handleSearch(seachData))
  useEffect(() => {
    console.log("Data: ", seachData)
  },[Search])

  return (
    <>
      <LayoutComponent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  onKeyUp={Search}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                {/* <FormHelperText id="outlined-weight-helper-text">
                  Weight
                </FormHelperText> */}
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={12} sx={{ m: 4 }}>
            <RandomTable seachData={seachData} />
            {/* <Item>xs=4</Item> */}
          </Grid>
        </Grid>
      </LayoutComponent>
    </>
  );
}

export default PersonListPage;
