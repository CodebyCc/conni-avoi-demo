import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conni-Avoi</title>
        <meta name="description" content="Ghana's Leader in Leather Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  );
}
