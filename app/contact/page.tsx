"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react'
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
            CONTACT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">US</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get in touch with us for quotes, custom orders, or any questions about our brass window brackets. We're here
            to help with your project needs.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <AnimatedSection delay={100}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Phone className="h-6 w-6 text-amber-400" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-white">+91 98258 61693</p>
                  <p className="text-gray-400 mt-2">24 x 7 Available</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Mail className="h-6 w-6 text-amber-400" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-white">jeelramoliya@gmail.com</p>
                  <p className="text-gray-400 mt-2">We typically respond within 24 hours</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <MapPin className="h-6 w-6 text-amber-400" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-white">
                    1234 Jay brass
                    <br />
                    Shnkar Tekri
                    <br />
                    Jamnagar, Gujarat
                  </p>
                  <p className="text-gray-400 mt-3">Visitors welcome by appointment</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black bg-transparent"
                    onClick={() =>
                      window.open("https://maps.google.com/?q=1234+Industrial+Drive+Springfield+ST+12345", "_blank")
                    }
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Clock className="h-6 w-6 text-amber-400" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-white">
                    <p>
                      <strong>Saturday - Thursday:</strong> 8:00 AM - 6:00 PM
                    </p>
                    <p>
                      <strong>Friday:</strong> Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={200}>
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 bg-gray-800 border-gray-700 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white font-medium">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-gray-800 border-gray-700 text-white"
                      placeholder="e.g., Quote Request, Custom Order, General Inquiry"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[150px] bg-gray-800 border-gray-700 text-white"
                      placeholder="Please provide details about your project, quantity needed, specifications, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 text-white font-bold py-4"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Additional Info */}
        <AnimatedSection
          delay={600}
          className="mt-20 bg-gradient-to-br from-amber-500/10 to-blue-500/10 rounded-3xl p-12 border border-amber-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ready to Get Started?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Quick Quote</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Call us for immediate pricing on standard products and quick turnaround times.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Custom Orders</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Email us your specifications for custom brackets and specialized manufacturing needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Bulk Pricing</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Contact us for wholesale pricing on large orders and contractor discounts.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
