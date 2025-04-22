'use client'

import Link from 'next/link'
import Image from 'next/image'
import AnimatedSection from './components/AnimatedSection'
import AnimatedHero from './components/AnimatedHero'

export default function Home() {
  const menuCategories = [
    {
      title: 'Горячие блюда',
      description: 'Насладитесь нашими фирменными горячими блюдами, приготовленными с любовью.',
      link: '/menu#hot-dishes',
      image: '/menu/hot-dishes.jpg'
    },
    {
      title: 'Напитки',
      description: 'Широкий выбор освежающих напитков и ароматного кофе.',
      link: '/menu#drinks',
      image: '/menu/drinks.jpg'
    },
    {
      title: 'Десерты',
      description: 'Вкуснейшие десерты, приготовленные нашими кондитерами.',
      link: '/menu#desserts',
      image: '/menu/desserts.jpg'
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <div className="w-full min-h-screen flex items-center justify-center relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/hero-bg.jpg"
            alt="Фото интерьера кафе"
            width={1920}
            height={1080}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <AnimatedHero>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Кафе 932км
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Уютное место для отдыха на трассе М-4 "Дон"
            </p>
            <Link 
              href="/menu" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Смотреть меню
            </Link>
          </AnimatedHero>
        </div>
      </div>

      {/* Menu Categories Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">
              Наше меню
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <AnimatedSection key={category.title} delay={index * 0.2}>
                <Link href={category.link} className="block group">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] relative">
                    <div className="relative h-48">
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <span className="text-primary font-semibold">
                        Подробнее →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">О нашем кафе</h2>
              <p className="text-lg text-gray-600 mb-8">
                Кафе 932км - это уютное место для отдыха на трассе М-4 "Дон", где вы можете насладиться вкусной домашней едой и освежающими напитками. Мы готовим с любовью и заботой о каждом госте.
              </p>
              <Link 
                href="/about" 
                className="text-primary hover:text-primary/90 font-semibold inline-flex items-center transition-colors"
              >
                Узнать больше →
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/interior.jpg"
                  alt="Фото интерьера кафе"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Мы ждем вас!</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Приезжайте к нам отдохнуть и перекусить. Мы находимся на 932-м километре трассы М-4 "Дон".
            </p>
            <Link 
              href="/contacts" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold inline-block transition-colors"
            >
              Как нас найти
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
