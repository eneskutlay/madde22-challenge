import "@/styles/globals.css";
import localFont from "next/font/local";

const galano = localFont({
  src: [
    {
      path: '../../public/galano-font/GalanoGrotesqueRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/galano-font/GalanoGrotesqueExtraBold.otf',
      weight: '700',
      style: 'extra-bold',
    },
    {
      path: '../../public/galano-font/GalanoGrotesqueBold.otf',
      weight: '400',
      style: 'bold',
    },
    {
      path: '../../public/galano-font/GalanoGrotesqueMedium.otf',
      weight: '400',
      style: 'medium',
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


