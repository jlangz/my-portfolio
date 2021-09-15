import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`
                *[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }
            `)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-blue-100 min-h-screen">
            <section className="container mx-auto p-6 lg:p-12">
                <h1 className="text-5xl flex justify-center cursive">Blog Posts</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Look for a post you'd like to read</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                    <article key={index} className="group">
                        <Link to={"post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-400" 
                        >
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute transition-all duration-200 filter group-hover:brightness-110 transform group-hover:scale-105" />
                                <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="text-gray-800 text-md lg:text-lg font-blog px-3 py-4 bg-blue-100 hover:text-blue-700 bg-opacity-88 rounded hover:bg-white">
                                        {post.title}
                                    </h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}