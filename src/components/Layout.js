import Header from "@/components/Header";

export default function Layout({ children, fontClassName }) {
  return (
    <div className={fontClassName}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
