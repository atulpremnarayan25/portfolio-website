export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#05070b]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/40 font-light">
          © 2026 Atul Prem Narayan. <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          Built with curiosity + code.
        </p>
        <div className="flex items-center gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}