import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { AccountBox, DocumentScanner, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
const Sidebar = ({mode,setMode}) => {
  return (
    <Box 
    flex={1} 
    p={2} 

    sx={{display:{ xs: "none", sm: "block" , marginRight:"25px" }}}
    >
        <Box position="fixed">

        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage"/>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <DocumentScanner />
                    </ListItemIcon>
                    <ListItemText primary="Pages"/>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Groups"/>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Storefront />
                    </ListItemIcon>
                    <ListItemText primary="Marketplace"/>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Friends"/>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <ModeNight />
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode === "light" ? "dark":"light")}/>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>

    </Box>
  )
}

export default Sidebar