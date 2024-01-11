import React, { useState } from 'react'
import {Container, Box, Text,  Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import { ChatState } from '../Context/ChatProvider'
import SideDrawer from '../components/miscellaneous/SideDrawer'
import ChatBox from '../components/ChatBox'
import MyChats from '../components/MyChats'
export const Chatpage = () => {
  const {user} = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px" style={{ display: "flex" }}>
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && 
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        }
      </Box>
    </div>
  )
}
