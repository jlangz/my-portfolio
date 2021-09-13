import React from "react";
import image from "../img/norway-mountains.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Norwegian Mountains" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-blue-100 font-bold leading-none cusrive lg:leading-snug home-name">Hey! I am Jakob.</h1>
            </section>
        </main>
    );
}