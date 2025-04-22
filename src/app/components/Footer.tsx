import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">932км</h3>
            <p className="text-secondary/80">
              Уютное место для встреч и отдыха. Мы предлагаем вкусную еду и приятную атмосферу.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-secondary/80">
              <li>г. Москва, ул. Примерная, д. 123</li>
              <li>+7 (123) 456-78-90</li>
              <li>info@cafe932km.ru</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Часы работы</h3>
            <ul className="space-y-2 text-secondary/80">
              <li>Пн-Пт: 10:00 - 22:00</li>
              <li>Сб-Вс: 11:00 - 23:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary/20 mt-8 pt-8 text-center text-secondary/60">
          <p>&copy; {new Date().getFullYear()} Кафе 932км. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}