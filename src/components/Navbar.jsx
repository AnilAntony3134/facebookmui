import { AppBar, Avatar, Badge,  InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useState } from 'react'
import { Box } from '@mui/system';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(()=>({
    display: 'flex',
    justifyContent:'space-between',
}))
const StyledTitle = styled(Box)(()=>({
    display: "flex",
    flexDirection:"row-reverse"
}))
const Search = styled(Box)(( {theme} )=>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(( {theme} )=>({
    display: "none",
    gap: "20px",
    alignItems: 'center',
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))
const UserBox = styled(Box)(( {theme} )=>({
    display: "flex",
    gap: "10px",
    alignItems: 'center',
    [theme.breakpoints.up("sm")]:{
        display: "none",
    }
}))


const Navbar = () => {
    const [open,setOpen] = useState(false)
  return (
    <div>
        <AppBar position='sticky'>
            <StyledToolbar>
                <StyledTitle>
                    <Typography variant='h5 ' sx={{ display:{xs:"none", sm:"block"} }}>
                        Facebook
                    </Typography>
                    <FacebookIcon sx={{ fontSize:"32px", display:{sx:"block",sm:"none"} }}/>
                </StyledTitle>
                <Search>
                    <InputBase placeholder='Search..'/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail color='action'/>
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications color='action' sx={{display:{sx:"none",sm:"block"}}} />
                    </Badge>
                    <Badge badgeContent={1} color="error">
                        <Avatar sx={{ width: 30 , height: 30,  }} src="https://yt3.ggpht.com/yti/APfAmoGXAGfRIndr-pv0Qt9xVzBhVE1ssLMwRByFHIQfpCc=s88-c-k-c0x00ffffff-no-rj-mo" color='action'  onClick={e=>setOpen(true)}/>
                    </Badge>

                </Icons>
                <UserBox>
                <Badge badgeContent={1} color="error">
                        <Avatar sx={{ width: 30 , height: 30,  }} src="https://yt3.ggpht.com/yti/APfAmoGXAGfRIndr-pv0Qt9xVzBhVE1ssLMwRByFHIQfpCc=s88-c-k-c0x00ffffff-no-rj-mo" color='action'  onClick={e=>setOpen(true)}/>
                    </Badge>
                </UserBox>
            </StyledToolbar>
            <Menu
            sx={{marginTop:'40px'}}
                // marginThreshold={50}
                id="menu"
                aria-labelledby='demo'
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Settings</MenuItem>
                </Menu>
        </AppBar>
    </div>
  )
}

export default Navbar