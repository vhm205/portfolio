import Head from "next/head";
import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Message from "../components/Message";

function Page() {
  return (
    <>
      <Head>
        <title>VHM Tech</title>
      </Head>

      <Layout>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Message />
      </Layout>
    </>
  );
}

export default Page;
