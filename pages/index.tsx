import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MenuMuse | Menu Magic, Made Easy</title>
        <meta name="description" content="Create stunning, professional menus in minutes with MenuMuse." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800 font-sans">
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tight text-indigo-700">MenuMuse</div>
          <div className="space-x-6 hidden md:flex">
            <a href="#features" className="hover:text-indigo-700 transition">Features</a>
            <a href="#templates" className="hover:text-indigo-700 transition">Templates</a>
            <a href="#pricing" className="hover:text-indigo-700 transition">Pricing</a>
            <a href="#login" className="bg-indigo-700 text-white px-5 py-2 rounded-xl hover:bg-indigo-800 transition">Try It Free</a>
          </div>
        </nav>

        <section className="text-center py-32 px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Create Beautiful Menus<br />In Minutes, Not Hours.
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-600 mb-8">
            MenuMuse helps chefs, caterers, and food pros build modern, downloadable menus with zero friction.
          </p>
          <a href="#start" className="inline-block bg-indigo-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:bg-indigo-800 transition">
            Get Started — It’s Free
          </a>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What You Can Do</h2>
            <div className="grid md:grid-cols-3 gap-10 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-2">Start with Templates</h3>
                <p className="text-gray-600">Choose from designer-crafted layouts for weddings, corporate events, or food trucks.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Add Your Dishes</h3>
                <p className="text-gray-600">Input dishes, sections, and descriptions with ease. Live preview included.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Export Instantly</h3>
                <p className="text-gray-600">Download as PDF, generate a QR code, or share a link with your clients.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial" className="py-20 bg-indigo-50">
          <div className="max-w-3xl mx-auto text-center px-6">
            <blockquote className="text-2xl font-light italic text-indigo-800">
              “MenuMuse made my life 100x easier. I had a gorgeous menu ready in 10 minutes.”
            </blockquote>
            <cite className="block mt-4 text-gray-700">— Olivia, Private Chef</cite>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-6">Simple Pricing</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="border p-6 rounded-xl shadow-sm w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
                <p className="text-gray-600 mb-4">Try it out with 3 templates and MenuMuse branding.</p>
                <p className="text-2xl font-bold">$0</p>
              </div>
              <div className="border p-6 rounded-xl shadow-lg w-full md:w-1/2 bg-indigo-700 text-white">
                <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
                <p className="mb-4">Full access, custom branding, and save/share options.</p>
                <p className="text-2xl font-bold">$12/month or $99/year</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-100 text-center py-8 text-sm text-gray-500">
          &copy; 2025 MenuMuse — Menu Magic, Made Easy
        </footer>
      </main>
    </>
  )
}
