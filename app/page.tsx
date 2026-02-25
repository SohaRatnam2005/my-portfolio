export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">
      <h1 className="text-5xl font-bold">Your Name</h1>
      <p className="text-lg mt-2">B.Tech Student | Your College</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>React</li>
          <li>Next.js</li>
          <li>Django</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="ml-6 mt-2">
          <li>AI Wellness Hub</li>
          <li>Portfolio Website</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Blogs</h2>
        <p className="mt-2">Coming soon...</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Reach Me</h2>
        <p className="mt-2">
          LinkedIn | Twitter | GitHub
        </p>
      </section>
    </main>
  );
}
