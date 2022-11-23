import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
import { BiGitCommit } from "react-icons/bi";


function Home() {
  return (
    <>
    {/* <div className="w-full h-full" style={{backgroundImage: `url(https://img.freepik.com/free-vector/gradient-grainy-gradient-texture_79603-1642.jpg?w=1800&t=st=1669196340~exp=1669196940~hmac=360aa9ef8f1bfaaf072b02826df6d96de583d1540244e7c65b3a77a3f9eff854)`}}></div> */}
      <div className="hero-content flex-col lg:flex-row-reverse top-60">
        <h1 className="text-9xl font-bold static h-60 pr-10">
          {" "}
          LET'S SEE
           y🚀ur GIT!{" "}
        </h1>
      </div>
      <div className="content-around">
        <UserSearch />
        <UserResults />
      </div>

    </>
  );}

export default Home