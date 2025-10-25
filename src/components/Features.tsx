import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, Music, Radio, Globe, Sparkles, Video } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "책 집필 & 출판",
      description: "당신의 이야기를 책으로 만들어 세상에 전합니다. 기획부터 출판까지 함께합니다."
    },
    {
      icon: Music,
      title: "음악 제작",
      description: "작곡, 편곡, 레코딩까지 완성도 높은 음악 콘텐츠를 제작합니다."
    },
    {
      icon: Radio,
      title: "라이브 방송",
      description: "실시간 스트리밍을 통해 시청자와 소통하고 팬덤을 구축합니다."
    },
    {
      icon: Video,
      title: "영상 콘텐츠",
      description: "유튜브, SNS용 영상 기획과 제작으로 영향력을 확장합니다."
    },
    {
      icon: Sparkles,
      title: "크리에이티브 컨설팅",
      description: "콘텐츠 기획과 전략 수립으로 창작 방향성을 제시합니다."
    },
    {
      icon: Globe,
      title: "글로벌 배포",
      description: "다양한 플랫폼을 통해 전 세계 관객에게 콘텐츠를 전달합니다."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">우리의 서비스</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-3">
            창작자의 꿈을 실현하는 다양한 콘텐츠 제작 서비스
          </p>
          <p className="text-emerald-600">
            "기적은 상상이 아니라 실행이며, 생각을 현실로 콘텐츠를 세계로"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                    <Icon className="text-emerald-600" size={24} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
