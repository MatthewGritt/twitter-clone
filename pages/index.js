import Head from "next/head";
import Feed from "../components/Feed";
import Nav from "../components/Nav";
import News from "../components/News";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex md:max-w-[783px] lg:max-w-[1075px] xl:max-w-[1235px] mx-auto ">
        <Nav />
        <Feed />
        <News />
      </div>
    </div>
  );
}
