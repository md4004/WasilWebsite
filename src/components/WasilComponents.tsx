import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, MousePointer2, Heart, ArrowRight, Zap, Wifi, Home, ShieldCheck, ThumbsUp, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img 
              alt="Wasil Logo" 
              className="h-10 w-10 rounded-full" 
              src="https://image2url.com/r2/default/images/1772193779641-9310d7a9-8122-4f88-b351-9ecf3c42d2b8.png" 
            />
            <span className="font-display font-bold text-2xl text-primary tracking-wide">Wasil</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">How it Works</a>
            <a href="#services" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Services</a>
            <a href="#trust" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Trust & Safety</a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 hover:text-primary transition-colors"
            >
              <span className="sr-only">Menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a 
                href="#how-it-works" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-all"
              >
                How it Works
              </a>
              <a 
                href="#services" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-all"
              >
                Services
              </a>
              <a 
                href="#trust" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-all"
              >
                Trust & Safety
              </a>
              <div className="pt-4 px-3">
                <button className="w-full py-3 px-4 bg-primary text-white font-medium rounded-full shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden hero-pattern">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
          Bridging the Distance
        </div>
        <h1 className="text-4xl tracking-tight font-display font-bold text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Supporting Home <br className="hidden lg:block" />
          <span className="text-primary italic">from Anywhere.</span>
        </h1>
        <p className="mt-4 text-base text-slate-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl md:max-w-2xl font-light leading-relaxed">
          Connect your loved ones in Lebanon with trusted, personally vetted professionals for every household need. From solar maintenance to daily essentials, we handle the logistics so you can handle the love.
        </p>
        <div className="mt-10 flex flex-col items-center">
          <button className="inline-flex items-center px-10 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-slate-400">
            Trusted by 2,000+ diaspora families.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Select Your Family Member",
      desc: "Create a profile for your loved ones in Lebanon, adding their location and specific needs securely.",
      icon: <Users className="h-8 w-8" />
    },
    {
      id: 2,
      title: "Choose a Service",
      desc: "Browse our vetted marketplace for everything from tech support to grocery delivery.",
      icon: <MousePointer2 className="h-8 w-8" />
    },
    {
      id: 3,
      title: "Track & Relax",
      desc: "Receive real-time updates as our concierge ensures the job is done perfectly. Payment is handled securely online.",
      icon: <Heart className="h-8 w-8" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Simple Process</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Care delivered in three steps
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-bg-light p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white text-xl font-bold shadow-lg">
                  {step.id}
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-slate-900 font-display mb-4">{step.title}</h3>
                <p className="text-base text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Power & Solar",
      desc: "Ensure continuous power. Services include battery health checks, inverter maintenance, and professional solar panel cleaning.",
      popular: "5 Amp Installation, Battery Refresh",
      icon: <Zap className="h-6 w-6" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9H3iMpXgo5C9H2OqIZVJvr_7vhP-wYM51grJFj0aoI-eSfl7NRvk6lkBXazsHel6381tlxxwtE0q2RtpnvmeAeyL6fK8jumlYCcWyWkX2xeeorVTAgh1TELF7dJ_Hj3scwNoam2Gt6JDWSBAVlzFDKRBt8UhTO1f5Hh_BfGnsVTtyXf_kILXuLiGd8tUjxIzdArPW5SyX6-MORl0aNV68BxbkOPvCmXIV8nW39_UL7FJRNbjzjaIDNK_OufDUCIvxv-48JHSZtZc",
      badge: "High Demand"
    },
    {
      title: "IT & Tech Support",
      desc: "Keep the connection alive. We offer Wi-Fi setup, device troubleshooting, and smartphone repairs delivered to their door.",
      popular: "Router UPS Setup, Phone Screen Repair",
      icon: <Wifi className="h-6 w-6" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANYj4MXHbIgLxLSzAEWPyLZ-A2t8olx0JsC3KANPoQDR7xnhhV3XkhI3_NLG6lb1KZx_lNIEgIek5QNoCYCraLA8BwlmzagcH09JSlwd7dmDIxwKFxlUedgz_hyP_cipBApOZD3353AndD2aDV0-2Xb2dg2cpkYedS2WkTDkuJKMKnhHf6iy3TCuqkbbZPHdnWtqPtu0oybJimoR1KyuYothf_Ds96yvZaYhCPuIwL_mRRADGKEFDag3qFYZNopnw0vXIDA-jvJ1M"
    },
    {
      title: "Household & Essentials",
      desc: "Never worry about empty shelves. We coordinate medication delivery, hot meal services, and general home repairs.",
      popular: "Monthly Meds, Plumber Dispatch",
      icon: <Home className="h-6 w-6" />,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAFQKvo81j83nubCzn_UdPJzXAf01uFpSCVzlBSRjEkLl4MB2febXUzZGAC9F_JmVUfpLUqgYtnXIYtMNb2HWUOaTadRUHOX80HGNZBP1PTN8Kt_Q3OmxKvL3hsVj9pzJMzav7MpEkbQfWqdlvw8WL6OpnrvJn5wUpuaTMCyHFsB_436jqc9rJs-rjppW8YdRAsxrniqmHOcnm4QH4XDK2glwNzBKHaORYroaoA0e-Fxd1TA1USgwMHXr3pSUykPEgL94vZ7OhcpA"
    }
  ];

  return (
    <section id="services" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-extrabold text-slate-900 sm:text-4xl">
              Comprehensive Care
            </h2>
            <p className="mt-4 text-lg text-slate-500 font-light">
              We've curated the most essential services needed for daily life in Lebanon.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
              View all services
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col rounded-2xl shadow-sm overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="h-56 w-full relative">
                <img alt={service.title} className="w-full h-full object-cover" src={service.image} />
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                    {service.badge}
                  </div>
                )}
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-primary mr-3">{service.icon}</span>
                    <h3 className="text-xl font-display font-semibold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400">Popular: {service.popular}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Trust = () => (
  <section id="trust" className="bg-white py-24 lg:py-32 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
          </div>
          <img 
            alt="Professional dispatcher" 
            className="relative rounded-2xl shadow-2xl mx-auto z-10 w-full max-w-md" 
            src="https://image2url.com/r2/default/images/1772194466444-85600c9f-0d9a-418a-9b33-d2dca09e9340.webp" 
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl flex items-center z-20 border border-slate-100">
            <div className="bg-green-100 rounded-full p-2 mr-4">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Verified Pros</p>
              <p className="font-bold text-slate-900 text-xl">100% Vetted</p>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Wasil Quality Standard</h2>
          <h3 className="mt-2 text-3xl font-display font-extrabold text-slate-900 sm:text-4xl leading-tight">
            Personally Vetted Dispatchers
          </h3>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            Trust is our currency. We don't just use algorithms; we use human connection. Every professional on the Wasil platform is interviewed, background-checked, and community-rated.
          </p>
          <dl className="mt-12 space-y-10">
            <div className="relative flex gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-white shadow-md">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-slate-900 font-display">Secure & Transparent</dt>
                <dd className="mt-2 text-base text-slate-500">
                  Real-time tracking of every service. You see who is visiting your family and when they arrive.
                </dd>
              </div>
            </div>
            <div className="relative flex gap-6">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-white shadow-md">
                <ThumbsUp className="h-6 w-6" />
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-slate-900 font-display">Community Ratings</dt>
                <dd className="mt-2 text-base text-slate-500">
                  Feedback from families like yours drives our quality. Only providers with 4.5+ stars stay on the platform.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="bg-primary py-20">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-display font-extrabold text-white sm:text-5xl leading-tight">
        Ready to support your family?
        <span className="block text-white/80 text-2xl mt-4 font-normal">Join Wasil today.</span>
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-white/90 max-w-2xl mx-auto">
        Sign up now and get 10% off your first service booking. We're here to make distance feel a little shorter.
      </p>
      <div className="mt-10">
        <button className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-medium rounded-full text-primary bg-white hover:bg-slate-50 transition-all shadow-xl transform hover:scale-105">
          Get Started for Free
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2">
            <img 
              alt="Wasil Logo" 
              className="h-8 w-8 rounded-full grayscale opacity-60" 
              src="https://image2url.com/r2/default/images/1772193779641-9310d7a9-8122-4f88-b351-9ecf3c42d2b8.png" 
            />
            <span className="font-display font-bold text-xl text-slate-700">Wasil</span>
          </div>
          <p className="mt-6 text-sm text-slate-500 leading-relaxed">
            Connecting the diaspora to home with trust, reliability, and care.
          </p>
          <div className="mt-6 text-xs text-slate-400 font-medium">
            Made with ❤️ for the Diaspora
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase">Platform</h3>
          <ul className="mt-6 space-y-4">
            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">How it Works</a></li>
            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Services</a></li>
            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase">Support</h3>
          <ul className="mt-6 space-y-4">
            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Safety</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-400 tracking-widest uppercase">Legal</h3>
          <ul className="mt-6 space-y-4">
            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-slate-500 hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-200 text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Wasil Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export { Navbar, Hero, Process, Services, Trust, CTA, Footer };
