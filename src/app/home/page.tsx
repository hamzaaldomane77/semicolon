
import Hero from './_components/hero'
import Welcome from './_components/welcome'
import Services from './_components/services'
import Projects from './_components/projects'
import Team from './_components/team'
import Technologies from './_components/technologies'
import Footer from './_components/footer'
import React from 'react'

const page = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Welcome />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <Footer />
    </div>
  )
}

export default page