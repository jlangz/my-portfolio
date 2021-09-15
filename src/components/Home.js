import React from "react";
import image from "../img/norway-mountains.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Norwegian Mountains" className="absolute object-cover w-full h-full" />
            <section id="home-hero-section" className="relative flex justify-center min-h-screen items-center px-8">
                <h1 className="lg:text-6xl text-4xl text-center text-white leading-none lg:leading-snug home-name">
                    Hey! I am Jakob.
                </h1>
            </section>
        </main>
    );
}