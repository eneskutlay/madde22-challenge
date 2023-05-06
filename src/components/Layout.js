import Header from "@/components/Header";
import FliterNav from "@/components/FliterNav";

export default function Layout({ children, fontClassName }) {
  return (
    <div className={fontClassName}>
      <Header />
      <FliterNav />
      <main>{children}</main>
    </div>
  );
}
