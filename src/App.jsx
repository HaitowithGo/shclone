import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import './fonts.css'
import gsap from 'gsap'
import PageTransition from './PageTransition'
import Background from './Background'

const Home = () => (
  <div className="page-content">
    <div className="relative min-h-screen flex flex-col font-sf-text font-semibold">
      <nav>
        <Link to="/">
          <img className="size-20 p-2" src="https://raw.githubusercontent.com/HaitowithGo/assets/c7e0322c65685a10da72cff7c11752a619dff14a/logo.svg" alt="site logo" />
        </Link>

        <div className="font-sf-text font-semibold">
          <ul>
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="size-3 rounded-full bg-white inline-block animate-bounce"></span>
                <p className="text-nw ml-2 duration-300">Home</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/about" className="flex items-center">
                <p className="text-nw ml-2 duration-300">About</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/works" className="flex items-center">
                <p className="text-nw ml-2 duration-300">Works</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/contact" className="flex items-center">
                <p className="font-sfpro-Black text-nw ml-2 duration-300">Contact</p>
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <div className="flex-grow"></div>

      <p className="font-sfpro-Black text-nw text-right p-4 absolute bottom-0 right-0">
        <span className="text-xl">Hello! My name is Sekino Haito.</span><br />
        <br />
        Sorry for the boring site :)
      </p>
    </div>
  </div>
)

const About = () => (
  <div className="page-content">
    <div className="relative min-h-screen flex flex-col font-sf-text font-semibold">
      <nav>
        <Link to="/">
          <img className="size-20 p-2" src="https://raw.githubusercontent.com/HaitowithGo/assets/c7e0322c65685a10da72cff7c11752a619dff14a/logo.svg" alt="site logo" />
        </Link>

        <div>
          <ul>
            <div className="flex">
              <Link to="/" className="flex items-center">
                <p className="text-nw ml-2 duration-300">Home</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/about" className="flex items-center">
                <span className="size-3 rounded-full bg-white inline-block animate-bounce"></span>
                <p className="text-nw ml-2 duration-300">About</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/works" className="flex items-center">
                <p className="text-nw ml-2 duration-300">Works</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/contact" className="flex items-center">
                <p className="font-sfpro-Black text-nw ml-2 duration-300">Contact</p>
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <div className="flex-grow"></div>

      <div className="font-sfpro-Black text-nw text-right p-4 absolute bottom-0 right-0 ml-5 border-l-2">
        <div className="flex text-left">
          <img src="icon-oswald.png" alt="" className="rounded-full size-20" />

          <p className="ml-5">
            <span className="text-xl">Sekino Haito</span><br />
            <span className="text-sm opacity-75">
              Web3 / Frontend Developer<br />
              <a href="https://github.com/HaitowithGo" className="opacity-60 underline underline-offset-2 hover:opacity-75 duration-300">@HaitowithGo ↗</a>
            </span>
          </p>
        </div>

        <div className="mt-5">
          <p className="text-sm text-left">
            I'm Haito. I enjoy developing Web3 related products.<br />
            We strive for user-oriented UI/UX<br />
            and modern design and architecture.<br />
          </p>

          <div className="right-0 flex mt-3">
            <a href="https://x.com/h4i7o_0"><img className="mx-1 size-5 hover:opacity-75 duration-300" src="https://raw.githubusercontent.com/HaitowithGo/sekinohaito-assets/02b0c875a9ca832badaa1c9c7badf422d4e7d30f/X.svg" alt="" /></a>

            <a href="https://www.instagram.com/h4i7o_0/"><img className="mx-1 size-5 hover:opacity-75 duration-300" src="https://raw.githubusercontent.com/HaitowithGo/sekinohaito-assets/02b0c875a9ca832badaa1c9c7badf422d4e7d30f/Instagram.svg" alt="" /></a>

            <a href="https://www.facebook.com/profile.php?id=61552202765521"><img className="mx-1 size-5 hover:opacity-75 duration-300" src="https://raw.githubusercontent.com/HaitowithGo/sekinohaito-assets/02b0c875a9ca832badaa1c9c7badf422d4e7d30f/Facebook.svg" alt="" /></a>

            <a href="https://medium.com/@haitowithgo"><img className="mx-1 size-5 hover:opacity-75 duration-300" src="https://raw.githubusercontent.com/HaitowithGo/sekinohaito-assets/02b0c875a9ca832badaa1c9c7badf422d4e7d30f/Medium.svg" alt="" /></a>

            <a href=""><img className="mx-1 size-5 hover:opacity-75 duration-300" src="https://raw.githubusercontent.com/HaitowithGo/sekinohaito-assets/02b0c875a9ca832badaa1c9c7badf422d4e7d30f/Discord.svg" alt="" /></a>
          </div>
        </div>
        {/* <span className="text-2xl underline underline-offset-2">Sekino Haito</span>
        <br />
        Web3 / Frontend Developer<br />
        Graphic Designer<br />
        <br />
        <span className="text-xl">I use...</span><br />
        <a href="https://go.dev">Go</a>, <a href="https://www.rust-lang.org/">Rust</a>, <a href="https://ziglang.org/">Zig</a>, <a href="https://www.python.org/">Python(AI)</a>, <a href="https://github.com/HigherOrderCO/Bend">Bend</a><br />
        <a href="https://polkadot.network/">PolkaDot</a>, <a href="https://cosmos.network/">Cosmos</a>, <a href="https://solana.com/">Solana</a>, <a href="https://substrate.io/">Substrate</a><br />
        <a href="https://soliditylang.org/">Solidity</a>, <a href="https://use.ink/">ink!</a>, <a href="https://solang.readthedocs.io/en/v0.3.3/">Solang</a>, <a href="https://www.michelson.org/">Michelson</a><br />
        <a href="https://nextjs.org/">Next.js</a>, <a href="https://p5js.org/">p5.js</a>, <a href="https://gsap.com/">GSAP</a>, <a href="https://tailwindcss.com/">TailwindCSS</a><br />
        AdobePs, Ai, Pr, Ae, Figma
        <a href="https://www.blender.org/">Blender</a>, <a href="https://derivative.ca/">TouchDesigner</a><br /> */}
      </div>
    </div>
  </div>
)

