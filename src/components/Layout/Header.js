import { Box, Stack, Typography } from "@mui/material"
import { alertLine, arrowDown, bell, chatBubble, draft, inbox, logoWhite, starBig, starSmall, timer, user } from "../../helper/Constant"
import { Select } from "../Common"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

const inboxMenuList = [
  {
    name: "Unanswered Responses",
    icon: chatBubble,
    count: "68",
  },
  {
    name: "Starred",
    icon: starSmall,
    count: "56",
  },
  {
    name: "Follow Up Later",
    icon: timer,
    count: "15",
  },
  {
    name: "Drafts",
    icon: draft,
    count: "85",
  },
  {
    name: "Other Inbox",
    icon: inbox,
    count: "235",
  },
  {
    name: "Spam",
    icon: alertLine,
    count: "120",
  },
]

const Header = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const handleAlertClick = () => { setIsAlertOpen(true) };

  return (
    <>
      <Stack flexDirection={'row'} justifyContent={'space-between'} width={'100%'} alignItems={'center'} >
        <img src={logoWhite} alt="" width={140} />
        <Box sx={{ color: 'white.main' }}>
          <Stack flexDirection={'row'} alignItems={'center'} gap={4}>
            <DropdownMenu.Root open={isAlertOpen} onOpenChange={(open) => setIsAlertOpen(open)}>
              <DropdownMenu.Trigger className='dropDown'>
                <Stack flexDirection={'row'} sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'} gap={1}>
                  <Typography fontWeight={'500'} color={'white.main'}>Inbox</Typography>
                  <img src={arrowDown} alt="" width={12} />
                </Stack>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className='dropDownContent' align='end' onClick={handleAlertClick}>
                <DropdownMenu.Item className='dropDownMenu' onClick={handleAlertClick}>
                  <Box sx={{ width: '300px', height: 'auto' }}>
                    <Box maxHeight={'calc(100% - 30px)'} height={'100%'} sx={{ overflow: 'hidden' }}>
                      <Stack gap={1} sx={{ height: '-webkit-fill-available', overflow: 'scroll' }}>
                        {inboxMenuList.map((data, i) => {
                          const { name, icon, count } = data
                          return (
                            <Stack key={i} gap={1} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ background: 'var(--primaryLight)', padding: '8px 0' }}>
                              <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                                <img src={icon} alt='' />
                                <Typography color={'#616B77'}>{name}</Typography>
                              </Stack>
                              <Stack flexDirection={'row'} justifyContent={'space-between'}>
                                <Box sx={{ background: '#FEE6DA', color: '#fff', display: 'flex', alignItems: 'center', gap: '5px', borderRadius: '30px', padding: '0 10px 0 5px' }}>
                                  <Box sx={{ background: '', display: 'flex', alignItems: 'center', borderRadius: '30px', padding: '3px' }}>
                                    <img src={bell} alt='' />
                                  </Box>
                                  <Typography color={'#F89665'} fontSize={'12px'}>{count}</Typography>
                                </Box>
                              </Stack>
                            </Stack>
                          )
                        })}
                      </Stack>
                    </Box>
                  </Box>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <Stack flexDirection={'row'} sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'} gap={1}>
              <Typography fontWeight={'500'}>Sent</Typography>
              <img src={arrowDown} alt="" width={12} />
            </Stack>
            <Stack flexDirection={'row'} sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'} gap={1}>
              <Typography fontWeight={'500'}>Templates</Typography>
              <img src={arrowDown} alt="" width={12} />
            </Stack>
            <Stack flexDirection={'row'} sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'} gap={1}>
              <Typography fontWeight={'500'}>Settings</Typography>
              <img src={arrowDown} alt="" width={12} />
            </Stack>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Select selectList={[{ name: 'Derek Mirnhouse', id: 1 }, { name: 'John Wick', id: 2 }]} className='header_select' />
            </Box>
            <img src={user} alt="" width={38} />
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default Header