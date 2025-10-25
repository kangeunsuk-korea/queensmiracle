import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625645841510-c32e9a68bf5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwcmVjb3JkaW5nJTIwbWljcm9waG9uZXxlbnwxfHx8fDE3NjExNDg2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Content creation studio"
          className="w-full h-full object-cover object-left"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-cyan-300 leading-tight">
            <span className="block mb-4">작은 꿈을 현실로 성장시키고</span>
            <span className="block">콘텐츠화하여 세계로</span>
          </h1>
          
          {/* Slogan */}
          <div className="py-6 border-t border-b border-lime-400/50">
            <p className="text-2xl md:text-4xl text-lime-400 tracking-wide">
              기적은 상상이 아니라 실행이며
            </p>
            <p className="text-2xl md:text-4xl text-emerald-300 tracking-wide mt-2">
              생각을 현실로 콘텐츠를 세계로
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-6 bg-lime-400 text-black hover:bg-lime-300 border-0 shadow-lg shadow-lime-400/50 hover:shadow-xl hover:shadow-lime-400/60 transition-all">
              무료 상담 신청
              <ArrowRight className="ml-2" size={24} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-emerald-500/20 text-white border-emerald-400 hover:bg-emerald-500/30 backdrop-blur-sm"
              onClick={() => {
                const element = document.getElementById("shop");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              쇼핑몰 둘러보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
