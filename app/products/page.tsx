"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { products, getCategoryImage } from "@/data/products"

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

const getVariantColor = (variant: string) => {
  switch (variant) {
    case "LIGHT":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "EXTRA LIGHT":
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
    case "MEDIUM":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "HEAVY":
      return "bg-red-500/20 text-red-400 border-red-500/30"
    case "STANDARD":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    case "DELUX":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30"
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

export default function ProductsPage() {
  const [selectedType, setSelectedType] = useState<string>("All")
  const [selectedVariant, setSelectedVariant] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [isFiltering, setIsFiltering] = useState(false)
  const itemsPerPage = 10

  // Simulate initial data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Handle filtering loading state
  useEffect(() => {
    if (selectedType !== "All" || selectedVariant !== "All") {
      setIsFiltering(true)
      setCurrentPage(1) // Reset to first page when filtering
      const timer = setTimeout(() => {
        setIsFiltering(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [selectedType, selectedVariant])

  // Get unique types and variants for filters
  const types = ["All", ...Array.from(new Set(products.map((p) => p.type)))]
  const variants = ["All", ...Array.from(new Set(products.map((p) => p.variant)))]

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const typeMatch = selectedType === "All" || product.type === selectedType
    const variantMatch = selectedVariant === "All" || product.variant === selectedVariant
    return typeMatch && variantMatch
  })

  // Group products by type for better organization
  const groupedProducts = filteredProducts.reduce(
    (acc, product) => {
      if (!acc[product.type]) {
        acc[product.type] = []
      }
      acc[product.type].push(product)
      return acc
    },
    {} as Record<string, typeof products>,
  )

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  // Group current page products by type
  const currentGroupedProducts = currentProducts.reduce(
    (acc, product) => {
      if (!acc[product.type]) {
        acc[product.type] = []
      }
      acc[product.type].push(product)
      return acc
    },
    {} as Record<string, typeof products>,
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Smooth scroll to top of products section
    document.getElementById("products-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  // Loading Component
  const LoadingCard = () => (
    <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 h-full">
      <CardContent className="p-0">
        <div className="w-full h-48 bg-gray-800 animate-pulse" />
        <div className="p-6 space-y-4">
          <div className="h-5 bg-gray-800 rounded animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-800 rounded animate-pulse w-3/4" />
            <div className="h-4 bg-gray-800 rounded animate-pulse w-1/2" />
            <div className="h-4 bg-gray-800 rounded animate-pulse w-2/3" />
          </div>
          <div className="h-6 bg-gray-800 rounded animate-pulse w-1/3" />
        </div>
      </CardContent>
    </Card>
  )

  // Main Loading Screen
  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-black">
        <div className="container mx-auto px-6">
          {/* Header Loading */}
          <div className="text-center mb-20">
            <div className="h-16 bg-gray-800 rounded-lg animate-pulse mx-auto mb-8 max-w-2xl" />
            <div className="h-6 bg-gray-800 rounded animate-pulse mx-auto max-w-4xl" />
          </div>

          {/* Filters Loading */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="h-6 bg-gray-800 rounded animate-pulse mb-6 w-48" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="h-4 bg-gray-800 rounded animate-pulse mb-3 w-24" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 bg-gray-800 rounded animate-pulse w-20" />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="h-4 bg-gray-800 rounded animate-pulse mb-3 w-16" />
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 bg-gray-800 rounded animate-pulse w-16" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Loading */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </div>

          {/* Loading indicator */}
          <div className="flex justify-center items-center mt-12">
            <div className="flex items-center gap-3 text-amber-400">
              <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-lg font-medium">Loading Products...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">PRODUCTS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our complete range of premium brass window brackets, each crafted with precision and attention to
            detail. All products include professional finishing and quality guarantee.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={100} className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Filter Products</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Product Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                      className={`${
                        selectedType === type
                          ? "bg-gradient-to-r from-amber-500 to-blue-500 text-white"
                          : "border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400"
                      } transition-all duration-300`}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Variant Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Variant</label>
                <div className="flex flex-wrap gap-2">
                  {variants.map((variant) => (
                    <Button
                      key={variant}
                      variant={selectedVariant === variant ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedVariant(variant)}
                      className={`${
                        selectedVariant === variant
                          ? "bg-gradient-to-r from-amber-500 to-blue-500 text-white"
                          : "border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400"
                      } transition-all duration-300`}
                    >
                      {variant}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count and Pagination Info */}
            <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-gray-400">
                  Showing{" "}
                  <span className="text-amber-400 font-bold">
                    {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}
                  </span>{" "}
                  of <span className="text-amber-400 font-bold">{filteredProducts.length}</span> products
                  {selectedType !== "All" && (
                    <span>
                      {" "}
                      in <span className="text-blue-400 font-medium">{selectedType}</span>
                    </span>
                  )}
                  {selectedVariant !== "All" && (
                    <span>
                      {" "}
                      with <span className="text-green-400 font-medium">{selectedVariant}</span> variant
                    </span>
                  )}
                </p>
              </div>
              {totalPages > 1 && (
                <div className="text-sm text-gray-400">
                  Page <span className="text-white font-medium">{currentPage}</span> of{" "}
                  <span className="text-white font-medium">{totalPages}</span>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Products Display with Loading State */}
        {isFiltering ? (
          <AnimatedSection delay={200} className="mb-16">
            <div className="flex justify-center items-center py-20">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
                <span className="text-lg font-medium">Filtering Products...</span>
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <>
            {/* Products by Category */}
            {Object.entries(currentGroupedProducts).map(([type, typeProducts], typeIndex) => (
              <AnimatedSection key={type} delay={200 + typeIndex * 100} className="mb-16">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
                      {type}
                    </span>
                    <span className="text-gray-400 text-lg ml-4">({typeProducts.length} items on this page)</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {typeProducts.map((product, index) => (
                    <AnimatedSection key={product.id} delay={300 + index * 50}>
                      <Card className="overflow-hidden hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-amber-500/30 h-full">
                        <CardContent className="p-0">
                          <div className="relative">
                            <Image
                              src={getCategoryImage(product.type) || "/placeholder.svg"}
                              alt={`${product.type} - ${product.name}`}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                const target = e.target as HTMLImageElement
                                target.src = `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(product.type)}`
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute top-3 right-3">
                              <Badge className={`${getVariantColor(product.variant)} border font-bold text-xs`}>
                                {product.variant}
                              </Badge>
                            </div>
                            {/* Category label overlay */}
                            <div className="absolute bottom-3 left-3">
                              <Badge variant="secondary" className="bg-black/60 text-white text-xs backdrop-blur-sm">
                                {product.type}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-white mb-3">{product.name}</h3>

                            <div className="space-y-3 mb-4">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Weight:</span>
                                <span className="text-white font-medium">{product.weight} kg</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">Rate:</span>
                                <span className="text-amber-400 font-bold">₹{product.rate}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-gray-400 text-sm">SSF:</span>
                                <span className={`font-medium ${product.ssf ? "text-green-400" : "text-red-400"}`}>
                                  {product.ssf ? "Available" : "Not Available"}
                                </span>
                              </div>
                            </div>

                            <div className="pt-4 border-t border-gray-800">
                              <p className="text-xs text-gray-500 mb-3">Product Specifications</p>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-400">ID: {product.id}</span>
                                <Badge className={`${getVariantColor(product.variant)} text-xs`}>
                                  {product.variant}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <AnimatedSection delay={400} className="mb-16">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
                  {/* Page Info */}
                  <div className="text-gray-400">
                    Showing{" "}
                    <span className="text-white font-medium">
                      {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}
                    </span>{" "}
                    of <span className="text-amber-400 font-bold">{filteredProducts.length}</span> products
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </Button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {/* First page */}
                      {currentPage > 3 && (
                        <>
                          <Button
                            variant={1 === currentPage ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(1)}
                            className={`w-10 h-10 ${
                              1 === currentPage
                                ? "bg-gradient-to-r from-amber-500 to-blue-500 text-white"
                                : "border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400"
                            }`}
                          >
                            1
                          </Button>
                          {currentPage > 4 && <span className="text-gray-500 px-2">...</span>}
                        </>
                      )}

                      {/* Current page and neighbors */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter((page) => {
                          return page >= currentPage - 2 && page <= currentPage + 2
                        })
                        .map((page) => (
                          <Button
                            key={page}
                            variant={page === currentPage ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 ${
                              page === currentPage
                                ? "bg-gradient-to-r from-amber-500 to-blue-500 text-white"
                                : "border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400"
                            }`}
                          >
                            {page}
                          </Button>
                        ))}

                      {/* Last page */}
                      {currentPage < totalPages - 2 && (
                        <>
                          {currentPage < totalPages - 3 && <span className="text-gray-500 px-2">...</span>}
                          <Button
                            variant={totalPages === currentPage ? "default" : "outline"}
                            size="sm"
                            onClick={() => handlePageChange(totalPages)}
                            className={`w-10 h-10 ${
                              totalPages === currentPage
                                ? "bg-gradient-to-r from-amber-500 to-blue-500 text-white"
                                : "border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400"
                            }`}
                          >
                            {totalPages}
                          </Button>
                        </>
                      )}
                    </div>

                    {/* Next Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="border-gray-600 text-gray-300 hover:border-amber-400 hover:text-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </>
        )}

        {/* No Results */}
        {!isFiltering && filteredProducts.length === 0 && (
          <AnimatedSection delay={300} className="text-center py-20">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Products Found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your filters to see more products.</p>
            <Button
              onClick={() => {
                setSelectedType("All")
                setSelectedVariant("All")
                setCurrentPage(1)
              }}
              className="bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 text-white"
            >
              Clear All Filters
            </Button>
          </AnimatedSection>
        )}

        {/* Custom Orders CTA */}
        <AnimatedSection
          delay={400}
          className="mt-20 bg-gradient-to-br from-amber-500/10 to-blue-500/10 rounded-3xl p-12 text-center border border-amber-500/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Need Something Custom?</h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We specialize in custom bracket manufacturing. If you don't see exactly what you need, we can work with you
            to create a custom solution that meets your specific requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-300">
            <div>
              <strong className="text-amber-400">Custom Services Include:</strong>
              <br />• Custom dimensions and specifications
              <br />• Special weight requirements
              <br />• Bulk orders and wholesale pricing
            </div>
            <div>
              <strong className="text-blue-400">Quality Assurance:</strong>
              <br />• SSF certified products
              <br />• Precision weight specifications
              <br />• Competitive rate structure
            </div>
            <div>
              <strong className="text-green-400">Product Variants:</strong>
              <br />• Light to Heavy duty options
              <br />• Multiple size configurations
              <br />• Professional grade materials
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
