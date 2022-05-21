import {  Favorite, FavoriteOutlined, MoreVertOutlined, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Card sx={{ margin: 5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertOutlined />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="20%"
      // width="100%"
      image="https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteOutlined />} checkedIcon={<Favorite style={{color:"red"}}/>}/>
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton> 
    </CardActions>
  </Card>
  )
}

export default Post