

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router";

const faqs = [
  {
    q: "Why are the costs higher than everyone?",
    a: "Our pricing reflects service quality, driver availability, and real-time demand. During peak hours, costs may increase slightly.",
  },
  {
    q: "What is the safety measures?",
    a: "Yes, all rides are monitored with advanced tracking to ensure both safety and accountability for riders and drivers.",
  },
  {
    q: "What is your name?",
    a: "We are RideX – your trusted ride-sharing partner, ensuring fast, safe, and reliable rides.",
  },
];

export default function FaqSection() {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((item) =>
    item.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="container mx-auto">
       
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-400">
            Find answers to common questions about our services.
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80"
              alt="FAQ help"
              className="w-full h-full object-cover"
            />
          </div>

        
          <div>
            <Input
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-6"
            />

            <Accordion type="single" collapsible className="w-full space-y-2">
              {filteredFaqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-white/20 rounded-lg px-3"
                >
                  <AccordionTrigger className="text-left font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        
        <div className="mt-16 text-center bg-gradient-to-r from-black/80 to-black/60 py-10 rounded-lg ">
          <h3 className="text-xl font-bold mb-2">ASK A QUESTION</h3>
          <p className="text-gray-300 mb-4">
            Can’t find what you’re looking for? Ask us anything about our rides,
            pricing, or services and our team will respond promptly.
          </p>
          <Button variant="destructive" className="px-6">
           <Link to="contact"> Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
