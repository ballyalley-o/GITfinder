import React from 'react'
import { Link } from 'react-router-dom'
import { SiGithubactions } from 'react-icons/si'
import astroHelm from "../components/layout/assets/astroHelm.svg";


function About() {
  return (
    <>
      <div>
        <div className="hero top-10 z-40 alert-successz-40 min-h-screen relative">
          <div className="hero-content content-center flex-col lg:flex-row">
            <div>
              <h1 className="text-8xl font-bold">
                <SiGithubactions />
                Github Finder
              </h1>
              <p className="py-6">
                React app to search Github profiles and see profile details,
                repositories and more.
              </p>
              <div className="content-center">
                <Link to="/" className="btn btn-primary">
                  Back to Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container h-64 w-64">
        <div className="bg-cover container w-full opacity-90 z-0 top-1 absolute">
          <img
            src={astroHelm}
            alt="astronaut helmet"
            // crop the image to fit the container
          />
        </div>
      </div>
    </>
  );
}

export default About