import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Camera, Star, Instagram, MessageCircle, Facebook, Pin } from "lucide-react";

export default function ShriHariDigitalPhotoArt() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F8F8F8] scroll-smooth">

      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-[#1F2937] bg-[#0F172A]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-[#E6C79C]">
          Shri Hari Digital Photo Art
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-[#E6C79C]">
          <Phone size={18} /> 9825307304
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-44 px-6 overflow-hidden">
        {/* Cinematic Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')] bg-cover bg-center"
        />

        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#0F172A]/80 to-[#0F172A]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight tracking-tight text-[#E6C79C] drop-shadow-[0_0_30px_rgba(230,199,156,0.5)]">
            Capturing Moments.
            <br /> Creating Memories.
          </h1>

          <div className="w-32 h-[2px] bg-[#E6C79C] mx-auto mb-10"></div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Wedding and studio photography crafted with elegance, emotion and timeless storytelling in Bhuj.
          </p>

          <Button className="rounded-full px-12 py-6 text-lg bg-[#E6C79C] text-[#0F172A] hover:bg-[#D4AF7F] transition shadow-[0_0_30px_rgba(230,199,156,0.4)]">
            Check Availability
          </Button>
        </motion.div>
      </section>

      {/* Elegant Divider */}
      <div className="flex justify-center">
        <div className="w-24 h-[2px] bg-[#E6C79C] opacity-60"></div>
      </div>

      {/* Services */}
      <section className="py-32 px-6 bg-[#0F172A]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-[#E6C79C]">
            Our Signature Services
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {["Wedding Photography", "Pre-Wedding Shoots", "Premium Designer Albums"].map((title, i) => (
              <Card
                key={i}
                className="rounded-3xl bg-[#111827] border border-[#1F2937] shadow-xl hover:shadow-[0_0_30px_rgba(230,199,156,0.25)] hover:-translate-y-3 transition duration-500"
              >
                <CardContent className="p-12 text-center">
                  <Camera className="mx-auto mb-6 text-[#E6C79C]" size={36} />
                  <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Elegant visuals with artistic composition and premium finishing quality.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-24 h-[2px] bg-[#E6C79C] opacity-60"></div>
      </div>

      {/* Gallery */}
      <section className="py-32 px-6 bg-[#111827]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-[#E6C79C]">
            Portfolio Showcase
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group h-72 rounded-2xl bg-[#1F2937] overflow-hidden relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#374151] group-hover:scale-110 transition duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm font-medium">
                  Photo {item}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-24 h-[2px] bg-[#E6C79C] opacity-60"></div>
      </div>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[#0F172A]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-[#E6C79C]">
            Client Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Best wedding photographer in Bhuj.",
              "Very professional and punctual service.",
              "Premium album quality and creative photography."
            ].map((review, i) => (
              <Card
                key={i}
                className="rounded-3xl bg-[#111827] border border-[#1F2937] shadow-xl hover:shadow-[0_0_25px_rgba(230,199,156,0.25)] transition duration-500"
              >
                <CardContent className="p-10 text-center">
                  <Star className="mx-auto text-[#E6C79C] mb-5" />
                  <p className="text-gray-400 text-sm leading-relaxed">"{review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="py-28 text-center border-t border-[#1F2937] bg-[#111827]">
        <p className="flex items-center justify-center gap-2 text-gray-400">
          <MapPin size={18} /> Bhuj, Gujarat
        </p>

        <p className="flex items-center justify-center gap-2 font-semibold text-xl mt-6 text-[#E6C79C] drop-shadow-[0_0_10px_rgba(230,199,156,0.3)]">
          <Phone size={22} /> 9825307304
        </p>

        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://wa.me/919825307304"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:scale-125 transition"
          >
            <MessageCircle size={26} />
          </a>
          <a href="#" className="text-[#E1306C] hover:scale-125 transition">
            <Instagram size={26} />
          </a>
          <a href="#" className="text-[#1877F2] hover:scale-125 transition">
            <Facebook size={26} />
          </a>
          <a href="#" className="text-[#E60023] hover:scale-125 transition">
            <Pin size={26} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm bg-[#0F172A] border-t border-[#1F2937]">
        © {new Date().getFullYear()} Shri Hari Digital Photo Art Studio | Bhuj. All Rights Reserved.
      </footer>

    </div>
  );
}
