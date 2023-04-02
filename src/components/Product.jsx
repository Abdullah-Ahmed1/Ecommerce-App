import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';

export default function Product(){

    const products = useSelector((state)=> state.allProucts.products)

  return (
    <Grid2 container flexDirection={'row'} spacing={3}>
        {
            products.map((item)=>{
                return (
                    <Grid2 >
                  
                    <Card key={item.id} sx={{ minWidth:345,maxWidth: 345,maxHeight:350,minHeight:350 }}>
                      <Link style={{textDecoration:"none",color:"black"}} to={`/product/${item.id}`}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={item.image}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.category}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                    </Link>
                  </Card>
                  </Grid2>
                )
            })
        }
    </Grid2>
   
  );
}