import React from "react";
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "1200px",
        margin: "0 auto",
    }
}))


const aboutme = [
    {
        id: 1,
        title: "PERSONLIGA EGENSKAPER",
        description: "Jag är en nyfiken person som alltid vill lära mig mer och utvecklas inom mina områden, men jag är heller inte rädd för att ta mig an nya utmaningar. Oavsett om det gäller inom teknikens värld, att testa att laga nya maträtter eller när jag spelar fotboll så gillar jag att ge allt jag kan.",
    },
    {
        id: 2,
        title: "CSS3",
        description: "Jag älskar att bygga moderna, bygga och responsiva sajter, SASS, CSS är en viktigt del i min vardag",
    },
    {
        id: 3,
        title: "Javascript",
        description: '9 + "1" = "91" eller 9 - "1" = 8 Ja, jag vet så är det med javascript :) och ändå jag gillar utveckla med det',
    },
    {
        id: 4,
        title: "React",
        description: 'Det här CV:et är skapat bland annat med React, Material-UI, och flera verktig som jag använder varje dag',
    },
    {
        id: 5,
        title: ".NET",
        description: 'Blazor!  - Microsoft vill inte stana och vänta på tekniken, inte jag helller! därför jag jar jobbat med Blazor senaste året',
    },
    {
        id: 6,
        title: "CMS",
        description: 'Jag har jobbat med olika CMS system som till exempel, Wordpress, Joomla, Drupal, och flera ehandels plataformar.',
    },
]


function Aboutme() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item style={{ padding: 10 }}>
                    <h1>{aboutme[0].title}</h1>
                    <p>{aboutme[0].description}</p>
                </Grid>
            </Grid>

            {/* <Grid container spacing={0} alignItems="center" justify="center">
                <Grid item xs={12} sm={6} md={4}>
                    <h2 className={classes.h2}>199+</h2>
                    <p className={classes.p}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <h2 className={classes.h2}>575</h2>
                    <p className={classes.p}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <h2 className={classes.h2}>77</h2>
                    <p className={classes.p}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                </Grid>
            </Grid> */}


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

