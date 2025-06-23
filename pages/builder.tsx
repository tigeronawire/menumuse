import { useState } from 'react'

export default function Builder() {
  const [sections, setSections] = useState([
    { name: 'Starters', dishes: [''] }
  ])

  const updateSectionName = (index: number, name: string) => {
    const updated = [...sections]
    updated[index].name = name
    setSections(updated)
  }

  const updateDish = (sectionIndex: number, dishIndex: number, value: string) => {
    const updated = [...sections]
    updated[sectionIndex].dishes[dishIndex] = value
    setSections(updated)
  }

  const addDish = (sectionIndex: number) => {
    const updated = [...sections]
    updated[sectionIndex].dishes.push('')
    setSections(updated)
  }

  const addSection = () => {
    setSections([...sections, { name: 'New Section', dishes: [''] }])
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-800 p-6 font-sans">
      <h1 className="text-4xl font-bold mb-10 text-center tracking-tight text-indigo-700">Build Your Menu</h1>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          {sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-10 border-b pb-6">
              <input
                className="text-2xl font-serif font-semibold border-b-2 border-indigo-400 mb-4 w-full outline-none placeholder-gray-400"
                value={section.name}
                onChange={(e) => updateSectionName(sIndex, e.target.value)}
                placeholder="Section Name (e.g. Starters)"
              />
              {section.dishes.map((dish, dIndex) => (
                <input
                  key={dIndex}
                  className="block w-full border border-gray-300 p-3 mt-2 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-300 outline-none"
                  placeholder={`Dish ${dIndex + 1}`}
                  value={dish}
                  onChange={(e) => updateDish(sIndex, dIndex, e.target.value)}
                />
              ))}
              <button
                className="text-indigo-600 mt-3 text-sm underline hover:text-indigo-800 transition"
                onClick={() => addDish(sIndex)}
              >
                + Add Dish
              </button>
            </div>
          ))}
          <button
            className="mt-6 px-6 py-3 bg-indigo-700 text-white rounded-full hover:bg-indigo-800 transition shadow-lg"
            onClick={addSection}
          >
            + Add Section
          </button>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl border">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Live Menu Preview</h2>
          {sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-6">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 border-b pb-1">{section.name}</h3>
              <ul className="space-y-1 pl-4 text-gray-700 list-disc">
                {section.dishes
                  .filter((dish) => dish.trim() !== '')
                  .map((dish, dIndex) => (
                    <li key={dIndex}>{dish}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
