'use client'

import { motion } from 'framer-motion'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function About() {
  return (
    <main className="pt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          О нас
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Наша история</h2>
            <p className="text-lg mb-4">
              Кафе 932км было основано в 2015 году с простой идеей: создать уютное место для отдыха путешественников на трассе М-4 "Дон". Мы начинали как небольшое придорожное кафе, но благодаря нашему вниманию к качеству и обслуживанию, быстро завоевали любовь постоянных клиентов.
            </p>
            <p className="text-lg">
              Сегодня "932км" - это не просто кафе, а место, где каждый гость может отдохнуть от дороги, насладиться вкусной домашней едой и набраться сил для дальнейшего путешествия.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <ImagePlaceholder text="Фото кафе снаружи" width={600} height={400} className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-lg md:order-2"
          >
            <ImagePlaceholder text="Фото кухни" width={600} height={400} className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:order-1"
          >
            <h2 className="text-2xl font-bold mb-4">Наша кухня</h2>
            <p className="text-lg mb-4">
              В основе нашего меню лежат традиционные русские блюда, приготовленные из свежих местных продуктов. Наши повара постоянно совершенствуют свое мастерство, чтобы радовать гостей не только вкусными, но и красиво оформленными блюдами.
            </p>
            <p className="text-lg">
              Мы уделяем особое внимание качеству ингредиентов и процессу приготовления, чтобы каждое блюдо было не только вкусным, но и полезным.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary/5 rounded-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Качественные продукты</h3>
              <p>Используем только свежие и качественные ингредиенты от проверенных поставщиков</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Быстрое обслуживание</h3>
              <p>Ценим ваше время и стараемся обслуживать быстро и качественно</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Уютная атмосфера</h3>
              <p>Создаем комфортную обстановку для отдыха и приятного времяпрепровождения</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Мы ждем вас!</h2>
          <p className="text-lg mb-8">
            Приглашаем вас посетить наше кафе и насладиться вкусной едой и приятной атмосферой. 
            Мы всегда рады новым гостям и готовы сделать ваш отдых максимально комфортным.
          </p>
        </motion.div>
      </div>
    </main>
  )
}