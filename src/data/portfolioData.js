// src/data/portfolioData.js
export const portfolioItems = [
  {
    id: 1,
    slug: "victoria-island-penthouse",
    title: "Victoria Island Luxury Penthouse",
    category: "Residential",
    location: "Victoria Island, Lagos",
    year: "2023",
    duration: "4 Months",
    client: "Private Client",
    budget: "Premium",
    
    description: "A contemporary penthouse with panoramic ocean views, featuring bespoke furniture and local artwork.",
    fullDescription: `This 5-bedroom penthouse in Victoria Island showcases a perfect blend of modern luxury and Nigerian craftsmanship. The design incorporates locally-sourced materials like Adire fabrics, Benin bronze accents, and custom-made furniture from Nigerian artisans. The project focused on creating a seamless indoor-outdoor living experience with smart home integration and sustainable design principles.`,
    
    // SEO Optimization
    seoTitle: "Luxury Penthouse Interior Design in Victoria Island Lagos | adieva's interiors",
    metaDescription: "Explore our luxury penthouse interior design project in Victoria Island, Lagos. 5-bedroom, 650 sqm space with bespoke Nigerian craftsmanship, custom furniture, and smart home automation.",
    
    // Social Sharing
    shareTitle: "Check out this luxury penthouse design by adieva's interiors",
    shareDescription: "Contemporary Nigerian interior design with panoramic ocean views",
    
    // Images
    featuredImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Living room with panoramic ocean view",
        room: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
        alt: "Dining area with custom chandelier",
        room: "Dining Room"
      },
      {
        url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
        alt: "Master bedroom with walk-in closet",
        room: "Master Bedroom"
      },
    ],
    
    // Space Specifications
    specifications: {
      totalArea: "650 sqm",
      floorCount: "2",
      rooms: [
        {
          name: "Living Room",
          dimensions: "8m x 6m x 3.2m (L x W x H)",
          area: "48 sqm",
          items: [
            {
              name: "Custom Sectional Sofa",
              dimensions: "3.5m x 1.2m x 0.8m",
              material: "Premium Nigerian leather",
              manufacturer: "adieva's interiors",
              quantity: 1
            },
            {
              name: "Center Coffee Table",
              dimensions: "1.8m x 0.9m x 0.45m",
              material: "Solid Iroko wood with brass inlay",
              manufacturer: "Local Artisan",
              quantity: 1
            },
            {
              name: "Media Console",
              dimensions: "3m x 0.5m x 0.6m",
              material: "Walnut wood with brass handles",
              manufacturer: "adieva's interiors",
              quantity: 1
            },
            {
              name: "Accent Chairs",
              dimensions: "0.8m x 0.8m x 0.75m",
              material: "Adire fabric upholstery",
              manufacturer: "Local Textile Artist",
              quantity: 2
            }
          ]
        },
        {
          name: "Dining Room",
          dimensions: "5m x 4m x 3.2m",
          area: "20 sqm",
          items: [
            {
              name: "Dining Table",
              dimensions: "2.4m x 1.2m x 0.75m",
              material: "Solid mahogany with marble inlay",
              manufacturer: "adieva's interiors",
              quantity: 1
            },
            {
              name: "Dining Chairs",
              dimensions: "0.5m x 0.6m x 0.9m",
              material: "Velvet upholstery with brass legs",
              manufacturer: "adieva's interiors",
              quantity: 8
            },
            {
              name: "Buffet Cabinet",
              dimensions: "2m x 0.5m x 0.9m",
              material: "Rosewood with glass display",
              manufacturer: "Local Artisan",
              quantity: 1
            }
          ]
        },
        {
          name: "Master Bedroom",
          dimensions: "6m x 5m x 3.2m",
          area: "30 sqm",
          items: [
            {
              name: "King Size Bed",
              dimensions: "2m x 2.2m x 1.2m",
              material: "Upholstered headboard in suede",
              manufacturer: "adieva's interiors",
              quantity: 1
            },
            {
              name: "Nightstands",
              dimensions: "0.6m x 0.5m x 0.6m",
              material: "Walnut wood with marble tops",
              manufacturer: "adieva's interiors",
              quantity: 2
            },
            {
              name: "Wardrobe System",
              dimensions: "4m x 0.6m x 2.4m",
              material: "Custom built-in with LED lighting",
              manufacturer: "adieva's interiors",
              quantity: 1
            }
          ]
        }
      ]
    },
    
    // Materials & Finishes
    materials: {
      flooring: ["Italian marble in common areas", "Engineered hardwood in bedrooms", "Custom terrazzo in bathrooms"],
      walls: ["Venetian plaster finish", "Feature wall with Nigerian textile art", "Custom wallpaper in bedrooms"],
      lighting: ["Dimmable LED ambient lighting", "Statement chandeliers from local artisans", "Smart lighting control system"],
      textiles: ["Adire fabrics from Abeokuta", "Premium Egyptian cotton linens", "Handwoven rugs from Northern Nigeria"]
    },
    
    // Features
    features: [
      "Smart home automation system",
      "Panoramic ocean views",
      "Custom furniture from Nigerian artisans",
      "Energy-efficient LED lighting",
      "Integrated sound system",
      "Climate control in each room"
    ],
    
    // Design Challenges & Solutions
    challenges: [
      {
        challenge: "Maximizing ocean views while maintaining privacy",
        solution: "Strategic window placement with smart glass technology"
      },
      {
        challenge: "Incorporating Nigerian elements without overwhelming modern aesthetic",
        solution: "Selective use of traditional patterns and materials as accents"
      }
    ],
    
    // Keywords for search
    keywords: ["luxury penthouse Lagos", "Victoria Island interior design", "Nigerian luxury homes", "high-end residential design", "bespoke furniture Nigeria", "smart home Lagos"],
    
    // Related Projects
    relatedProjects: ["ikeja-corporate-office", "lekki-family-residence"]
  },
  {
    id: 2,
    slug: "ikeja-corporate-office",
    title: "Ikeja Corporate Office Design",
    category: "Commercial",
    location: "Ikeja, Lagos",
    year: "2023",
    duration: "3 Months",
    client: "Tech Solutions Ltd.",
    budget: "Mid-Range",
    
    description: "Modern workspace design promoting productivity and collaboration.",
    fullDescription: `A state-of-the-art corporate office designed to foster innovation and teamwork among employees. The design incorporates flexible workspaces, collaborative zones, and Nigerian art installations to inspire creativity.`,
    
    specifications: {
      totalArea: "1200 sqm",
      floorCount: "1",
      capacity: "80 employees",
      rooms: [
        {
          name: "Open Workspace",
          dimensions: "15m x 20m x 3.5m",
          area: "300 sqm",
          items: [
            {
              name: "Standing Desks",
              dimensions: "1.6m x 0.8m x adjustable",
              material: "Sustainable bamboo with steel frame",
              manufacturer: "ErgoWorks",
              quantity: 40
            },
            {
              name: "Collaboration Tables",
              dimensions: "2.4m x 1.2m x 0.75m",
              material: "White laminate with power outlets",
              manufacturer: "OfficePro",
              quantity: 8
            }
          ]
        },
        {
          name: "Executive Boardroom",
          dimensions: "8m x 6m x 3.5m",
          area: "48 sqm",
          items: [
            {
              name: "Boardroom Table",
              dimensions: "4.8m x 1.8m x 0.75m",
              material: "Walnut wood with built-in AV",
              manufacturer: "adieva's interiors",
              quantity: 1
            },
            {
              name: "Executive Chairs",
              dimensions: "0.65m x 0.65m x 1.1m",
              material: "Leather upholstery with aluminum base",
              manufacturer: "Herman Miller",
              quantity: 12
            }
          ]
        }
      ]
    },
    
    features: [
      "Open plan layout",
      "Collaborative zones",
      "Ergonomic furniture",
      "Video conferencing facilities",
      "Biophilic design elements",
      "Nigerian art installations"
    ],
    
    materials: {
      flooring: ["Carpet tiles in workspaces", "Polished concrete in common areas", "Vinyl in meeting rooms"],
      walls: ["Acoustic panels for noise control", "Magnetic paint for collaboration", "Feature walls with local art"],
      lighting: ["Task lighting at desks", "Ambient LED lighting", "Natural light optimization"]
    },
    
    featuredImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    keywords: ["office design Lagos", "commercial interior", "corporate workspace", "ergonomic office Nigeria"],
    
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        alt: "Open plan workspace",
        room: "Main Workspace"
      }
    ]
  },
  {
    id: 3,
    slug: "lekki-family-residence",
    title: "Lekki Family Residence",
    category: "Residential",
    location: "Lekki, Lagos",
    year: "2022",
    duration: "5 Months",
    client: "The Adebayo Family",
    budget: "High-End",
    
    description: "Spacious family home with traditional Nigerian elements.",
    fullDescription: `A family-friendly residence combining modern comforts with cultural heritage. Designed for a multi-generational family, the home features flexible living spaces, safety considerations for children and elderly, and cultural elements that celebrate Nigerian traditions.`,
    
    specifications: {
      totalArea: "450 sqm",
      floorCount: "2",
      bedrooms: "4",
      bathrooms: "5",
      rooms: [
        {
          name: "Family Living Room",
          dimensions: "7m x 5m x 3.2m",
          area: "35 sqm",
          items: [
            {
              name: "L-Shaped Sectional",
              dimensions: "3m x 2.5m x 0.85m",
              material: "Durable performance fabric",
              manufacturer: "adieva's interiors",
              quantity: 1
            },
            {
              name: "Storage Ottoman",
              dimensions: "1.2m x 0.9m x 0.45m",
              material: "Leather with fabric top",
              manufacturer: "Local Artisan",
              quantity: 2
            }
          ]
        }
      ]
    },
    
    features: [
      "Family-friendly spaces",
      "Cultural accents",
      "Outdoor living area",
      "Children's play area",
      "Elderly accessibility features",
      "Extended family gathering spaces"
    ],
    
    materials: {
      flooring: ["Durable engineered wood", "Non-slip tiles in wet areas", "Cork flooring in playroom"],
      walls: ["Washable paint in children's areas", "Feature walls with family photos", "Traditional Nigerian patterns"],
      textiles: ["Easy-clean fabrics", "Traditional Akwete cloth accents", "Outdoor-resistant cushions"]
    },
    
    featuredImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
    keywords: ["family home design", "Lekki interior", "Nigerian residential", "multi-generational home"],
    
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
        alt: "Family dining area",
        room: "Dining Room"
      }
    ]
  }
];