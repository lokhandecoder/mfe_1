import React, { useEffect } from "react";
import usePagination from "./usePagination";
import "../../Resources/Styles/pagination.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
const Pagination = (props) => {
  const [pageLimit, setPageLimit] = React.useState(10);

  const {
    pageNumber,
    changePage,
    pageData,
    nextPage,
    previousPage,
    LastPage,
    setpageCount,
    reachlimit,
    firstpage,
  } = usePagination(props.items, pageLimit);

  const handleChange = (event: SelectChangeEvent) => {
    const newPageLimit = parseInt(event.target.value, 10);
    setPageLimit(newPageLimit);
    setpageCount(props.items.length / newPageLimit);
    changePage(1);
  };

  useEffect(() => {
    props.setPageItems(pageData);
  }, [pageNumber, pageData, props]);

  return (
    <div className="pagination-container">
      <InputLabel id="demo-simple-select-label" style={{ padding: 10 }}>
        Rows
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={pageLimit.toString()}
        label="Rows per page"
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
      {/* <b className="pagination-button" onClick={previousPage}>
        Prev
      </b> */}
      <KeyboardDoubleArrowLeftIcon onClick={firstpage} style={{ padding: 10 }}  sx={{ color: pageNumber === 0 ? "grey" : "black" }} />
      <FirstPageIcon onClick={previousPage} style={{ padding: 10 }}  sx={{ color: pageNumber === 0 ? "grey" : "black" }} />
      <input
        className="pagination-input"
        value={pageNumber + 1}
        onChange={(e) => {
          changePage(e.target.valueAsNumber);
        }}
        type="number"
        style={{ padding: 10 }}
      />

      <LastPageIcon
        onClick={nextPage}
        style={{ padding: 10 }}
        sx={{ color: reachlimit ? "grey" : "black" }}
      />
      <KeyboardDoubleArrowRightIcon
        style={{ padding: 10 }}
        onClick={LastPage}
        sx={{ color: reachlimit ? "grey" : "black" }}
      />
    </div>
  );
};

export default Pagination;
