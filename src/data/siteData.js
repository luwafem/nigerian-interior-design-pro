// src/data/siteData.js
export const siteData = {
  company: {
    name: "ADIEVA'S INTERIORS",
    tagline: "Blank Space into the paradise of your dreams",
    description: "Premium interior design firm blending contemporary aesthetics with rich Nigerian cultural heritage",
    address: "Lagos, Nigeria",
    phone: "+234 801 234 5678",
    email: "hello@adievasinteriors.com",
    social: {
      instagram: "https://instagram.com/adievasinteriors",
      pinterest: "https://pinterest.com/adievasinteriors",
      linkedin: "https://linkedin.com/company/adievasinteriors",
    }
  },
  
  seo: {
    title: "adieva's interiors | Luxury Interior Design in Nigeria",
    description: "Premium interior design services in Lagos, Nigeria. Contemporary African aesthetics, luxury residential & commercial spaces.",
    keywords: "interior design Nigeria, Lagos interior designer, African interior design, luxury homes Nigeria, office design Lagos",
    author: "adieva's interiors",
    ogImage: "/og-image.jpg",
    siteUrl: "https://adievasinteriors.com"
  },
  
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  
  services: [
    {
      id: 1,
      title: "Residential Design",
      description: "Transform your living spaces into luxurious sanctuaries",
      icon: "🏠"
    },
    {
      id: 2,
      title: "Commercial Spaces",
      description: "Create inspiring work environments that reflect your brand",
      icon: "🏢"
    },
    {
      id: 3,
      title: "Cultural Fusion",
      description: "Blend modern design with traditional Nigerian elements",
      icon: "🎨"
    }
  ]
}