import * as React from "react";
import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper
} from "@mui/material";
import AddSongDialog from "./AddSongDialog";
const columns = [
  { id: "id", label: "#", minWidth: 170 },
  {
    id: "name",
    label: "Name",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "singer",
    label: "Author",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  }
];
function SongList({songs,playlistId}) {
  return (
    <div style={{height:'100%'}}>
      <Paper sx={{ width: "100%", overflow: "hidden",height:'100%' }}>
        <TableContainer sx={{ maxHeight: 740 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {songs?.length >0 && songs.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <AddSongDialog playlistId={playlistId} />
    </div>
  );
}

export default SongList;
