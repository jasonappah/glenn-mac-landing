import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Grizzly from "../components/Grizzly";
import PatternBg from "../components/Pattern";

export default function Home() {
  const classes = ["bg-glennOrange", "bg-glennNavy"];
  const [bgColor, setBgColor] = useState({ class: classes[0], index: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      const index = (bgColor.index + 1) % classes.length;
      setBgColor({ class: classes[index], index });
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <Head>
        <title>Destiny Landing</title>
      </Head>

      <div
        className={`transition-colors duration-1000 ${bgColor.class} min-h-min h-screen font-dm flex flex-col text-white text-2xl justify-center content-center items-center text-center`}
      >
        <PatternBg />
        <main className="flex flex-col justify-center content-center items-center lg:w-3/5 md:w-2/3 mx-10">
          <h1 className="font-bold text-6xl my-2.5">Welcome to the MAC!</h1>
          <h2 className="opacity-80">
            Click the{" "}
            <a
              className="underline"
              href="https://leanderisd.follettdestiny.com/common/servlet/presentloginform.do?fromLoginLink=true"
            >
              login
            </a>{" "}
            button in the upper right corner and log in with your school login
            credentials to renew books and more.
          </h2>
          <h3>
            <a
              className="underline"
              href="mailto:liliana.alonzo@leanderisd.org"
            >
              Email Mrs. Alonzo
            </a>{" "}
            |{" "}
            <a className="underline" href="mailto:tera.sheppard@leanderisd.org">
              Email Mrs. Sheppard
            </a>
          </h3>
        </main>
        {/* I swear there is a proper way to do this with flexbox but I wasn't able to figure it out... i've tried self-end, justify-self-end, and place-self-end to no avail. this works tho so issok */}
        <footer className="absolute bottom-0 my-4 text-xl">
          <Grizzly className="text-glennOrange" />
        </footer>
      </div>
    </>
  );
}
