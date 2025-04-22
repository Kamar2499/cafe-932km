'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  nutrition: {
    proteins: number
    fats: number
    carbs: number
    calories: number
  }
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Английский завтрак",
    description: "Яичница, бекон, сосиски, фасоль, грибы, помидоры, тосты",
    price: 890,
    image: "/menu/breakfast.jpg",
    category: "Завтраки",
    nutrition: {
      proteins: 25.5,
      fats: 20.2,
      carbs: 30.4,
      calories: 420
    }
  },
  {
    id: 2,
    name: "Омлет с овощами",
    description: "Омлет с болгарским перцем, помидорами и зеленью",
    price: 590,
    image: "/menu/omelette.jpg",
    category: "Завтраки",
    nutrition: {
      proteins: 18.2,
      fats: 12.4,
      carbs: 6.7,
      calories: 220
    }
  },
  {
    id: 3,
    name: "Стейк Рибай",
    description: "Стейк из говядины с картофельным пюре и овощами",
    price: 1890,
    image: "/menu/steak.jpg",
    category: "Основные блюда",
    nutrition: {
      proteins: 35.5,
      fats: 25.2,
      carbs: 20.4,
      calories: 520
    }
  },
  {
    id: 4,
    name: "Паста Карбонара",
    description: "Спагетти с беконом, яйцом и пармезаном",
    price: 790,
    image: "/menu/pasta.jpg",
    category: "Основные блюда",
    nutrition: {
      proteins: 20.2,
      fats: 18.4,
      carbs: 40.3,
      calories: 450
    }
  },
  {
    id: 5,
    name: "Тирамису",
    description: "Классический итальянский десерт",
    price: 490,
    image: "/menu/tiramisu.jpg",
    category: "Десерты",
    nutrition: {
      proteins: 10.2,
      fats: 15.4,
      carbs: 30.7,
      calories: 320
    }
  },
  {
    id: 6,
    name: "Чизкейк",
    description: "Десерт из творожного сыра на песочной основе",
    price: 490,
    image: "/menu/cheesecake.jpg",
    category: "Десерты",
    nutrition: {
      proteins: 12.2,
      fats: 18.4,
      carbs: 35.7,
      calories: 380
    }
  },
  {
    id: 7,
    name: "Капучино",
    description: "Классический капучино с молочной пенкой",
    price: 180,
    image: "/menu/cappuccino.jpg",
    category: "Напитки",
    nutrition: {
      proteins: 3.8,
      fats: 3.2,
      carbs: 6.1,
      calories: 68
    }
  },
  {
    id: 8,
    name: "Свежевыжатый апельсиновый сок",
    description: "100% натуральный апельсиновый сок",
    price: 220,
    image: "/menu/orange-juice.jpg",
    category: "Напитки",
    nutrition: {
      proteins: 0.7,
      fats: 0.2,
      carbs: 10.4,
      calories: 45
    }
  }
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Все")
  const categories = ["Все", ...new Set(menuItems.map(item => item.category))]

  const filteredItems = selectedCategory === "Все"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <main className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Наше меню</h1>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-lg font-semibold text-primary">
                    {item.price} ₽
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold mb-2">Пищевая ценность на 100г:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Белки: {item.nutrition.proteins}г</div>
                    <div>Жиры: {item.nutrition.fats}г</div>
                    <div>Углеводы: {item.nutrition.carbs}г</div>
                    <div>Калории: {item.nutrition.calories} ккал</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}