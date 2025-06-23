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
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Build Your Menu</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          {sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-8">
              <input
                className="text-xl font-semibold border-b-2 border-indigo-300 mb-2 w-full outline-none"
                value={section.name}
                onChange={(e) => updateSectionName(sIndex, e.target.value)}
              />
              {section.dishes.map((dish, dIndex) => (
                <input
                  key={dIndex}
                  className="block w-full border p-2 mt-2 rounded-md"
                  placeholder={`Dish ${dIndex + 1}`}
                  value={dish}
                  onChange={(e) => updateDish(sIndex, dIndex, e.target.value)}
                />
              ))}
              <button
                className="text-indigo-700 mt-2 text-sm underline"
                onClick={() => addDish(sIndex)}
              >
                + Add Dish
              </button>
            </div>
          ))}
          <button
            className="mt-4 px-4 py-2 bg-indigo-700 text-white rounded-xl"
            onClick={addSection}
          >
            + Add Section
          </button>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-indigo-700">Menu Preview</h2>
          {sections.map((section, sIndex) => (
            <div key={sIndex} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
              <ul className="list-disc ml-5 text-gray-700">
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
