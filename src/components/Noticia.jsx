import { Card, CardMedia, CardActions, CardContent, Link, Typography, Grid} from "@mui/material"


const Noticia = ({noticia}) => {
    const {urlToImage, url, title, description, source}= noticia;

  return (

    <Grid item md={6} lg={4}>
    <Card>

      {urlToImage && 
      (<CardMedia
        component={"img"}
        alt={`imagen de la noticia ${title}`}
        image={urlToImage}
        height={'250'}

      />
    )}

    <CardContent>
        <Typography variant="body1" color="error">
          {source.name}
        </Typography>

        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2">
          {description}
        </Typography>

    </CardContent>

    <CardActions>
      <Link 
        href ={url}
        target="_blank"
        variant="button"
        width={'100%'}
        textAlign={'center'}
        sx={{
          textDecoration: 'none',
          color:'white',  
          bgcolor: '#F7931A','&:hover': {
            backgroundColor: '#C67615',
        }

        }}

      >
        Leer noticia
      </Link>
    </CardActions>

      

    </Card>

    </Grid>
  )
}

export default Noticia