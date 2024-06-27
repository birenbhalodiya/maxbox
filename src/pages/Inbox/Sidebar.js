import { Box, Checkbox, Stack, Typography } from '@mui/material'
import React from 'react'
import { Input, Select } from '../../components/Common'
import { attachmentLine, bellWhite, deleteWhite, refresh, starFilled, user } from '../../helper/Constant'


const Sidebar = () => {
    return (
        <Box sx={{ backgroundColor: '#F7F8FF', height: '100%', marginTop: { xs: '58px', sm: '70px' }, overflow: 'hidden' }}>
            <Box p={{ xs: '10px', sm: 2 }}>
                <Stack gap={'10px'}>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} mb={{ sm: 1 }}>
                        <Typography fontSize={{ xs: '18px' }} fontWeight={'600'}>Other Inbox</Typography>
                        <Box sx={{ background: '#FA9766', color: '#fff', display: 'flex', alignItems: 'center', gap: '5px', borderRadius: '30px', padding: '0 10px 0 5px' }}>
                            <Box sx={{ background: '#DC652961', display: 'flex', alignItems: 'center', borderRadius: '30px', padding: '3px' }}>
                                <img src={bellWhite} alt='' />
                            </Box>
                            <Typography>223</Typography>
                        </Box>
                    </Stack>
                    <Stack>
                        <Input placeholder='Search' className='input_inbox' />
                    </Stack>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} gap={2} my={{ sm: 1 }}>
                        <Select selectList={[{ name: 'All', id: 1 }]} className='sidebar_select' />
                        <Stack flexDirection={'row'} gap={1}>
                            <Box sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', borderRadius: '6px' }}>
                                <img src={deleteWhite} alt='' width={18} />
                            </Box>
                            <Box sx={{ backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '35px', borderRadius: '6px' }}>
                                <img src={refresh} alt='' width={18} />
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack flexDirection={'row'} gap={'5px'}>
                        <Checkbox
                            name='rememberMe'
                            color='primary'
                            sx={{ padding: '0', '& .MuiSvgIcon-root': { fontSize: 15 } }}
                        />
                        <Typography color={'text.main'} fontSize={{ xs: '13px' }}>Select All</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Stack sx={{ overflowX: 'scroll', maxHeight: { xs: 'calc(100vh - 232px)', sm: 'calc(100vh - 280px)' } }}>
                {[1, 1, 1, 1, 1, 1, 1, 1].map((ele, i) => {
                    return (
                        <Stack key={i} sx={{ background: 'var(--white)', borderBottom: '1px solid var(--border)' }} flexDirection={'row'} gap={1} p={{ xs: '10px', sm: 2 }}>
                            <Box>
                                <Checkbox
                                    name='rememberMe'
                                    color='primary'
                                    sx={{ padding: '0', '&.MuiSvgIcon-root': { width: '15px' } }}
                                />
                            </Box>
                            <Stack gap={1}>
                                <Stack flexDirection={'row'} gap={2} alignItems={'center'} justifyContent={'space-between'}>
                                    <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                                        <img src={user} alt='' width={35} />
                                        <Stack>
                                            <Typography color={'text.main'} fontSize={{ xs: '10px' }}>Chelsia Donald</Typography>
                                            <Typography fontSize={{ xs: '12px' }}>Lenovo has a new policy</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack alignItems={'flex-end'}>
                                        <Typography color={'text.main'} fontSize={{ xs: '10px' }}>8:56 PM</Typography>
                                        <img src={starFilled} alt='' />
                                    </Stack>
                                </Stack>
                                <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
                                    <img src={attachmentLine} alt='' width={20} />
                                    <Typography color={'text.main'} fontSize={{ xs: '10px' }}>It is a long established facts that a reader will be distracted
                                        the readable...</Typography>
                                </Stack>
                            </Stack>

                        </Stack>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default Sidebar
