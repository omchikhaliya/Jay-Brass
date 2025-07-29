"use client"
import type React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Users, Award, Clock, Zap, Shield, Target, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import img1 from "../../public/images/c2.jpg"
import img2 from "../../public/images/c4.jpg"
import img3 from "../../public/images/c5.jpg"
import jeel from '../../public/images/jeel.jpg'
import md from '../../public/images/md.jpeg'

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section with Dynamic Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-amber-400/20 rounded-full animate-spin-slow" />
          <div className="absolute top-32 right-32 w-2 h-32 bg-gradient-to-b from-amber-400/40 to-transparent animate-pulse" />
          <div
            className="absolute bottom-32 left-32 w-2 h-24 bg-gradient-to-t from-blue-400/40 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              CRAFTING{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
                EXCELLENCE
              </span>
              <br />
              SINCE 1985
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Where traditional craftsmanship meets cutting-edge innovation to create the world's finest brass window
              brackets
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center group">
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <p className="text-gray-400 font-bold tracking-wider">YEARS OF EXPERTISE</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center group">
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <p className="text-gray-400 font-bold tracking-wider">BRACKETS CRAFTED</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="text-center group">
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <p className="text-gray-400 font-bold tracking-wider">QUALITY RATING</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="text-center group">
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  24H
                </div>
                <p className="text-gray-400 font-bold tracking-wider">RESPONSE TIME</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Story - Timeline Style */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">JOURNEY</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">From humble beginnings to industry leadership</p>
          </AnimatedSection>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-blue-400 opacity-30" />

            {/* Mobile Timeline Line */}
            <div className="lg:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-blue-400 opacity-30" />

            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">
              <AnimatedSection delay={100}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Content - Desktop Right, Mobile Below */}
                  <div className="lg:text-right order-2 lg:order-1">
                    <div className="inline-block bg-gradient-to-r from-amber-500 to-blue-500 text-black px-4 py-2 lg:px-6 lg:py-2 rounded-full font-bold mb-4 lg:mb-6 text-sm lg:text-base">
                      1985
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">The Beginning</h3>
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                      Founded by master craftsman with 40+ years of metalworking experience. Started in a small workshop
                      with a vision to create the finest brass brackets in the industry.
                    </p>
                  </div>

                  {/* Image - Desktop Left, Mobile Top */}
                  <div className="relative order-1 lg:order-2">
                    {/* Desktop Timeline Dot */}
                    {/* <div className="hidden lg:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Factory className="h-8 w-8 text-black" />
                    </div> */}

                    {/* Mobile Timeline Dot */}
                    {/* <div className="lg:hidden absolute -left-12 top-8 w-12 h-12 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Factory className="h-6 w-6 text-black" />
                    </div> */}

                    <Image
                      src={img1}
                      alt="Our founding workshop"
                      width={500}
                      height={400}
                      className="rounded-xl lg:rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Content - Desktop Left, Mobile Below */}
                  <div className="lg:order-2 order-2">
                    <div className="inline-block bg-gradient-to-r from-amber-500 to-blue-500 text-black px-4 py-2 lg:px-6 lg:py-2 rounded-full font-bold mb-4 lg:mb-6 text-sm lg:text-base">
                      2000
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">Innovation Era</h3>
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                      Invested in cutting-edge manufacturing technology while preserving traditional craftsmanship
                      techniques. Expanded our product line and quality standards.
                    </p>
                  </div>

                  {/* Image - Desktop Right, Mobile Top */}
                  <div className="relative lg:order-1 order-1">
                    {/* Desktop Timeline Dot */}
                    {/* <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Zap className="h-8 w-8 text-black" />
                    </div> */}

                    {/* Mobile Timeline Dot */}
                    {/* <div className="lg:hidden absolute -left-12 top-8 w-12 h-12 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-black" />
                    </div> */}

                    <Image
                      src={img2}
                      alt="Modern manufacturing facility"
                      width={500}
                      height={400}
                      className="rounded-xl lg:rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Content - Desktop Right, Mobile Below */}
                  <div className="lg:text-right order-2 lg:order-1">
                    <div className="inline-block bg-gradient-to-r from-amber-500 to-blue-500 text-black px-4 py-2 lg:px-6 lg:py-2 rounded-full font-bold mb-4 lg:mb-6 text-sm lg:text-base">
                      TODAY
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">Industry Leadership</h3>
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                      Now recognized as the premier manufacturer of brass window brackets, serving customers nationwide
                      with unmatched quality and innovation.
                    </p>
                  </div>

                  {/* Image - Desktop Left, Mobile Top */}
                  <div className="relative order-1 lg:order-2">
                    {/* Desktop Timeline Dot */}
                    {/* <div className="hidden lg:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-black" />
                    </div> */}

                    {/* Mobile Timeline Dot */}
                    {/* <div className="lg:hidden absolute -left-12 top-8 w-12 h-12 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-black" />
                    </div> */}

                    <Image
                      src={img3}
                      alt="Our current facility"
                      width={500}
                      height={400}
                      className="rounded-xl lg:rounded-2xl shadow-2xl w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Interactive Cards */}
      <section className="py-28 bg-gradient-to-b from-gray-900/50 to-black relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">VALUES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">The principles that drive everything we do</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-6 cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 overflow-hidden h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="mb-8 relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-400/20 to-blue-400/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-10 w-10 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white">EXCELLENCE</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Uncompromising commitment to the highest quality standards in every product we create.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-6 cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 overflow-hidden h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="mb-8 relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-400/20 to-blue-400/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-10 w-10 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white">INNOVATION</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Continuously pushing boundaries with cutting-edge technology and creative solutions.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-6 cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 overflow-hidden h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="mb-8 relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-400/20 to-blue-400/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-10 w-10 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white">INTEGRITY</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Building trust through honest business practices and transparent communication.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-6 cursor-pointer bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/50 overflow-hidden h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-10 text-center relative z-10">
                  <div className="mb-8 relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-400/20 to-blue-400/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-10 w-10 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white">PARTNERSHIP</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Collaborating closely with customers to deliver tailored solutions that exceed expectations.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Manufacturing Process - Modern Visual */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-amber-400/5 to-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-amber-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              PRECISION{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">PROCESS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every bracket follows our meticulous 6-step manufacturing process
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "DESIGN", desc: "CAD modeling and engineering specifications", icon: Target },
              { step: "02", title: "MATERIAL", desc: "Premium brass selection and preparation", icon: Shield },
              { step: "03", title: "PRECISION", desc: "CNC machining with micron-level accuracy", icon: Zap },
              { step: "04", title: "CRAFTING", desc: "Hand-finishing by master craftsmen", icon: Users },
              { step: "05", title: "QUALITY", desc: "Multi-point inspection and testing", icon: Award },
              { step: "06", title: "DELIVERY", desc: "Careful packaging and timely shipping", icon: Clock },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group text-center relative">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-amber-400/10 to-blue-400/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-amber-400/20">
                      <item.icon className="h-12 w-12 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-blue-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern Cards */}
      <section className="py-28 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
              MEET THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">MASTERS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our visionary founders who built this company from the ground up with decades of expertise, passion, and
              unwavering commitment to excellence in brass manufacturing.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-4 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Owner Photo */}
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-amber-400 to-blue-400 p-1 bg-gradient-to-r from-amber-400 to-blue-400">
                      <Image
                        src={md}
                        alt="Rajesh Kumar - Co-Founder"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full bg-gray-800"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=128&width=128&text=RK"
                        }}
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-black" />
                    </div>
                  </div>

                  {/* Owner Details */}
                  <h3 className="text-2xl font-bold mb-2 text-white">Maheshbhai Ramoliya</h3>
                  <p className="text-amber-400 font-semibold mb-4 text-lg">Co-Founder</p>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    Master craftsman with 10+ years of experience in brass manufacturing. Visionary leader who
                    established the company's quality standards and innovative manufacturing processes.
                  </p>

                  {/* Contact Information */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-xl p-4 border border-amber-500/20">
                    <div className="flex items-center justify-center gap-3 text-white">
                      <div className="p-2 bg-gradient-to-r from-amber-400 to-blue-400 rounded-lg">
                        <svg className="h-4 w-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Direct Contact</p>
                        <p className="font-bold text-lg">+91 98258 61693</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-4 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Owner Photo */}
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-amber-400 to-blue-400 p-1 bg-gradient-to-r from-amber-400 to-blue-400">
                      <Image
                        src={jeel}
                        alt="Suresh Patel - Co-Founder"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover rounded-full bg-gray-800"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=128&width=128&text=SP"
                        }}
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Factory className="h-4 w-4 text-black" />
                    </div>
                  </div>

                  {/* Owner Details */}
                  <h3 className="text-2xl font-bold mb-2 text-white">Jeelbhai Ramoliya</h3>
                  <p className="text-amber-400 font-semibold mb-4 text-lg">Co-Founder</p>
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                    Technical expert specializing in precision engineering and manufacturing technology. Drives
                    innovation and ensures every product meets the highest technical standards.
                  </p>

                  {/* Contact Information */}
                  <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-xl p-4 border border-amber-500/20">
                    <div className="flex items-center justify-center gap-3 text-white">
                      <div className="p-2 bg-gradient-to-r from-amber-400 to-blue-400 rounded-lg">
                        <svg className="h-4 w-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Direct Contact</p>
                        <p className="font-bold text-lg">+91 90162 65610</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Company Info */}
          <AnimatedSection delay={300} className="mt-16 text-center">
            <div className="bg-gradient-to-br from-amber-500/10 to-blue-500/10 rounded-3xl p-8 border border-amber-500/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Leadership Excellence</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Together, our founders bring over 60 years of combined experience in brass manufacturing, engineering
                excellence, and business leadership. Their vision and dedication have made BrassCraft Manufacturing the
                industry leader it is today.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-2">35+</div>
                  <p className="text-gray-400">Years Combined Leadership</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">50K+</div>
                  <p className="text-gray-400">Products Delivered</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">99%</div>
                  <p className="text-gray-400">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
