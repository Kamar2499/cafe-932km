import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <main className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Свяжитесь с нами</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-lg">г. Москва, ул. Примерная, д. 123</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-lg">+7 (123) 456-78-90</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-lg">info@cafe932km.ru</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Часы работы</h3>
                <p className="text-lg">Пн-Пт: 10:00 - 22:00</p>
                <p className="text-lg">Сб-Вс: 11:00 - 23:00</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Отправить
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Как добраться</h2>
          <div className="aspect-w-16 aspect-h-9">
            {/* Здесь будет карта */}
            <div className="w-full h-96 bg-gray-200 rounded-lg">
              {/* Замените этот div на компонент карты */}
              <p className="text-center py-40">Карта будет здесь</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 