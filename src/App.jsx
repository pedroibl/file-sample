import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Upload, Truck, Leaf, Star, ArrowRight, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import melbourneCityscape1 from './assets/melbourne-cityscape-1.jpg'
import melbourneCityscape2 from './assets/melbourne-cityscape-2.jpg'
import corfluteSigns from './assets/corflute-signs.jpg'
import businessCards from './assets/business-cards.jpg'
import flyers from './assets/flyers.jpg'
import banners from './assets/banners.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    { src: melbourneCityscape1, alt: 'Melbourne cityscape with print products', caption: 'Professional Print & Signage Services' },
    { src: businessCards, alt: 'Stack of business cards', caption: 'Custom Business Cards for Every Need' },
    { src: flyers, alt: 'Flyers and brochures', caption: 'Eye-Catching Flyers & Brochures' },
    { src: banners, alt: 'Large format banners', caption: 'Durable Banners for Events & Promotions' },
    { src: corfluteSigns, alt: 'Corflute signs for real estate', caption: 'Corflute Signs for Real Estate & Events' },
  ]

  const products = [
    {
      id: 1,
      name: 'Corflute Signs',
      price: 'From $25',
      description: 'Durable outdoor signage perfect for real estate and events',
      image: corfluteSigns,
      specs: ['Weather resistant', 'Custom sizes', 'Full color printing'],
      leadTime: '2-3 business days'
    },
    {
      id: 2,
      name: 'Business Cards',
      price: 'From $45',
      description: 'Professional business cards with premium finishes',
      image: businessCards,
      specs: ['Premium cardstock', 'Matte or gloss finish', 'Double-sided'],
      leadTime: '1-2 business days'
    },
    {
      id: 3,
      name: 'Banners & Flags',
      price: 'From $85',
      description: 'Eye-catching banners for events and promotions',
      image: banners,
      specs: ['Indoor/outdoor options', 'Various sizes', 'Grommets included'],
      leadTime: '2-4 business days'
    },
    {
      id: 4,
      name: 'Media Walls',
      price: 'From $350',
      description: 'Professional backdrop displays with assembly service',
      image: corfluteSigns,
      specs: ['Portable design', 'Easy assembly', 'Custom graphics'],
      leadTime: '5-7 business days'
    }
  ]

  const services = [
    {
      icon: Truck,
      title: 'Local Installation',
      description: 'Professional installation across Melbourne metro area'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Options',
      description: 'Sustainable materials and environmentally conscious printing'
    },
    {
      icon: Star,
      title: 'Premium Finishing',
      description: 'Lamination, mounting, and custom finishing services'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Melbourne Print Hub</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#products" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</a>
                <a href="#services" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                <Button className="ml-4">Get Quote</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
              <a href="#home" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#products" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Products</a>
              <a href="#services" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#contact" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full">Get Quote</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Melbourne's Local Print Partner</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Professional Print & Signage Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From corflute signs to business cards, we deliver quality printing with local installation and eco-friendly options across Melbourne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  View Products
                </Button>
              </div>
            </div>
            <div className="relative w-full h-96 rounded-lg shadow-2xl overflow-hidden">
              {carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h2 className="text-white text-3xl font-bold">{carouselImages[currentSlide].caption}</h2>
              </div>
              <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full text-foreground focus:outline-none"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full text-foreground focus:outline-none"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Melbourne Print Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another online printer. We're your local Melbourne partner offering end-to-end solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional printing solutions for real estate, events, and business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="secondary">{product.price}</Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Lead time: {product.leadTime}
                    </div>
                    <Button className="w-full" size="sm">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get Your Quote
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload your files or describe your project. We'll get back to you within 2 hours.
            </p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Product Type
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Select a product...</option>
                  <option>Corflute Signs</option>
                  <option>Business Cards</option>
                  <option>Banners & Flags</option>
                  <option>Media Walls</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Describe your project, including size, quantity, and any special requirements..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Files
                </label>
                <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Drag and drop your files here, or click to browse
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Files over 50MB? No problem! We'll provide WhatsApp and email alternatives.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Choose Files
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="installation" className="rounded" />
                <label htmlFor="installation" className="text-sm text-foreground">
                  I need installation services in Melbourne metro area
                </label>
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Submit Quote Request
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your project? Contact us today for a free consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Phone className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">(03) 9XXX XXXX</p>
            </Card>
            
            <Card className="text-center p-6">
              <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">pedroibl@yahoo.com</p>
            </Card>
            
            <Card className="text-center p-6">
              <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Service Area</h3>
              <p className="text-muted-foreground">Melbourne Metro Area</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Melbourne Print Hub</h3>
              <p className="text-background/80">
                Your trusted local print and signage partner in Melbourne.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/80">
                <li>Print Services</li>
                <li>Signage Solutions</li>
                <li>Installation</li>
                <li>Design Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-background/80">
                <li>Corflute Signs</li>
                <li>Business Cards</li>
                <li>Banners & Flags</li>
                <li>Media Walls</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-background/80">
                <li>pedroibl@yahoo.com</li>
                <li>(03) 9XXX XXXX</li>
                <li>Melbourne, Australia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2025 Melbourne Print Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

