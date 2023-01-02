import React from "react"
import { Link } from "react-router-dom"

function NoFoundPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-red-50 overflow-scroll">
      <div className="text-center">
        <img className=" h-full"
          src="https://media.discordapp.net/attachments/1000292556183183461/1016395361469861918/SAVE_20220905_223936.jpg" />
        <h1 className="text-5xl font-bold text-red-300 my-2">Page not Found</h1>
        <p className="text-3xl text-gray-500 font-mono my-2">Whoops looks like this page dosen't exist</p>
        <Link className="px-4 py-2 bg-indigo-300 rounded-md my-5 text-xl font-mono" to="/">Home</Link>
      </div>
    </div>
  );
}
export default NoFoundPage;