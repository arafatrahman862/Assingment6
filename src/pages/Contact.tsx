import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section className="relative bg-black text-white">
 
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20" />

  
      <div className="relative z-10">
       
        <div className="text-center py-16 px-4">
          <h2 className="text-3xl font-bold text-orange-500">CONTACT US</h2>
          <p className="mt-2 text-gray-300">
            Get in touch with our support team for any inquiries.
          </p>
        </div>

     
        <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6 pb-16">
       
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-orange-500/30 shadow-xl hover:scale-[1.02] transition-transform">
              <CardContent className="flex items-center gap-4 p-6">
                <Phone className="text-orange-500 w-6 h-6" />
                <div>
                  <h4 className="text-sm font-semibold text-orange-500">CALL US</h4>
                  <p className="text-gray-300">+8801627062547</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-green-500/30 shadow-xl hover:scale-[1.02] transition-transform">
              <CardContent className="flex items-center gap-4 p-6">
                <MessageCircle className="text-green-500 w-6 h-6" />
                <div>
                  <h4 className="text-sm font-semibold text-green-500">WHATSAPP</h4>
                  <p className="text-gray-300">+8801627062547</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 border border-blue-500/30 shadow-xl hover:scale-[1.02] transition-transform">
              <CardContent className="flex items-center gap-4 p-6">
                <Mail className="text-blue-500 w-6 h-6" />
                <div>
                  <h4 className="text-sm font-semibold text-blue-500">EMAIL</h4>
                  <p className="text-gray-300">arafatrahman862@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

       
          <Card className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-orange-500/30 shadow-2xl hover:scale-[1.01] transition-transform">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-orange-500 mb-4">
                WOULD YOU LIKE TO DISCUSS?
              </h3>
              <form className="space-y-4">
                <Input
                  placeholder="Full Name"
                  className="bg-neutral-900/70 border border-neutral-700 text-white focus-visible:ring-orange-500"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-neutral-900/70 border border-neutral-700 text-white focus-visible:ring-orange-500"
                />
                <Textarea
                  placeholder="Type your question here..."
                  className="bg-neutral-900/70 border border-neutral-700 text-white focus-visible:ring-orange-500"
                  rows={5}
                />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                  Send Message →
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
