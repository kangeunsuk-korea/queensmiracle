import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingBag, Store, ExternalLink, Package } from "lucide-react";

export function Shop() {
  const categories = [
    {
      title: "건강기능식품",
      description: "건강한 라이프스타일을 위한 프리미엄 건강기능식품",
      image: "https://images.unsplash.com/photo-1683394541762-f96c0d03dc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBzdXBwbGVtZW50cyUyMHZpdGFtaW5zfGVufDF8fHx8MTc2MTMxOTc2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "건강",
      tags: ["비타민", "영양제", "건강관리"]
    },
    {
      title: "화장품",
      description: "피부 본연의 아름다움을 찾아주는 프리미엄 화장품",
      image: "https://images.unsplash.com/photo-1748543668676-ea8241cb3886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb3NtZXRpY3MlMjBza2luY2FyZXxlbnwxfHx8fDE3NjEyOTQyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "뷰티",
      tags: ["스킨케어", "메이크업", "안티에이징"]
    },
    {
      title: "패션 & 속옷",
      description: "편안함과 스타일을 모두 갖춘 프리미엄 언더웨어",
      image: "https://images.unsplash.com/photo-1568386396136-0d8ac51c8959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3NjEyMjM2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "패션",
      tags: ["속옷", "이너웨어", "데일리웨어"]
    },
    {
      title: "해외구매대행",
      description: "전 세계 우수 제품을 합리적인 가격으로 직접 구매",
      image: "https://images.unsplash.com/photo-1592839930500-3445eb72b8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMHBhY2thZ2VzfGVufDF8fHx8MTc2MTMxNzcwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      badge: "글로벌",
      tags: ["수입", "대행", "해외직구"]
    }
  ];

  const stores = [
    {
      name: "쿠팡 스토어",
      icon: ShoppingBag,
      url: "https://shop.coupang.com/queensmiracle",
      color: "orange"
    },
    {
      name: "네이버 스마트스토어",
      icon: Store,
      url: "http://smartstore.naver.com/queensmiracle",
      color: "green"
    }
  ];

  return (
    <section id="shop" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">퀸즈미라클 샵</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            건강하고 아름다운 라이프스타일을 위한 프리미엄 상품
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <Badge variant="outline" className="px-4 py-2 bg-emerald-50 border-emerald-300">
              <Package className="w-4 h-4 mr-2 text-emerald-600" />
              <span className="text-emerald-700">통신판매업 정식 등록</span>
            </Badge>
            <Badge variant="outline" className="px-4 py-2 bg-lime-50 border-lime-300">
              <span className="text-lime-700">사업자번호: 113-34-00577</span>
            </Badge>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            📞 전화주문: <a href="tel:010-5322-5514" className="text-emerald-600 hover:text-emerald-700 font-semibold">010-5322-5514</a>
          </p>
        </div>

        {/* 제품 카테고리 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-emerald-600">
                  {category.badge}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 스토어 링크 */}
        <div className="bg-gradient-to-r from-emerald-50 to-lime-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="mb-3">공식 온라인 스토어</h3>
            <p className="text-gray-600">
              다양한 상품을 안전하고 편리하게 구매하실 수 있습니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {stores.map((store, index) => {
              const Icon = store.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-full bg-${store.color}-100 flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`text-${store.color}-600`} size={32} />
                    </div>
                    <CardTitle>{store.name}</CardTitle>
                    <CardDescription>
                      퀸즈미라클의 다양한 제품을 만나보세요
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      asChild 
                      className="w-full bg-lime-400 text-black hover:bg-lime-300"
                    >
                      <a 
                        href={store.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        스토어 방문하기
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* 사업자 정보 */}
          <div className="text-center mt-8 pt-8 border-t border-emerald-200">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">퀸즈미라클</span> | 사업자등록번호: 113-34-00577
            </p>
            <p className="text-xs text-gray-500">
              통신판매업 · 방문판매업 · 건강기능식품 · 화장품 · 수출입 · 해외구매대행
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
