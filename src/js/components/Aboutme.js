import React, { useState, useEffect } from "react";
import Axios from "axios";
import parse from "html-react-parser";
import Mountain from './../../assets/about_mountain.jpg';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function App() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Esto es para comprobar si muestra el loader 
        // const timer = setTimeout(() => {
        //     Axios.get("http://alberto.codes/wp/wp-json/wp/v2/posts/15")
        //         .then(res => {
        //             setPost(res.data);
        //         })
        //     setLoading(true);
        // }, 3000);
        // return () => clearTimeout(timer);
        //  TODO: crear un div de full screnn loader;

        Axios.get("http://alberto.codes/wp/wp-json/wp/v2/posts/15")
            .then(res => {
                setPost(res.data);
            })
        setLoading(true);

    }, [setPost]);

    return (
        <div className="aboutme">
            <div className="aboutme_post">
                {loading ? (post && (<div className="aboutme__content">
                    <div className="aboutme__content_image">
                        <img src={Mountain} alt="about me" />
                    </div>
                    <div className="aboutme__content_text">
                        <h1>{post.title.rendered}</h1>
                        <div>{parse(post.content.rendered)}</div>

                    </div>
                </div>)) : <CircularProgress />}

            </div>
            {loading ? console.log(loading) : console.log(loading)}
        </div>
    );
}


// -------------------



// function Aboutme() {
//     const wpURL = 'http://alberto.codes/wp/wp-json/wp/v2/posts/15';
//     const [data, setData] = useState([]);
//     const getData = () => {
//         fetch(wpURL)
//             .then(function (response) {
//                 console.log(response)
//                 return response.json();
//             })
//             .then(function (data) {
//                 console.log(data);
//                 setData(data)
//             });
//     }
//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <div className="aboutme">
//             <h1>{data.id}</h1>
//             <h1>{ }</h1>


//         </div>
//     )
// }

// export default Aboutme
