'use client'
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Factory, Sparkles, Zap } from "lucide-react"
import { BrassCarousel } from "@/components/brass-carousel"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import squarebrac from '../public/images/squarebrack.jpeg'
import foldingbrac from '../public/images/foldingbrack.jpeg'
import windowstay from '../public/images/windowstay.jpeg'

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Simplified Carousel */}
      <section className="relative">
        <BrassCarousel />
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-10 leading-tight">
                Ready to Experience
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
                  {" "}
                  Premium Quality
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Discover our complete range of precision-engineered brass window brackets, crafted with decades of
                expertise and uncompromising attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 text-white px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/products">EXPLORE PRODUCTS</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-12 py-4 text-lg font-bold backdrop-blur-xl bg-black/20 shadow-2xl hover:shadow-amber-400/25 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">GET CUSTOM QUOTE</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Modern Features Section */}
      <section className="py-28 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-400/5 to-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-amber-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              WHY CHOOSE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">US?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge technology with traditional craftsmanship to deliver unparalleled quality and
              innovation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10">
            <AnimatedSection delay={100}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-4 cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 overflow-hidden h-full">
                <CardContent className="p-10 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Factory className="h-16 w-16 text-amber-400 mx-auto mb-8 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-6 text-white">ADVANCED MANUFACTURING</h3>
                  <p className="text-gray-400 leading-relaxed">
                    State-of-the-art precision engineering with 10+ years of expertise in brass manufacturing and
                    metalworking excellence.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-4 cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 overflow-hidden h-full">
                <CardContent className="p-10 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Sparkles className="h-16 w-16 text-amber-400 mx-auto mb-8 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-6 text-white">PREMIUM FINISHING</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Meticulous polishing, precision shaping, and premium finishing processes that set the industry
                    standard.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-4 cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 overflow-hidden h-full">
                <CardContent className="p-10 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Zap className="h-16 w-16 text-amber-400 mx-auto mb-8 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-6 text-white">CUSTOM SOLUTIONS</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Bespoke manufacturing solutions tailored to your exact specifications and architectural
                    requirements.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Modern Products Preview */}
      <section className="py-28 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              FEATURED{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
                PRODUCTS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most innovative and popular brass window brackets
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <AnimatedSection delay={100}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={squarebrac}
                      alt="Classic Brass Bracket"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-bold text-xl mb-2 text-white">CLASSIC SERIES</h3>
                      <p className="text-amber-400 font-black text-2xl">₹125</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={foldingbrac}
                      alt="Decorative Brass Bracket"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-bold text-xl mb-2 text-white">LUXURY SERIES</h3>
                      <p className="text-amber-400 font-black text-2xl">₹125</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={windowstay}
                      alt="Heavy Duty Brass Bracket"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-bold text-xl mb-2 text-white">INDUSTRIAL SERIES</h3>
                      <p className="text-amber-400 font-black text-2xl">₹135</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center" delay={400}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 text-white px-12 py-4 text-lg font-bold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/products">VIEW ALL PRODUCTS</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Modern Contact CTA */}
      <section className="py-28 bg-gradient-to-r from-amber-600 via-amber-500 to-blue-500 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-black/10 rounded-full animate-spin-slow" />
          <div className="absolute top-32 right-20 w-24 h-24 border-2 border-black/10 rounded-full animate-pulse" />
          <div className="absolute bottom-20 left-32 w-16 h-16 border-2 border-black/10 rounded-full animate-bounce" />
          <div className="absolute bottom-32 right-16 w-40 h-40 border-2 border-black/5 rounded-full animate-spin-slow" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-black tracking-tight">READY TO START?</h2>
            <p className="text-xl lg:text-2xl mb-16 text-black/80 font-medium max-w-4xl mx-auto">
              Contact us today for a quote or to discuss your custom bracket requirements.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <div className="flex items-center gap-4 bg-black/10 backdrop-blur-xl px-8 py-5 rounded-2xl border border-black/20">
                <Phone className="h-6 w-6 text-black" />
                <span className="text-xl font-bold text-black">+91 98258 61693</span>
              </div>
              <div className="flex items-center gap-4 bg-black/10 backdrop-blur-xl px-8 py-5 rounded-2xl border border-black/20">
                <Mail className="h-6 w-6 text-black" />
                <span className="text-xl font-bold text-black">jeelramoliya@gmail.com</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <Button
              variant="outline"
              size="lg"
              className="bg-black text-amber-400 hover:bg-gray-900 border-2 border-black px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-black/25 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">CONTACT US NOW</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
