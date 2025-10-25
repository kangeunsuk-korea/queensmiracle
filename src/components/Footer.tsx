import { BookOpen, FileText, Youtube, Instagram, Facebook, ShoppingBag, Store } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">퀸즈미라클아틀리에</h3>
            <p className="text-xs text-gray-500 mb-3">Queens Miracle Atelier</p>
            <p className="text-lime-400 mb-2">
              기적은 상상이 아니라 실행이며
            </p>
            <p className="text-emerald-400">
              생각을 현실로 콘텐츠를 세계로
            </p>
          </div>

          <div>
            <h4 className="mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">책 집필 & 출판</a></li>
              <li><a href="#" className="hover:text-white transition-colors">음악 제작</a></li>
              <li><a href="#" className="hover:text-white transition-colors">라이브 방송</a></li>
              <li><a href="#" className="hover:text-white transition-colors">영상 콘텐츠</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">콘텐츠</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">작품 소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">포트폴리오</a></li>
              <li><a href="#" className="hover:text-white transition-colors">최신 소식</a></li>
              <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">채널 & 스토어</h4>
            <div className="space-y-3">
              <a 
                href="https://bookk.co.kr/search?keywords=%EA%B0%95%EC%9D%80%EC%88%99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors"
              >
                <BookOpen size={20} />
                <span>부크크 (출판)</span>
              </a>
              <a 
                href="https://kanges6828.upaper.kr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FileText size={20} />
                <span>유페이퍼</span>
              </a>
              <a 
                href="https://www.youtube.com/@퀸즈미라클TV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
                <span>퀸즈미라클TV</span>
              </a>
              <a 
                href="https://www.instagram.com/queens7miracle?igsh=cWJ4bzcydGlrZzQx&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
                <span>인스타그램</span>
              </a>
              <a 
                href="https://www.facebook.com/share/1BnzZVa1VT/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
                <span>페이스북</span>
              </a>
              <a 
                href="https://shop.coupang.com/queensmiracle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
              >
                <ShoppingBag size={20} />
                <span>쿠팡 스토어</span>
              </a>
              <a 
                href="http://smartstore.naver.com/queensmiracle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors"
              >
                <Store size={20} />
                <span>스마트스토어</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center mb-4">
            <p className="text-gray-400 mb-2">&copy; 2025 퀸즈미라클아틀리에 (Queens Miracle Atelier). All rights reserved.</p>
            <p className="text-sm text-emerald-500 mb-3">기적은 상상이 아니라 실행이며, 생각을 현실로 콘텐츠를 세계로</p>
          </div>
          <div className="text-center text-xs text-gray-500 space-y-1">
            <p>사업자등록번호: 113-34-00577 | 대표: 퀸즈미라클</p>
            <p>통신판매업 · 방문판매업 · 건강기능식품 · 화장품 · 수출입 · 해외구매대행</p>
            <p>전화: <a href="tel:010-5322-5514" className="hover:text-lime-400 transition-colors">010-5322-5514</a> | 이메일: <a href="mailto:queensmiracle68@gmail.com" className="hover:text-emerald-400 transition-colors">queensmiracle68@gmail.com</a></p>
            <p>위치: 경기도 포천시 | 온라인 주문: 쿠팡, 네이버 스마트스토어</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
