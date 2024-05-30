import React, { useEffect } from "react";
import pageNotFoundimage from "../assets/backup.avif";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const PageNotFound = () => {
  useEffect(()=>{
    document.title=`page not found / cinemate`
  })
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center my-4">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-700 font-bold my-10 dark:text-white">
            404, Page Not Found!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={pageNotFoundimage} alt="error image" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link className="text-gray-700 dark:text-white" to="/">
            <Button>Back to home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
