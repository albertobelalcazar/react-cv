import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import JagSommar from '../../assets/jag_sommar.jpg';
import PhonelinkIcon from '@material-ui/icons/Phonelink';

import { auto } from 'async';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: "50px auto 50px auto"
    },
    media: {
        height: auto,
    },
    image: {
        width: "100%",
    }
});

const aboutme = [
    {
        id: 1,
        title: "PERSONLIGA EGENSKAPER",
        description: "Jag är en nyfiken person som alltid vill lära mig mer och utvecklas inom mina områden, men jag är heller inte rädd för att ta mig an nya utmaningar. Oavsett om det gäller inom teknikens värld, att testa att laga nya maträtter eller när jag spelar fotboll så gillar jag att ge allt jag kan.",
    },
]


function Aboutme() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} title="Jag">
                        <img className={classes.image} src={JagSommar} alt="" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {aboutme[0].title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {aboutme[0].description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <PhonelinkIcon />
                    <Button size="small" color="primary" href="/#contact">
                        Kontakt
                    </Button>
                </CardActions>
            </Card>


        </div>
    )
}

export default Aboutme










// import React, { useState, useEffect } from "react";
// import parse from "html-react-parser";
// import Mountain from './../../assets/about_mountain.jpg';
// import CircularProgress from '@material-ui/core/CircularProgress';

// export default function App() {
//     const [post, setPost] = useState(null);
//     const [isLoaded, setisLoaded] = useState(false);

//     useEffect(() => {
//         // const timer = setTimeout(() => {
//         //     fetch('http://alberto.codes/wp/wp-json/wp/v2/posts/15')
//         //         .then((response) => {
//         //             console.log(response)
//         //             return response.json();
//         //         })
//         //         .then(data => {
//         //             console.log(data);
//         //             setPost(data);
//         //             return setisLoaded(true);
//         //         })
//         //         .catch((error) => { console.log(error) })
//         // }, 3000);
//         // return () => clearTimeout(timer);

//         fetch('/wp/wp-json/wp/v2/posts/15')
//             .then((response) => {
//                 console.log(response)
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 setPost(data);
//                 return setisLoaded(true);
//             })
//             .catch((error) => { console.log(error) })
//     }, [setPost]);

//     return (
//         <div className="aboutme">
//             <div className="aboutme_post">
//                 {isLoaded === false ? <CircularProgress /> : (post && (<div className="aboutme__content">
//                     <div className="aboutme__content_image">
//                         <img src={Mountain} alt="about me" />
//                     </div>
//                     <div className="aboutme__content_text">
//                         <h1>{post.title.rendered}</h1>
//                         <div>{parse(post.content.rendered)}</div>

//                     </div>
//                 </div>))}

//             </div>
//             {isLoaded === false ? console.log("loading...") : console.log("ready!!")}
//         </div>
//     );
// }

