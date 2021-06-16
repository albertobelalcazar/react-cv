import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import Mountain from './../../assets/about_mountain.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function App() {
    const [post, setPost] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     fetch('http://alberto.codes/wp/wp-json/wp/v2/posts/15')
        //         .then((response) => {
        //             console.log(response)
        //             return response.json();
        //         })
        //         .then(data => {
        //             console.log(data);
        //             setPost(data);
        //             return setisLoaded(true);
        //         })
        //         .catch((error) => { console.log(error) })
        // }, 3000);
        // return () => clearTimeout(timer);

        fetch('https://alberto.codes/wp/wp-json/wp/v2/posts/15')
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then(data => {
                console.log(data);
                setPost(data);
                return setisLoaded(true);
            })
            .catch((error) => { console.log(error) })
    }, [setPost]);

    return (
        <div className="aboutme">
            <div className="aboutme_post">
                {isLoaded === false ? <CircularProgress /> : (post && (<div className="aboutme__content">
                    <div className="aboutme__content_image">
                        <img src={Mountain} alt="about me" />
                    </div>
                    <div className="aboutme__content_text">
                        <h1>{post.title.rendered}</h1>
                        <div>{parse(post.content.rendered)}</div>

                    </div>
                </div>))}

            </div>
            {isLoaded === false ? console.log("loading...") : console.log("ready!!")}
        </div>
    );
}

