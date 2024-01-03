import About from './components/about';
import Blog from './components/blog';
import Intro from './components/intro';
import Skills from './components/skills';

export default function HomePage() {
  return (
    <main>
      <Intro />
      <Blog />
      <About />
      <Skills />
    </main>
  );
}
