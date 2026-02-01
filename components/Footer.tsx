export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} IO Red. Todos los derechos reservados.
      </div>
    </footer>
  );
}
