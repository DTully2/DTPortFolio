import React from 'react'
import Logo from '../components/Logo'
import LoadingLogo from '../components/LoadingLogo'
import Arrow from '../components/Arrow'
import Nav from '../components/Nav'
import { useEffect, useState } from 'react'
import { useInView } from "react-intersection-observer"
import Cube from '../components/Cube'
import Gallery from '../components/Gallery'
import toast, { Toaster } from 'react-hot-toast';
function Home() {
  const [loading, setLoading] = useState(true)
  const [displayArrow, setDisplayArrow] = useState(false)
  const [ref, inView] = useInView({ threshold: 1.0 })
  const [showProjects, setShowProjects] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (inView) {
      setShowProjects(true)
    }
  }, [inView])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
    setTimeout(() => {
      setDisplayArrow(true)
    }, 3500)
  }, [])

  if (loading) {
    return (<div className="flex h-screen bg-graydient">
      <div className="m-auto ">
        <LoadingLogo />
      </div>
    </div>)
  }

  return (

    <div
      className={`${isMenuOpen ? "overflow-hidden bg-light-gray" : "overflow-y-auto bg-split"
        } dark window`}
    >

      <Nav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} work={() => scroll.scrollToBottom()} />
      <div className="">
        <section className="relative text-left gold-top">
          <div className="flex h-screen ">
            <div className="m-auto ">
              {/* <Logo /> no logo
              <div className="landing-text">
                <h1 className="mt-4  xl:text-7xl lg:text-5xl md:text-3xl sm:text-1xl  dev fade-inplace">Jean-Luc<br /> Desjardins</h1>
                <h1 className=" xl:text-7xl lg:text-5xl md:text-3xl sm:text-1xl dev fade-inplace">Software Developer</h1>
              </div> */}
              <Logo />
              <div className="text-center">
                <h1 className="mt-4  xl:text-6xl lg:text-5xl md:text-3xl sm:text-1xl gold-text fade-inplace ">Devon Tully</h1>
                <h1 className=" md:text-5xl sm:text-1xl dev mt-4 fade-inplace">Software Developer</h1>
              </div>
              <Arrow displayArrow={displayArrow} />
            </div>
          </div>
        </section>
      </div>
      <div className="relative top-0 bg-light-black" >

        <h1 className="text-light-black">Easter Egg Found!</h1>
        <div ref={ref} />
        {showProjects && <Gallery showProjects={showProjects} />}
        {showProjects && <div className="lg:hidden">
          <div className="h-screen mx-auto">
            <p className="mb-20 text-center text-white">Title</p>
            <div className="flex ">
              <div className="m-auto">
                <Cube />
              </div>
            </div>
          </div>
        </div>}
      </div>


    </div>


  )
}

export default Home
