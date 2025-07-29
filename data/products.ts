import dbracket from "../public/images/dbrac.jpg"
import squarebracket from '../public/images/squarebrack.jpeg'
import foldingbracket from '../public/images/foldingbrack.jpeg'
import dandipivot from '../public/images/dandipivot.jpeg'
import pattipivot from '../public/images/pattipivot.jpeg'
import windowstay from '../public/images/windowstay.jpeg'
import { StaticImageData } from "next/image"

export const products = [
  { id: 1, name: '1"X6mm', type: "Square Bracket", variant: "LIGHT", weight: 0.14, rate: 125, ssf: true },
  { id: 2, name: '1"X8mm', type: "Square Bracket", variant: "LIGHT", weight: 0.14, rate: 125, ssf: true },
  { id: 3, name: '1"X10mm', type: "Square Bracket", variant: "LIGHT", weight: 0.15, rate: 125, ssf: true },
  { id: 4, name: '1"X12mm', type: "Square Bracket", variant: "LIGHT", weight: 0.16, rate: 125, ssf: true },
  { id: 5, name: '2"X6mm', type: "Square Bracket", variant: "LIGHT", weight: 0.28, rate: 115, ssf: true },
  { id: 6, name: '2"X8mm', type: "Square Bracket", variant: "LIGHT", weight: 0.29, rate: 115, ssf: true },
  { id: 7, name: '2"X10mm', type: "Square Bracket", variant: "LIGHT", weight: 0.31, rate: 115, ssf: true },
  { id: 8, name: '2"X12mm', type: "Square Bracket", variant: "LIGHT", weight: 0.32, rate: 115, ssf: true },
  { id: 9, name: '2"X6mm', type: "Square Bracket", variant: "EXTRA LIGHT", weight: 0.22, rate: 115, ssf: true },
  { id: 10, name: '2"X8mm', type: "Square Bracket", variant: "EXTRA LIGHT", weight: 0.23, rate: 115, ssf: true },
  { id: 11, name: '2"X10mm', type: "Square Bracket", variant: "EXTRA LIGHT", weight: 0.24, rate: 115, ssf: true },
  { id: 12, name: '2"X12mm', type: "Square Bracket", variant: "EXTRA LIGHT", weight: 0.26, rate: 115, ssf: true },
  { id: 13, name: '1"X6mm', type: "Square Bracket", variant: "MEDIUM", weight: 0.19, rate: 125, ssf: true },
  { id: 14, name: '1"X8mm', type: "Square Bracket", variant: "MEDIUM", weight: 0.2, rate: 125, ssf: true },
  { id: 15, name: '1"X10mm', type: "Square Bracket", variant: "MEDIUM", weight: 0.21, rate: 125, ssf: true },
  { id: 16, name: '1"X12mm', type: "Square Bracket", variant: "MEDIUM", weight: 0.25, rate: 125, ssf: true },
  { id: 17, name: '2"X6mm', type: "Square Bracket", variant: "MEDIUM", weight: 0.38, rate: 115, ssf: true },
  { id: 18, name: '2"X8mm', type: "Square Bracket", variant: "MEDIUM", weight: 0.4, rate: 115, ssf: true },
  { id: 19, name: '2"X10mm', type: "Square Bracket", variant: "MEDIUM", weight: 0.4, rate: 115, ssf: true },
  { id: 20, name: '2"X12mm', type: "Square Bracket", variant: "MEDIUM", weight: 0.5, rate: 115, ssf: true },
  { id: 21, name: '1"X6mm', type: "Square Bracket", variant: "HEAVY", weight: 0.3, rate: 125, ssf: true },
  { id: 22, name: '1"X8mm', type: "Square Bracket", variant: "HEAVY", weight: 0.3, rate: 125, ssf: true },
  { id: 23, name: '1"X10mm', type: "Square Bracket", variant: "HEAVY", weight: 0.3, rate: 125, ssf: true },
  { id: 24, name: '1"X12mm', type: "Square Bracket", variant: "HEAVY", weight: 0.3, rate: 125, ssf: true },
  { id: 25, name: '1"X12mm', type: "Square Bracket", variant: "HEAVY", weight: 0.35, rate: 125, ssf: true },
  { id: 26, name: '1"X12mm', type: "Square Bracket", variant: "HEAVY", weight: 0.45, rate: 125, ssf: true },
  { id: 27, name: '2"X6mm', type: "Square Bracket", variant: "HEAVY", weight: 0.6, rate: 115, ssf: true },
  { id: 28, name: '2"X8mm', type: "Square Bracket", variant: "HEAVY", weight: 0.6, rate: 115, ssf: true },
  { id: 29, name: '2"X10mm', type: "Square Bracket", variant: "HEAVY", weight: 0.6, rate: 115, ssf: true },
  { id: 30, name: '2"X12mm', type: "Square Bracket", variant: "HEAVY", weight: 0.6, rate: 115, ssf: true },
  { id: 31, name: '2"X12mm', type: "Square Bracket", variant: "HEAVY", weight: 0.7, rate: 115, ssf: true },
  { id: 32, name: '2"X12mm', type: "Square Bracket", variant: "HEAVY", weight: 0.95, rate: 115, ssf: true },
  { id: 33, name: '1"X6mm', type: "Folding Bracket", variant: "LIGHT", weight: 0.2, rate: 125, ssf: true },
  { id: 34, name: '1"X8mm', type: "Folding Bracket", variant: "LIGHT", weight: 0.22, rate: 125, ssf: true },
  { id: 35, name: '1"X10mm', type: "Folding Bracket", variant: "LIGHT", weight: 0.23, rate: 125, ssf: true },
  { id: 36, name: '1"X12mm', type: "Folding Bracket", variant: "LIGHT", weight: 0.25, rate: 125, ssf: true },
  { id: 37, name: '2"X6mm', type: "Folding Bracket", variant: "LIGHT", weight: 0.4, rate: 120, ssf: true },
  { id: 38, name: '2"X8mm', type: "Folding Bracket", variant: "LIGHT", weight: 0.43, rate: 120, ssf: true },
  { id: 39, name: '2"X10mm', type: "Folding Bracket", variant: "LIGHT", weight: 0.46, rate: 120, ssf: true },
  { id: 40, name: '2"X12mm', type: "Folding Bracket", variant: "LIGHT", weight: 0.5, rate: 120, ssf: true },
  { id: 41, name: '1"X8mm', type: "Folding Bracket", variant: "HEAVY", weight: 0.37, rate: 125, ssf: true },
  { id: 42, name: '1"X12mm', type: "Folding Bracket", variant: "HEAVY", weight: 0.4, rate: 125, ssf: true },
  { id: 43, name: '2"X8mm', type: "Folding Bracket", variant: "HEAVY", weight: 0.74, rate: 125, ssf: true },
  { id: 44, name: '2"X12mm', type: "Folding Bracket", variant: "HEAVY", weight: 0.8, rate: 125, ssf: true },
  { id: 45, name: '3"X1.1/2"X12mm', type: "Folding Bracket", variant: "HEAVY", weight: 0.14, rate: 125, ssf: true },
  { id: 46, name: '2"X8mm', type: "Folding Corner", variant: "LIGHT", weight: 0.45, rate: 155, ssf: true },
  { id: 47, name: '2"X12mm', type: "Folding Corner", variant: "LIGHT", weight: 0.52, rate: 155, ssf: true },
  { id: 48, name: '2"X8mm', type: "Folding Corner", variant: "HEAVY", weight: 0.75, rate: 155, ssf: true },
  { id: 49, name: '2"X12mm', type: "Folding Corner", variant: "HEAVY", weight: 0.82, rate: 155, ssf: true },
  { id: 50, name: '2"X6mm', type: "Dandi Pivot", variant: "STANDARD", weight: 0.31, rate: 155, ssf: true },
  { id: 51, name: '2"X8mm', type: "Dandi Pivot", variant: "STANDARD", weight: 0.33, rate: 155, ssf: true },
  { id: 52, name: '2.1/2"X1.1/2"X8mm', type: "Patti Pivot", variant: "MEDIUM", weight: 0.137, rate: 160, ssf: true },
  { id: 53, name: '2.1/2"X1.1/2"X12mm', type: "Patti Pivot", variant: "MEDIUM", weight: 0.16, rate: 160, ssf: true },
  { id: 54, name: '3"X1.1/2"X8mm', type: "Patti Pivot", variant: "MEDIUM", weight: 0.165, rate: 160, ssf: true },
  { id: 55, name: '3"X1.1/2"X12mm', type: "Patti Pivot", variant: "MEDIUM", weight: 0.19, rate: 160, ssf: true },
  { id: 56, name: '4"X1.1/2"X8mm', type: "Patti Pivot", variant: "MEDIUM", weight: 0.22, rate: 160, ssf: true },
  { id: 57, name: '4"X1.1/2"X12mm', type: "Patti Pivot", variant: "MEDIUM", weight: 0.256, rate: 160, ssf: true },
  { id: 58, name: "DELUX WINDOW STAY", type: "Window Stay", variant: "DELUX", weight: 0.2, rate: 135, ssf: true },
  { id: 59, name: '2"X6mm', type: "D Bracket", variant: "LIGHT", weight: 0.17, rate: 150, ssf: true },
  { id: 60, name: '2"X8mm', type: "D Bracket", variant: "LIGHT", weight: 0.18, rate: 150, ssf: true },
  { id: 61, name: '2"X10mm', type: "D Bracket", variant: "LIGHT", weight: 0.19, rate: 150, ssf: true },
  { id: 62, name: '2"X12mm', type: "D Bracket", variant: "LIGHT", weight: 0.2, rate: 150, ssf: true },
]

// Category image mapping
export const categoryImages: Record<string, StaticImageData> = {
  "Square Bracket": squarebracket,
  "Folding Bracket": foldingbracket,
  "Folding Corner": foldingbracket,
  "Dandi Pivot": dandipivot,
  "Patti Pivot": pattipivot,
  "Window Stay": windowstay,
  "D Bracket": dbracket,
}

// Helper function to get category image
export const getCategoryImage = (productType: string): StaticImageData => {
  return categoryImages[productType] || "/placeholder.svg?height=200&width=300&text=Product"
}
