import { Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrolled, scrollTo }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/95 backdrop-blur-md border-b border-red-900/30 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer group"
          onClick={() => scrollTo('home')}
        >
          <span className="text-white group-hover:text-red-500 transition-colors">M</span>
          <span className="text-red-600">.</span>
          <span className="text-white group-hover:text-red-500 transition-colors">G</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {['Sobre', 'Habilidades', 'Projetos', 'Experiência'].map((item) => {
             const id = item.toLowerCase() === 'sobre' ? 'about' : item.toLowerCase() === 'habilidades' ? 'skills' : item.toLowerCase() === 'projetos' ? 'projects' : 'experience';
             return (
              <button 
                key={item}
                onClick={() => scrollTo(id)}
                className={`text-sm font-medium uppercase tracking-widest hover:text-red-500 transition-colors ${activeSection === id ? 'text-red-500' : 'text-neutral-400'}`}
              >
                {item}
              </button>
             )
          })}
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 border border-red-600 text-red-500 rounded text-sm font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.1)] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            Contato
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-neutral-950 z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6`}>
         <div className="flex flex-col space-y-6">
          {['Home', 'Sobre', 'Habilidades', 'Projetos', 'Experiência', 'Contato'].map((item) => {
             const id = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'sobre' ? 'about' : item.toLowerCase() === 'habilidades' ? 'skills' : item.toLowerCase() === 'projetos' ? 'projects' : item.toLowerCase() === 'experiência' ? 'experience' : 'contact';
             return (
              <button 
                key={item}
                onClick={() => scrollTo(id)}
                className="text-2xl font-bold text-white hover:text-red-500 text-left border-b border-neutral-800 pb-4"
              >
                {item}
              </button>
             )
          })}
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
