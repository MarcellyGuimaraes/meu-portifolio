import { useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrolled, scrollTo }) => {
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') handleMenuClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-red-900/30 py-4'
          : 'bg-transparent py-6'
      }`}
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        <button 
          className="text-2xl font-bold tracking-tighter cursor-pointer group focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded"
          onClick={() => scrollTo('home')}
          aria-label="Ir para o início da página"
        >
          <span className="text-white group-hover:text-red-500 transition-colors">M</span>
          <span className="text-red-600">.</span>
          <span className="text-white group-hover:text-red-500 transition-colors">G</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center" role="menubar">
          {['Sobre', 'Habilidades', 'Projetos', 'Experiência', 'Serviços'].map((item) => {
             const id = item.toLowerCase() === 'sobre' ? 'about' : item.toLowerCase() === 'habilidades' ? 'skills' : item.toLowerCase() === 'projetos' ? 'projects' : item.toLowerCase() === 'experiência' ? 'experience' : 'services';
             return (
              <button 
                key={item}
                onClick={() => scrollTo(id)}
                role="menuitem"
                aria-current={activeSection === id ? 'page' : undefined}
                className={`text-sm font-medium uppercase tracking-widest hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded px-2 py-1 ${activeSection === id ? 'text-red-500' : 'text-neutral-400'}`}
              >
                {item}
              </button>
             )
          })}
          <button 
            onClick={() => scrollTo('contact')}
            role="menuitem"
            aria-current={activeSection === 'contact' ? 'page' : undefined}
            className="px-5 py-2 border border-red-600 text-red-500 rounded text-sm font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.1)] hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Contato
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded p-2" 
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-neutral-950 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        } px-6 pt-6 overflow-y-auto`}
        role="menu"
        aria-hidden={!isMenuOpen}
        onClick={handleMenuClose}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between">
            <button
              className="text-2xl font-bold tracking-tighter cursor-pointer group focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded"
              onClick={() => {
                scrollTo('home');
                handleMenuClose();
              }}
              aria-label="Ir para o início da página"
            >
              <span className="text-white group-hover:text-red-500 transition-colors">M</span>
              <span className="text-red-600">.</span>
              <span className="text-white group-hover:text-red-500 transition-colors">G</span>
            </button>

            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded p-2"
              onClick={handleMenuClose}
              aria-label="Fechar menu"
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 mt-10">
          {['Home', 'Sobre', 'Habilidades', 'Projetos', 'Experiência', 'Serviços', 'Contato'].map((item) => {
             const id = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'sobre' ? 'about' : item.toLowerCase() === 'habilidades' ? 'skills' : item.toLowerCase() === 'projetos' ? 'projects' : item.toLowerCase() === 'experiência' ? 'experience' : item.toLowerCase() === 'serviços' ? 'services' : 'contact';
             return (
              <button 
                key={item}
                onClick={() => {
                  scrollTo(id);
                  handleMenuClose();
                }}
                role="menuitem"
                aria-current={activeSection === id ? 'page' : undefined}
                className="text-2xl font-bold text-white hover:text-red-500 text-left border-b border-neutral-800 pb-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded"
              >
                {item}
              </button>
             )
          })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
