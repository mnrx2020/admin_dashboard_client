import React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'
import Navbar from "components/Navbar"
import Sidebar from "components/Sidebar"
import { useGetUserQuery } from 'state/api'

interface RootState {
  global: {
    userId: string;
  };
}

const Layout: React.FC = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
  const userId = useSelector((state: RootState) => state.global.userId)
  const { data } = useGetUserQuery(userId)
  console.log("data", data);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth={250}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
