import React from 'react'
import { Link } from 'react-router-dom'
import { SiGithubactions } from 'react-icons/si'
import astroHelm from "../components/layout/assets/astroHelm.svg";


function About() {
  return (
    <>
      <div>
        <div className="hero min-h-screen z-50">
          <div className="hero-content absolute content-center flex-col lg:flex-row z-20">
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
      <div className="bg container w-full min-h-screen h-100 top-10 absolute z-1">
        <img src={astroHelm} />
      </div>
    </>
  );
}

export default About