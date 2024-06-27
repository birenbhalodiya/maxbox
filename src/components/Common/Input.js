import React from 'react'
import TextField from "@mui/material/TextField";
import { Box, Typography } from '@mui/material';


const CommonInput = (props) => {
  const { type, placeholder, labelinput, value, disabled, style, className } = props;

  return (
    <>
      {labelinput && <Typography fontSize={{ xs: '12px', sm: '13px' }} fontWeight={500} mb={'2px'}>{labelinput}</Typography>}
      <Box position={'relative'}>
        <TextField
          fullWidth
          hiddenLabel
          name={props.name}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          type={type ? type : 'text'}
          color="primary"
          sx={style}
          className={className}
          {...props}
        />
      </Box>
    </>
  )
}

export default CommonInput