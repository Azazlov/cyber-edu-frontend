import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Cyber Edu</h3>
            <p className="text-gray-300">
              Образовательная платформа по кибербезопасности и AI-безопасности для детей.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Учебники</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Видеоуроки</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Интерактивные задания</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: info@cyberedu.example.com</li>
              <li className="text-gray-300">Телефон: +7 (XXX) XXX-XX-XX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cyber Edu. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer