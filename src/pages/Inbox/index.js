import { Box, Checkbox, Drawer, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button, Input, Select } from '../../components/Common'
import { arrowBack, arrownext, attachmentLine, bellWhite, deleteIcon, deleteWhite, img, img2, leftRight, menu, plus, refresh, starBig, starFilled, timerBig, user } from '../../helper/Constant'
import Sidebar from './Sidebar'

const Inbox = () => {
    const { window } = Window;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [drawerWidth, setDrawerWidth] = React.useState(320);
    const [drawerStatus, setDrawerStatus] = React.useState(true);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleDrawerOpenToggleWeb = () => {
        setDrawerWidth(320);
        setDrawerStatus(true)
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ height: '100vh', width: '100vw' }}>
            <Box sx={{ display: 'flex', height: '100%' }}>
                <Box component="nav"
                    onMouseEnter={handleDrawerOpenToggleWeb}
                    // onMouseLeave={handleDrawerCloseToggleWeb}
                    sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 }, transition: 'width 0.3s ease-in-out' }}>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', transition: 'width 0.3s ease-in-out', width: drawerWidth, backgroundColor: 'white.main' },
                        }}
                    >
                        <Sidebar handleDrawerToggle={handleDrawerToggle} drawerStatus={drawerStatus} setActiveSubMenu={setActiveSubMenu} activeSubMenu={activeSubMenu} />
                    </Drawer>
                    <Drawer variant="permanent" sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', transition: 'width 0.3s ease-in-out', width: drawerWidth, backgroundColor: 'white.main' },
                    }}>
                        <Sidebar handleDrawerToggle={handleDrawerToggle} drawerStatus={drawerStatus} setActiveSubMenu={setActiveSubMenu} activeSubMenu={activeSubMenu} />
                    </Drawer>
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Stack flexDirection={'row'} justifyContent={{ xs: 'space-between', md: 'flex-end' }} alignItems={'center'} sx={{ padding: { xs: '10px', sm: '15px' }, borderBottom: '1px solid var(--border)' }}>
                        <Stack sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <svg onClick={handleDrawerToggle} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="#909092" fill-rule="evenodd" d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clip-rule="evenodd" /></svg>
                        </Stack>
                        <Stack flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'} gap={{ xs: '10px', sm: 2 }}>
                            <img src={leftRight} alt='' className='inbox_header_image' />
                            <Typography color={'text.main'} fontSize={{ xs: '15px', sm: '18px' }}>56 / 100</Typography>
                            <img src={starBig} alt='' className='inbox_header_image' />
                            <img src={timerBig} alt='' className='inbox_header_image' />
                            <img src={arrowBack} alt='' className='inbox_header_image' />
                            <img src={arrownext} alt='' className='inbox_header_image' />
                            <img src={deleteIcon} alt='' className='inbox_header_image' />
                            <img src={menu} alt='' className='inbox_header_image' />
                        </Stack>
                    </Stack>
                    <Box p={{ xs: 2, sm: 3 }}>
                        <Stack flexDirection={{ sm: 'row' }} justifyContent={'space-between'} alignItems={{ sm: 'center' }} gap={{ xs: 1, sm: 2 }} mb={{ xs: 2, sm: 3 }}>
                            <Typography fontSize={{ xs: '18px', sm: '22px' }} fontWeight={'500'}>Reiciendis voluptatibus maiores </Typography>
                            <Typography fontSize={{ xs: '12px', sm: '14px' }} color={'text.main'}>20 Jun 2022, 09:44 (2 days ago)</Typography>
                        </Stack>
                        <Stack gap={{ xs: 2, sm: 3 }}>
                            <Typography fontSize={{ xs: '12px', sm: '14px' }} color={'text.main'}>Hi Yash,</Typography>
                            <Typography fontSize={{ xs: '12px', sm: '14px' }} color={'text.main'}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse sit amet faucibus odio. Duis id venenatis dui. Donec hendrerit imperdiet euismod. Praesent ullamcorper mollis massa, a dapibus eros mattis eget. Sed ornare vestibulum libero, vitae hendrerit tellus condimentum sollicitudin. Donec molestie eros ut sagittis porta.</Typography>
                            <Typography fontSize={{ xs: '12px', sm: '14px' }} color={'text.main'}>Proin mi mauris, ultrices sed pellentesque ut, suscipit sit amet neque. Vivamus porta leo sed urna feugiat, sed gravida dui luctus. Nam sit amet ligula quis lectus condimentum malesuada. Nunc posuere molestie urna ac semper.</Typography>
                            <Typography fontSize={{ xs: '12px', sm: '14px' }} color={'text.main'}>Ut elementum sapien et porttitor porta. Nunc at mollis est, finibus luctus sem. Curabitur semper molestie tortor quis condimentum.</Typography>
                            <Typography fontSize={{ xs: '12px', sm: '14px' }} color={'text.main'}>Curabitur ac feugiat libero. Fusce ut lectus quis mi rutrum blandit sit amet sit amet elit.</Typography>
                            <Typography fontSize={{ xs: '12px', sm: '14px' }} color={'text.main'}> Thank You.</Typography>

                            <Stack flexDirection={{ sm: 'row' }} alignItems={{ sm: 'center' }} gap={2}>
                                <img src={img} alt='' width={300} />
                                <img src={img2} alt='' width={300} />
                            </Stack>

                            <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                                <Box sx={{ backgroundColor: '#F7F8FF', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '35px', sm: '40px' }, height: { xs: '35px', sm: '40px' }, borderRadius: '6px' }}>
                                    <img src={arrowBack} alt='' className='inbox_header_image' />
                                </Box>
                                <Box sx={{ backgroundColor: '#F7F8FF', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '35px', sm: '40px' }, height: { xs: '35px', sm: '40px' }, borderRadius: '6px' }}>
                                    <img src={arrownext} alt='' className='inbox_header_image' />
                                </Box>
                            </Stack>
                            <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} gap={2}>
                                <Button
                                    buttonName={
                                        <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                                            <img src={plus} alt='' width={15} />
                                            <Typography>Compose</Typography>
                                        </Stack>
                                    } />
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Inbox
