import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "책 집필 및 출판 지원 (부크크, 유페이퍼)",
    "음악/노래 제작 및 유튜브 방송",
    "온라인 쇼핑몰 운영 (건강식품, 화장품, 패션)",
    "해외구매대행 및 수출입 서비스"
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758613655205-d9bcdba2404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbnRlbnQlMjBzdHVkaW98ZW58MXx8fHwxNzYxMjAxNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Creative content studio"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-4">퀸즈미라클아틀리에</h2>
              <p className="text-sm text-emerald-600 mb-6">Queens Miracle Atelier</p>
            </div>
            
            <p className="text-lg text-gray-600">
              퀸즈미라클아틀리에는 <strong className="text-emerald-700">창작자의 꿈을 현실로 만드는 크리에이티브 아틀리에</strong>입니다. 
              책 집필, 음악 제작, 라이브 방송 등 다양한 콘텐츠 제작을 통해 
              여러분의 이야기를 세계와 공유합니다.
            </p>
            
            <p className="text-lg text-gray-600">
              <strong className="text-lime-600">"기적은 상상이 아니라 실행"</strong>이라는 믿음으로, 
              작은 아이디어도 소중히 여기며 완성도 높은 콘텐츠로 발전시켜 
              더 많은 사람들에게 전달하는 것이 우리의 사명입니다.
            </p>

            <div className="bg-emerald-50 rounded-lg p-6 my-6">
              <p className="text-gray-700 leading-relaxed">
                건강기능식품, 화장품, 패션 등 프리미엄 상품을 통해 고객의 건강하고 아름다운 라이프스타일을 응원하며, 
                쿠팡과 네이버 스마트스토어를 통해 전국 어디서나 편리하게 만나보실 수 있습니다.
              </p>
            </div>

            <div className="space-y-3 mt-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={24} />
                  <span className="text-lg">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                사업자등록번호: 113-34-00577 | 통신판매업·방문판매업 등록
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
