import React from 'react'
import { NavLink } from 'react-router-dom'
import ListCardComponent from './ListCardComponent'
import { projects } from '../data/projects-data.json'
import ContactPage from './ContactPage'
import AboutMeList from './AboutMeList'

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-img bg-green-500 w-full text-justify relative h-80 shadow-lg rounded-b-lg opacity-90">
        <p className="select-none text-5xl sm:text-6xl text-center text-gray-50 pt-16 pb-8 tracking-tight font-extrabold text-shadow-lg">
          Welcome to my portfolio site
        </p>
        <p className="select-none text-sm sm:text-xl text-center text-gray-50 tracking-tight font-extrabold text-shadow-lg max-w-md mx-auto px-8 sm:px-0">
          Here you will find a curated selection of past projects, my
          professional CV, various ways to contact, and some interesting facts
          about me.
        </p>
      </div>
      <div className="text-gray-800 m-auto max-w-screen-sm sm:py-10">
        <p className="font-bold sm:text-xl text-center m-10 sm:py-4">
          Hi 🙋🏽‍♂️ I am Jay, I build Web3 stuff.
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:py-4">
          I've been working in the digital space since 2013 when I built my
          first{' '}
          <a
            className="font-extrabold"
            target="_blank"
            rel="noreferrer"
            href="https://agenciadowntown.com"
          >
            website
          </a>
          . I have also created a ton of AB tests and analytics implementations.
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:py-4">
          I then transitioned into the SaaS industry, where I held positions as
          a Front-End SE and a DevOps engineer. These roles allowed me to
          develop a user-centered approach to software development, while also
          gaining valuable technical knowledge and expertise I needed as a
          self-taught engineer.
          <br />
          {/* Here is a{' '}
          <NavLink to={'/about'} className="font-extrabold">
            link
          </NavLink>{' '}
          showcasing a bit of my personal story */}
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:py-4">
          Currently, my primary focus is on Web3 and Blockchain technology. I
          have been actively working on a project called{' '}
          <a
            className="font-extrabold"
            target="_blank"
            rel="noreferrer"
            href="https://generatenfts.xyz"
          >
            GENERATENFTS.XYZ
          </a>{' '}
          since the end of 2022. The platform, built from scratch, enables users
          to upload images and receive NFTs directly into their wallets. My
          responsibilities include thinking about app architecture and
          infrastructure, developing smart contracts, building frontend and
          backend, and utilizing IPFS for decentralized data storage.
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:py-4">
          In terms of my technical expertise in Web3, I have experience in
          writing smart contracts using Solidity. I have completed the Ethereum
          Bootcamp by Alchemy University, and have developed applications
          primarily using Hardhat and Ethers.js. I created my own{' '}
          <a
            className="font-extrabold"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jaymgonzalez/oci-crypto-devs"
          >
            ERC20 Token
          </a>
          ,{' '}
          <a
            className="font-extrabold"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jaymgonzalez/dao-crypto-devs"
          >
            DAO Contract
          </a>
          ,{' '}
          <a
            className="font-extrabold"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jaymgonzalez/dex-crypto-devs"
          >
            DEX platform
          </a>
          , and a{' '}
          <a
            className="font-extrabold"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jaymgonzalez/whale-tracker"
          >
            Crypto Traking Bot
          </a>
          . I have a solid understanding of the Ethereum Virtual Machine (EVM),
          Merkle Trees, Patricia Tries, and Hashing functions. If you are
          curious to know more,{' '}
          <NavLink to={'/cv'} className="font-extrabold">
            check my CV
          </NavLink>
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:pt-4">
          Below are a few examples of my web2 work, front end with JS and React,
          backend with NodeJS and some Docker as well. For the full list go{' '}
          <NavLink to={'/projects'} className="font-extrabold">
            here.
          </NavLink>
        </p>
        <p className="font-bold sm:text-xl text-center m-10 sm:pt-4">
          Feel free to contact me with any of the social media options at the
          bottom or on the{' '}
          <NavLink to={'/contact'} className="font-extrabold">
            contact page
          </NavLink>
        </p>
      </div>
      <div className="bg-divider-img h-40"></div>

      <div className="max-w-screen-md mx-auto sm:py-10 grid sm:grid-cols-2 grid-cols-1 gap-4">
        <ListCardComponent projects={projects.slice(0, 4)} />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1280 245"
      >
        <g fill="none" mask='url("#SvgjsMask1071")'>
          <path
            fill="rgba(7, 89, 133, 1)"
            d="M1344 245H0V127.9q6.41-57.59 64-51.17 62.96-43.71 106.667 19.25 53.223-10.78 64 42.44 16.133-47.87 64-31.74 19.273-44.73 64-25.46 26.043-37.96 64-11.91 46.003-18 64 28.01 47.753-16.24 64 31.51 60.123-46.54 106.666 13.58Q697.39 71.8 768 107.85q21.85-42.15 64-20.3 24.41-39.59 64-15.18 78.2-28.46 106.667 49.74 41.693-64.98 106.666-23.29Q1150.27 33.09 1216 74.03q49.58-14.42 64 35.16 50.72-13.28 64 37.45z"
          ></path>
          <path
            fill="rgba(165, 243, 252, 1)"
            d="M1322.667 245H0v-83.99q45.57-18.43 64 27.15 45.77-60.9 106.667-15.13 36.273-70.39 106.666-34.11Q362.12 117.04 384 201.83q47.16-59.5 106.667-12.34 43.593-63.07 106.666-19.47Q643.08 109.1 704 154.84q50.97-13.03 64 37.95 24.29-39.71 64-15.41 68.96-37.71 106.667 31.25 8.443-55.56 64-47.11 37.173-26.83 64 10.34 45.133-18.86 64 26.27 25.243-38.76 64-13.52 25.653-38.35 64-12.7 16.043-47.96 64-31.91z"
          ></path>
          <path
            fill="rgba(34, 197, 94, 1)"
            d="M1344 245H0v-32.81q20.67-43.33 64-22.67 83.59-23.07 106.667 60.52 28.673-77.99 106.666-49.31 41.727-22.27 64 19.46Q417.79 189.98 448 266.43q16.27-47.73 64-31.45 29.57-77.1 106.667-47.53 45.493-18.51 64 26.99 74.863-31.8 106.666 43.06Q834.83 196.33 896 241.83q6.45-57.55 64-51.1 60.02-46.65 106.667 13.37 67.493-39.17 106.666 28.32Q1242.56 194.98 1280 264.2q3.82-60.18 64-56.36z"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1071">
            <path fill="#fff" d="M0 0H1280V245H0z"></path>
          </mask>
        </defs>
      </svg>
      <div className="max-w-screen-sm mx-auto text-gray-800">
        <p className="text-4xl text-center tracking-tight font-extrabold py-10 sm:py-20">
          About Me
        </p>
        <AboutMeList />
      </div>

      <div className="bg-divider-img h-40"></div>

      <div className="max-w-screen-sm mx-auto text-gray-800">
        <p className="text-4xl text-center tracking-tight font-extrabold py-10 sm:py-20">
          Contact Me
        </p>
        <p className="font-bold sm:text-xl content-center px-10 text-justify">
          If you wan to get in touch, fill this form or send me a message in any
          of the social networks displayed in the footer. DM's are open.
        </p>
        <ContactPage />
      </div>
    </>
  )
}

export default HomePage
