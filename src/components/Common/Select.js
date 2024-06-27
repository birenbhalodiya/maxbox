import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';

export default function CommonSelect(props) {
  const { selectHead, selectList, labelinput, style, className, onChange, disabled, variant, placeholder } = props;
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant={variant} sx={{ width: '100%' }}>
      {labelinput && <Typography fontSize={{ xs: '12px', sm: '13px' }} fontWeight={500} mb={'2px'}>{labelinput}</Typography>}
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        fullWidth
        sx={style}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
      >
        {selectHead && <MenuItem value="" hidden>{selectHead}</MenuItem>}
        {selectList?.map((data, i) => {
          return (
            <MenuItem value={data.id} key={i}>{data.name}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}