import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            <h2>퀸즈미라클아틀리에</h2>
            <p className="text-xs text-gray-500">Queens Miracle Atelier</p>
            <p className="text-xs text-emerald-600 mt-1 hidden lg:block">생각을 현실로, 콘텐츠를 세계로</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-emerald-600 transition-colors"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("shop")}
              className="hover:text-emerald-600 transition-colors"
            >
              쇼핑몰
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-emerald-600 transition-colors"
            >
              소개
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-emerald-600 transition-colors"
            >
              연락처
            </button>
            <Button onClick={() => scrollToSection("contact")}>
              시작하기
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left hover:text-emerald-600 transition-colors"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("shop")}
              className="text-left hover:text-emerald-600 transition-colors"
            >
              쇼핑몰
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:text-emerald-600 transition-colors"
            >
              소개
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:text-emerald-600 transition-colors"
            >
              연락처
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              시작하기
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
