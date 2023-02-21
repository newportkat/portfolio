import React, { useState } from "react"
import PalettePro from "./assets/palettepro.png"
import TackleShop from "./assets/tackleshop.png"

const App = () => {
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark")
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <div className="flex h-screen flex-col">
                <nav className="z-10 flex items-center justify-evenly p-8 font-medium tracking-wider text-gray-700 shadow-xl dark:bg-gray-900 dark:text-white sm:justify-center sm:gap-36">
                    <div className="group relative">
                        <a href="#about">ABOUT</a>
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-blue-200 transition-all group-hover:w-full"></span>
                    </div>

                    <div className="group relative">
                        <a href="#projects">PROJECTS</a>
                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-blue-200 transition-all group-hover:w-full"></span>
                    </div>

                    {darkMode ? (
                        <div className="group relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 w-8 cursor-pointer p-1"
                                onClick={toggleDarkMode}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                />
                            </svg>
                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-blue-200 transition-all group-hover:w-full"></span>
                        </div>
                    ) : (
                        <div className="group relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 w-8 cursor-pointer p-1"
                                onClick={toggleDarkMode}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-1.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                />
                            </svg>
                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-blue-200 transition-all group-hover:w-full"></span>
                        </div>
                    )}
                </nav>
                <section className="flex flex-grow flex-col items-center justify-center gap-16 bg-blue-200 p-8 text-center text-gray-700 dark:bg-blue-900 dark:text-gray-200">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-shadow font-arvo text-5xl font-bold leading-tight tracking-wider sm:text-6xl md:text-7xl">
                            TOM KATILIUS
                        </h1>
                        <p>Front-End Developer based in Melbourne, AUS</p>
                    </div>
                    <a href="#about">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-8 w-8 animate-bounce cursor-pointer p-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </a>
                </section>
            </div>
            <section className="flex flex-col items-center justify-center gap-8 px-8 py-16 text-gray-700 dark:bg-gray-900 dark:text-white md:gap-12 md:px-12">
                <h1
                    className="font-arvo text-4xl font-semibold tracking-wider"
                    id="about"
                >
                    ABOUT
                </h1>
                <h2 className="text-xl text-blue-400">👋 Hey! I'm TomKat.</h2>
                <div className="flex flex-col gap-8 tracking-wide md:w-3/5">
                    <p className="leading-8 text-gray-700 dark:text-white">
                        I am a self-taught developer with a passion for
                        problem-solving and a love of learning. I have gained
                        experience working with React and have enjoyed building
                        projects using this framework. I am always working on
                        something new.
                    </p>
                    <p className="leading-8 text-gray-700 dark:text-white">
                        I am eager to find a career opportunity where I can put
                        my skills to use, continue my professional growth and
                        make a meaningful impact in the field of software
                        development.
                    </p>
                    <p className="leading-8 text-gray-700 dark:text-white">
                        My primary focus is on roles that offer opportunities
                        for learning and advancement. I am confident in my
                        ability to tackle new challenges and quickly adapt to
                        new technologies.
                    </p>
                </div>
                <div className="flex flex-col gap-8 sm:flex-row sm:gap-36">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl tracking-wide text-blue-400">
                            I Love Working With:
                        </h2>
                        <div className="flex gap-8 tracking-wide">
                            <ul className="leading-relaxed">
                                <li>- HTML</li>
                                <li>- CSS</li>
                                <li>- Tailwind</li>
                                <li>- Sass</li>
                                <li>- Node.js</li>
                            </ul>
                            <ul className="leading-relaxed">
                                <li>- Javascript</li>
                                <li>- Typescript</li>
                                <li>- React</li>
                                <li>- Figma</li>
                                <li>- Wordpress</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-8 bg-blue-200 px-8 py-16 text-center text-gray-700 dark:bg-blue-900 dark:text-gray-200 md:gap-12 md:px-12">
                <h1
                    className="font-arvo text-4xl font-semibold tracking-wider"
                    id="projects"
                >
                    PROJECTS
                </h1>
                <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
                    <div className="group overflow-hidden rounded-lg md:w-1/2">
                        <a href="http://shop.tomkatilius.com/" target="_blank">
                            <img
                                src={TackleShop}
                                alt=""
                                className="h-full w-full transform rounded object-cover opacity-90 transition-all duration-1000 ease-in-out group-hover:scale-125 group-hover:opacity-100"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <h2 className="text-2xl font-medium uppercase tracking-wider md:text-left">
                            Tackle Shop
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
                            <a
                                href="https://github.com/newportkat/e-commerce"
                                target="_blank"
                                className="flex items-center gap-2 rounded bg-gray-600 p-2 font-medium tracking-wider text-white hover:bg-gray-700 active:bg-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                                    />
                                </svg>
                                <p>GitHub Repo</p>
                            </a>
                            <a
                                href="http://shop.tomkatilius.com/"
                                target="_blank"
                                className="flex items-center gap-2 rounded bg-gray-600 p-2 font-medium tracking-wider text-white hover:bg-gray-700 active:bg-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <p>Live Demo</p>
                            </a>
                        </div>
                        <div className="flex flex-col gap-6 text-left leading-8 tracking-wide">
                            <p>
                                Welcome to my mock e-commerce store! This
                                project is a full-stack web application built
                                using{" "}
                                <span className="font-bold">
                                    React, TypeScript, and TailwindCSS
                                </span>{" "}
                                for the front-end, and a{" "}
                                <span className="font-bold">
                                    Node.js Express server
                                </span>{" "}
                                for the back-end. The app is hosted on a{" "}
                                <span className="font-bold">
                                    VPS with Nginx.
                                </span>{" "}
                            </p>
                            <p>
                                The front-end makes use of the{" "}
                                <span className="font-bold">
                                    Context API and the useReducer hook
                                </span>{" "}
                                to manage the state of the cart. The UI design
                                is implemented using the TailwindCSS framework,
                                providing a modern and responsive user
                                interface. All of the mock product data is
                                served to the client through a{" "}
                                <span className="font-bold">REST API.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
                    <div className="group overflow-hidden rounded-lg md:w-1/2">
                        <a href="https://palettepro.digital/" target="_blank">
                            <img
                                src={PalettePro}
                                alt=""
                                className="h-full w-full transform rounded object-cover opacity-90 transition-all duration-1000 ease-in-out group-hover:scale-125 group-hover:opacity-100"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <h2 className="text-2xl font-medium uppercase tracking-wider md:text-left">
                            Palette Pro
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start">
                            <a
                                href="https://github.com/newportkat/color-scheme-generator"
                                target="_blank"
                                className="flex items-center gap-2 rounded bg-gray-600 p-2 font-medium tracking-wider text-white hover:bg-gray-700 active:bg-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                                    />
                                </svg>
                                <p>GitHub Repo</p>
                            </a>
                            <a
                                href="https://palettepro.digital/"
                                target="_blank"
                                className="flex items-center gap-2 rounded bg-gray-600 p-2 font-medium tracking-wider text-white hover:bg-gray-700 active:bg-gray-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <p>Live Demo</p>
                            </a>
                        </div>
                        <p className="text-left leading-8 tracking-wide">
                            Palette Pro is a color palette generator built with
                            <span className="font-bold">
                                {" "}
                                React, TypeScript, and TailwindCSS.
                            </span>{" "}
                            It features the ability to generate palettes from a
                            range of color modes, adjust individual HSL values,
                            lock colors and save palettes to local storage. An
                            integrated{" "}
                            <span className="font-bold">
                                binary search algorithm
                            </span>{" "}
                            provides the closest color name match from a
                            database of over 3000 names.
                        </p>
                    </div>
                </div>
            </section>
            <footer
                className="flex flex-col items-center justify-center gap-2 p-6
             text-center dark:bg-gray-900 dark:text-white sm:flex-row sm:gap-12"
            >
                <p className="h-1/3 sm:w-1/3 sm:text-right">
                    thomas.katilius@gmail.com
                </p>
                <div className="flex h-1/3 items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                        />
                    </svg>
                </div>

                <p className="h-1/3 sm:w-1/3 sm:text-left">+61 434 954 597</p>
            </footer>
        </div>
    )
}

export default App
