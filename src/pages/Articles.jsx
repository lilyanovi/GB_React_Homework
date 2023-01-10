import React, { useEffect, useState } from "react"
import { api } from "../constants"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';




export function Articles () {
    
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getFetchArticles = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(api)
            if(res.ok){
                const data = await res.json()
                setArticles(data)
            }
        } catch  (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
       getFetchArticles()
    }, [])


    return (
    <>
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={3}>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h5" component="div">
                    Articles
                </Typography>
            </Grid>
            <Grid item >
                <Button variant="contained" onClick={getFetchArticles}>Update</Button>
            </Grid>
           {loading && (
             <Grid item >
                <CircularProgress />
            </Grid>
           )}
        </Grid>
        
       
        {!loading && (
        <Grid container justifyContent="center" spacing={2} >
        {articles.map((article) => (
           <Grid item >
            <Card sx={{ maxWidth: 345 }} key={article.id} elevation={12}>
            <CardMedia
              sx={{ height: 140 }}
              image={article.imageUrl}
              title="green iguana"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {new Date(article.publishedAt).toUTCString()}
                </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.summary}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={article.url}>Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
        </Grid>
        )}
         {error && (
         <Alert severity="error">{error}</Alert>
         )}
    </>
    )
}