const Works = () => (
  <div className="page-content">
    <div className="relative min-h-screen flex flex-col font-sf-text font-semibold">
      <nav>
        <Link to="/">
          <img className="size-20 p-2" src="https://raw.githubusercontent.com/HaitowithGo/assets/c7e0322c65685a10da72cff7c11752a619dff14a/logo.svg" alt="site logo" />
        </Link>

        <div>
          <ul>
            <div className="flex">
              <Link to="/" className="flex items-center">
                <p className="text-nw ml-2 duration-300">Home</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/about" className="flex items-center">
                <p className="text-nw ml-2 duration-300">About</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/works" className="flex items-center">
                <span className="size-3 rounded-full bg-white inline-block animate-bounce"></span>
                <p className="text-nw ml-2 duration-300">Works</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/contact" className="flex items-center">
                <p className="font-sfpro-Black text-nw ml-2 duration-300">Contact</p>
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <div className="flex-grow"></div>

      <p className="font-sfpro-Black text-nw text-right p-4 absolute bottom-0 right-0">
        <a href="" className="text-xl">DeFi System</a> <span className="opacity-75 text-lg">2023~</span><br />
        <span className="text-sm opacity-65">Solana Solang JavaScript</span><br />
        <Link to="/contact" className="text-sm underline underline-offset-2 hover:opacity-75 duration-300">participate ↗</Link><br />
        <br />
        <a href="" className="text-xl">DMMS</a> <span className="opacity-75 text-lg">2023~</span><br />
        <span className="text-sm opacity-65">PolkaDot ink! Rust JavaScript</span><br />
        <Link to="/contact" className="text-sm underline underline-offset-2 hover:opacity-75 duration-300">participate ↗</Link>
      </p>
    </div>
  </div>
)

const Contact = () => (
  <div className="page-content">
    <div className="relative min-h-screen flex flex-col font-sf-text font-semibold">
      <nav>
        <Link to="/">
          <img className="size-20 p-2" src="https://raw.githubusercontent.com/HaitowithGo/assets/c7e0322c65685a10da72cff7c11752a619dff14a/logo.svg" alt="site logo" />
        </Link>

        <div>
          <ul>
            <div className="flex">
              <Link to="/" className="flex items-center">
                <p className="text-nw ml-2 duration-300">Home</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/about" className="flex items-center">
                <p className="text-nw ml-2 duration-300">About</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/works" className="flex items-center">
                <p className="text-nw ml-2 duration-300">Works</p>
              </Link>
            </div>

            <div className="flex">
              <Link to="/contact" className="flex items-center">
                <span className="size-3 rounded-full bg-white inline-block animate-bounce"></span>
                <p className="font-sfpro-Black text-nw ml-2 duration-300">Contact</p>
              </Link>
            </div>
          </ul>
        </div>
      </nav>

      <div className="flex-grow"></div>

      <p className="font-sfpro-Black text-nw text-right p-4 absolute bottom-0 right-0">
        Requests, participation in projects, and other consultations.↓<br />
        <a href="https://x.com/h4i7o_0" class="underline decoration-1.5 hover:opacity-75 duration-300">X</a> <a href="https://www.instagram.com/h4i7o_0/" className="underline decoration-1.5 hover:opacity-75 duration-300">Instagram</a> <a href="mailto:haitowithgo@gmail.com" className="underline decoration-1.5 hover:opacity-75 duration-300">E-mail</a>
      </p>
    </div>
  </div>
)

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      {/*<Background /> 背景コンポーネントを追加 */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/works" element={<PageTransition><Works /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </>
  )
}

export default App