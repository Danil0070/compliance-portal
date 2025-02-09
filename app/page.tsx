"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Навигация */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur-md z-50"
      >
        <div className="text-2xl font-bold">CompliancePortal</div>
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="hover:text-blue-400 transition-colors">
            Проверка
          </Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">
            Аналитика
          </Link>
          <Link href="#" className="hover:text-blue-400 transition-colors">
            API
          </Link>
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Начать
        </button>
      </motion.nav>

      {/* Герой-секция */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Будущее Комплаенса <br /> уже здесь
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-400 mt-4"
        >
          Искусственный интеллект для анализа рисков и прозрачности бизнеса.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-6 flex space-x-4"
        >
          <input
            className="px-4 py-3 rounded-lg text-black w-64"
            placeholder="Введите БИН компании"
          />
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Проверить
          </button>
        </motion.div>
      </section>
   {/* Возможности платформы */}
<section className="py-24 bg-black text-white">
  <div className="max-w-7xl mx-auto px-8 text-center">
    <h2 className="text-4xl font-extrabold mb-8">Наши возможности</h2>
    <p className="text-lg text-gray-400 mb-12">
      Полный контроль над рисками с помощью передовых технологий.
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: "Мгновенная проверка", desc: "Автоматический анализ контрагента по всем доступным базам.", icon: "🔍" },
        { title: "Анализ связей", desc: "Раскрытие конечных бенефициаров и выявление аффилированности.", icon: "🔗" },
        { title: "Мониторинг", desc: "Оповещения о рисках и автоматическое отслеживание изменений.", icon: "⚡" }
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: false, amount: 0.5 }} // Учет скролла
          className="p-8 bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <div className="text-5xl">{feature.icon}</div>
          <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
          <p className="text-gray-400 mt-2">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  {/* Статистика */}
<section className="py-24 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-8 text-center">
    <h2 className="text-4xl font-extrabold mb-8">Цифры говорят сами за себя</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
      {[
        { number: "1M+", label: "Проверок контрагентов" },
        { number: "50K+", label: "Компаний в базе" },
        { number: "99.9%", label: "Точность анализа" },
        { number: "24/7", label: "Поддержка" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="p-6 bg-black rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          <h3 className="text-5xl font-bold text-blue-400">{stat.number}</h3>
          <p className="text-gray-400 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}