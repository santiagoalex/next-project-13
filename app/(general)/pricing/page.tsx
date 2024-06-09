import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO description',
  keywords: ['santiago', 'pricing page']
}



export default function pricingPage() {
  return (
    <span className="text-7xl">Pricing page</span>
  )
}