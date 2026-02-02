export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="font-bold text-lg">IO Red</span>

        <nav className="space-x-6 text-sm">
          <a href="#services" className="hover:underline">
            Servicios
          </a>

          <a
            href="https://wa.me/5492657659689"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
