import "@/styles/globals.css";
import localFont from "next/font/local";
import Layout from "@/components/Layout";

const galano = localFont({
  src: [
    {
      path: "../../public/galano-font/GalanoGrotesqueRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/galano-font/GalanoGrotesqueBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={galano.className} fontClassName={galano.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
