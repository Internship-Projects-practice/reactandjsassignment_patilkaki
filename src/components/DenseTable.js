import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';

export default function DenseTable() {
   const [data, setData] = useState([])
 


useEffect(() => {
  async function fetchMoviesJSON() {
    const response = await fetch('https://gorest.co.in/public/v2/users');
    const movies = await response.json();
    setData(movies)
  
    
    
  }
  fetchMoviesJSON()
}, [])


  




  return (<>
<div style={{margin: "10px"}}>
<Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Male : {data.filter(males => males.gender === "male").length}</Button>
    </Box>
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Active male :  {data.filter(males => males.gender === "male" && males.status === "active").length}</Button>
    </Box>
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Inactive male :  {data.filter(males => males.gender === "male" && males.status === "inactive").length}</Button>
    </Box>
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Male : {data.filter(males => males.gender === "female").length}</Button>
    </Box>
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Active Female :  {data.filter(males => males.gender === "female" && males.status === "active").length}</Button>
    </Box>
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <Button>Inactive Female :  {data.filter(males => males.gender === "female" && males.status === "inactive").length}</Button>
    </Box>
</div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Status</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}