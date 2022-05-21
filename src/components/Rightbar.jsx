import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box 
    flex={2} 
    p={2} 
    sx={{display:{ xs: "none", sm: "block" }}}>
        <Box sx={{display: "flex", flexDirection: "column" , alignItems: "flex-start", position:"fixed"}} width={"25%"}>
        <Typography variant='h5' sx={{ fontWeight: "200" }}  mb={2} >
            Online Friends
        </Typography>
        <AvatarGroup max={6}>
            <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/yti/APfAmoGXAGfRIndr-pv0Qt9xVzBhVE1ssLMwRByFHIQfpCc=s88-c-k-c0x00ffffff-no-rj-mo" />
            <Avatar alt="Travis Howard" src="https://yt3.ggpht.com/yti/APfAmoGXAGfRIndr-pv0Qt9xVzBhVE1ssLMwRByFHIQfpCc=s88-c-k-c0x00ffffff-no-rj-mo" />
            <Avatar alt="Cindy Baker" src="https://yt3.ggpht.com/yti/APfAmoGXAGfRIndr-pv0Qt9xVzBhVE1ssLMwRByFHIQfpCc=s88-c-k-c0x00ffffff-no-rj-mo" />
            <Avatar alt="Agnes Walker" src="https://yt3.ggpht.com/yti/APfAmoGXAGfRIndr-pv0Qt9xVzBhVE1ssLMwRByFHIQfpCc=s88-c-k-c0x00ffffff-no-rj-mo" />
            <Avatar alt="Trevor Henderson" src="https://yt3.ggpht.com/yti/APfAmoGXAGfRIndr-pv0Qt9xVzBhVE1ssLMwRByFHIQfpCc=s88-c-k-c0x00ffffff-no-rj-mo" />
        </AvatarGroup>
        <Typography variant='h5' mt={2} mb={2} sx={{ fontWeight: "200" }}>
            Latest Photos
        </Typography>

      
        <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
                <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://material-ui.com/static/images/image-list/burgers.jpg"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
            </ImageListItem>
            <ImageListItem>
                <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
            </ImageListItem>
        </ImageList>
        <Typography variant='h5' mt={2} mb={2} sx={{ fontWeight: "200" }}>
            Latest Converstaions
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
    </Box>
  )
}

export default Rightbar