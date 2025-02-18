import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Greetingcard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="minions"
        
        height="300"
        width="300"
        image="https://i.gifer.com/embedded/download/PPzR.gif"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Minions
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        "Bello! Me want banana!" 
        Channeling my inner minion because let's face it, 
        a day without a banana is a day wasted! 🍌📣
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Greetingcard

