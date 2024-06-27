import { Box, Checkbox, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { loginBanner, logo } from '../../helper/Constant'
import { Button, Input } from '../../components/Common'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <Grid container sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <Grid item xs={12} md={5}>
                <Stack sx={{ height: '100vh', maxWidth: '400px', margin: 'auto', padding: '20px' }} justifyContent={'center'} gap={2}>
                    <Box sx={{ position: 'absolute', top: { xs: '20px', sm: '50px' } }}>
                        <img src={logo} alt='' width={200} />
                    </Box>
                    <Typography fontSize={'30px'} fontWeight={'600'}>Login</Typography>
                    <Input placeholder='Email' />
                    <Box borderRadius={'10px'} sx={{ background: '#F78484', color: 'white.main', padding: '10px 16px' }}>
                        <Typography>Password</Typography>
                        <Typography fontSize={{ xs: '12px', sm: '14px' }}>Required field can not be empty</Typography>
                    </Box>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                        <Stack flexDirection={'row'} gap={'5px'}>
                            <Checkbox
                                name='rememberMe'
                                color='primary'
                                sx={{ padding: '0', '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                            <Typography color={'text.main'} fontSize={{ xs: '13px', sm: '15px' }}>Remember me</Typography>
                        </Stack>
                        <Typography color={'text.main'} fontSize={{ xs: '13px', sm: '15px' }}>Forgot Password?</Typography>
                    </Stack>
                    <Button buttonName='Login' style={{ width: 'fit-content' }} onClick={() => navigate('/inbox')} />
                    <Typography color={'text.main'} fontSize={{ xs: '13px', sm: '15px' }}>Not account At? <Link to='/'>Register</Link> here.</Typography>
                </Stack>
            </Grid>
            <Grid item xs={7} sx={{ display: { xs: 'none', md: 'block' } }}>
                <img src={loginBanner} alt='' style={{ width: '100%', height: '100%', }} />
            </Grid>
        </Grid>
    )
}

export default Login
