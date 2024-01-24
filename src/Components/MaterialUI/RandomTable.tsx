import React, { useState } from "react";
import { Person } from "../Model/Person";
import fetchData from "../../Resources/Assets/csvjson.json";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "../Fixed/Pagination";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
    cursor: "pointer",
    position: "relative", 
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  arrowIcon: {
    position: "absolute",
    marginLeft: "4px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "white",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const StyledArrowIcon = styled(ArrowDropDownIcon)(({ theme }) => ({
  position: "absolute",
  marginLeft: "4px",
  top: "50%",
  transform: "translateY(-50%)",
  color: theme.palette.common.white,
}));
function RandomTable({ seachData }) {
  const [data, setData] = useState<Person[]>([]);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const handleSort = (key: string) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const filteredData = sortedData().filter((item : any) => {
    // return item.first_name?.toLowerCase().includes(seachData.toLowerCase()) || item.email?.toLowerCase().includes(seachData.toLowerCase());
      return Object.values(item).join("").toLowerCase().includes(seachData.toLowerCase());
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell onClick={() => handleSort("first_name")}>
              first_name
              {sortConfig.key === "first_name" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort("last_name")}>
              last_name
              {sortConfig.key === "last_name" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort("email")}>
              email
              {sortConfig.key === "email" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort("city")}>
              city
              {sortConfig.key === "city" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort("latitude")}>
              latitude
              {sortConfig.key === "latitude" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort("longitude")}>
              longitude
              {sortConfig.key === "longitude" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort("street")}>
              street
              {sortConfig.key === "street" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort("street2")}>
              street2
              {sortConfig.key === "street2" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleSort("zip")}>
              zip
              {sortConfig.key === "zip" && (
                <StyledArrowIcon
                  style={{
                    transform:
                      sortConfig.direction === "asc"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row: Person, index: number) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.first_name}
              </StyledTableCell>
              <StyledTableCell>{row.last_name}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.city}</StyledTableCell>
              <StyledTableCell>{row.latitude}</StyledTableCell>
              <StyledTableCell>{row.longitude}</StyledTableCell>
              <StyledTableCell>{row.street}</StyledTableCell>
              <StyledTableCell>{row.street2}</StyledTableCell>
              <StyledTableCell>{row.zip}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination items={fetchData} pageLimit={5} setPageItems={setData} />
    </TableContainer>
  );
}

export default RandomTable;
