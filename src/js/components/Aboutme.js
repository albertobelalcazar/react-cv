import React, { useState, useEffect } from "react";
import Axios from "axios";
import parse from "html-react-parser";
import Mountain from './../../assets/about_mountain.jpg';

export default function App() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        Axios.get("http://alberto.codes/wp/wp-json/wp/v2/posts/15").then(
            response => {
                setPost(response.data);
            }
        );
    }, [setPost]);

    return (
        <div className="aboutme">
            <div className="aboutme_post">
                {post && (
                    <div className="aboutme__content">
                        <div className="aboutme__content_image">
                            <img src={Mountain} alt="about me" />
                        </div>
                        <div className="aboutme__content_text">
                            <h1>{post.title.rendered}</h1>
                            <div>{parse(post.content.rendered)}</div>
                        </div>
                    </div>
                )}

            </div>
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
