import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, MessageCircle, Globe, MapPin, ShoppingBag, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">연락하기</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            온라인 쇼핑몰 운영 중 · 방문 상담은 사전 예약 필수
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-lime-600" size={24} />
              </div>
              <CardTitle>전화주문</CardTitle>
              <CardDescription>
                <a 
                  href="tel:010-5322-5514"
                  className="hover:text-lime-600 transition-colors font-semibold"
                >
                  010-5322-5514
                </a>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-emerald-600" size={24} />
              </div>
              <CardTitle>이메일</CardTitle>
              <CardDescription>
                <a 
                  href="mailto:queensmiracle68@gmail.com"
                  className="hover:text-emerald-600 transition-colors"
                >
                  queensmiracle68@gmail.com
                </a>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-emerald-600" size={24} />
              </div>
              <CardTitle>SNS 문의</CardTitle>
              <CardDescription>인스타그램 DM 또는 페이스북 메시지</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-emerald-600" size={24} />
              </div>
              <CardTitle>웹사이트</CardTitle>
              <CardDescription>queensmiracle.com</CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-lime-600" size={24} />
              </div>
              <CardTitle>온라인 주문</CardTitle>
              <CardDescription>쿠팡 · 네이버 스마트스토어</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* 운영 안내 */}
        <div className="max-w-4xl mx-auto mt-12 bg-emerald-50 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-emerald-600" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="mb-2">운영 안내</h3>
              <p className="text-gray-700 mb-4">
                현재 <strong>온라인 쇼핑몰 중심</strong>으로 운영하고 있습니다.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📍 <strong>위치</strong>: 경기도 포천시 (택배 발송 가능)</p>
                <p>📞 <strong>전화주문</strong>: <a href="tel:010-5322-5514" className="text-lime-600 hover:text-lime-700 font-semibold">010-5322-5514</a> (통화 가능 시간에 연락주세요)</p>
                <p>🛍️ <strong>온라인 구매</strong>: 쿠팡, 네이버 스마트스토어</p>
                <p>👥 <strong>방문 상담</strong>: 사전 예약 필수 (전화 또는 이메일)</p>
                <p>✉️ <strong>이메일</strong>: queensmiracle68@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader>
            <CardTitle>문의하기</CardTitle>
            <CardDescription>
              아래 양식을 작성해주시면 빠르게 답변드리겠습니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">이름</label>
                <Input
                  id="name"
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">이메일</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="hong@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">메시지</label>
                <Textarea
                  id="message"
                  placeholder="문의 내용을 입력해주세요"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-lime-400 text-black hover:bg-lime-300">전송하기</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
