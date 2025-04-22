'use client'

import { motion } from 'framer-motion'

export default function Contacts() {
  return (
    <main className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Контакты</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Как нас найти</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Адрес:</h3>
                <p>932-й километр трассы М-4 "Дон"</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Телефон:</h3>
                <p>+7 (XXX) XXX-XX-XX</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Часы работы:</h3>
                <p>Ежедневно: 08:00 - 22:00</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Email:</h3>
                <p>info@cafe-932km.ru</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Сообщение</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Отправить
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
