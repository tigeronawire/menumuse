import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MenuMuse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-4 py-8 font-sans">
        <header className="flex justify-between items-center mb-8">
          <div className="text-2xl font-bold">MenuMuse</div>
          <nav className="space-x-4">
            <a href="#how">How it Works</a>
            <a href="#templates">Templates</a>
            <a href="#pricing">Pricing</a>
            <button className="bg-black text-white px-4 py-2 rounded">Try It Free</button>
          </nav>
        </header>

        <section id="hero" className="text-center my-16">
          <h1 className="text-4xl font-bold mb-4">Create Stunning Menus in Minutes</h1>
          <p className="text-lg mb-6">The fastest way for chefs and caterers to build beautiful, downloadable menus with zero friction.</p>
          <button className="bg-black text-white px-6 py-3 rounded text-lg">Get Started</button>
          <div className="text-sm mt-2">No sign-up required</div>
        </section>

        <footer className="text-center mt-20 text-sm text-gray-500">
          &copy; 2025 MenuMuse | Menu Magic, Made Easy
        </footer>
      </main>
    </>
  )
}
