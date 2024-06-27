import * as React from 'react';
import { styled } from '@mui/material/styles';
import { FiSearch } from "react-icons/fi";
import { InputBase } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '6px',
    backgroundColor: '#fff',
    padding: '0px 10px',
    '&:hover': {
        backgroundColor: '#fff',
    },
    border: '1px solid rgba(0, 0, 0, 0.12)',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'unset',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    top: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing('6px', 1, '6px', 0),
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '18ch',
            padding: theme.spacing('7px', 1, '7px', 0),
            paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        },
        [theme.breakpoints.up('lg')]: {
            width: '25ch',
        },
    },
}));

const CommonSearch = ({ search, setSearch, setPage }) => {

    return (
        <Search>
            <SearchIconWrapper>
                <FiSearch style={{ fontSize: '18px', color: '#A4A4A4' }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={'Search here'}
                type="text" // Ensure the type is set to text
                inputProps={{
                    'aria-label': 'search',
                    autoComplete: 'no-email' // Non-standard value to prevent email suggestions
                }}
                value={search}
                name="search"
                onChange={(e) => {
                    console.log("ewewewewewewew", e.target.value);
                    setSearch(e.target.value);
                    setPage(0);
                }}
            />
        </Search>
    )
}

export default CommonSearch