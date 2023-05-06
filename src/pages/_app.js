import "@/styles/globals.css";
import localFont from "next/font/local";

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
    <main className={galano.className}>
      <Component {...pageProps} />
    </main>
  );
}
