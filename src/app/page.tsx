import Hero from "./components/Hero";
import Movies from "./components/Movies";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-8rem)] px-4 text-slate-700 bg-slate-300 dark:bg-slate-800 dark:text-white">
      <Hero />
      <Movies />
    </main>
  );
}
