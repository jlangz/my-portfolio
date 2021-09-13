import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";
import background from "../img/snow-cacti.jpg"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url}`)
    .then((data) => setAuthor(data[0]))
    .catch(console.error);
    }, []);

    if (!author) return <div>Trying to think of good things to say about Jakob...</div>

    return (
        <main className="relative">
            <img src={background} alt="snow-cactus" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section style={{background: "rgba(137, 196, 244, 0.75)"}} className="rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-auto lg:w-64 lg:h-auto mr-8" alt={author.name} />
                    <div className="text-lg flex flex-col justify-center items-center flex-grow">
                        <h1 className="cursive text-6xl text-blue-300 mb-4">
                            Heisann! I'm {" "}
                            <span className="text-blue-100">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="no8wbzip" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}