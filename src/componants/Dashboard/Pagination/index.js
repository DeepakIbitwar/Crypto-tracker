
import './style.css'
import { useState } from 'react';

import * as React from 'react';
// import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

export default function PaginationComponant( {page, handlePageChange}) {
  

  return (
    <div className='pagination-componant'>
      
      <Pagination count={10} page={page} onChange={(event, value)=>handlePageChange(event, value)} 
      sx={{
        color: "var(--white)",
        "& .Mui-selected ": {
          backgroundColor: "var(--blue) !important",
          color: "#fff !important",
          borderColor: "var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
          color: "var(--white)",
          border: "1px solid var(--grey)",
        },
      }}/>
    </div>
  );
}