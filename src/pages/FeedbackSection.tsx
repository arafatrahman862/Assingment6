
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const feedbacks = [
  {
    name: "Rahim Uddin",
    role: "Frequent Rider",
    message:
      "RideX makes my daily commute so easy. The drivers are professional and I always feel safe.",
  },
  {
    name: "Ayesha Khan",
    role: "Student",
    message:
      "Booking is super fast and affordable. I love how reliable the service is, even late at night!",
  },
  {
    name: "Tanvir Ahmed",
    role: "Driver Partner",
    message:
      "Driving with RideX gives me flexibility and a steady income. The app is smooth and easy to use.",
  },
  {
    name: "Sadia Akter",
    role: "Business Professional",
    message:
      "The real-time tracking is amazing. I always know exactly when my ride will arrive.",
  },
];

export default function FeedbackSection() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Real experiences from our riders and drivers. Trusted by thousands of
          happy customers.
        </p>

   <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
          <CarouselContent className="-ml-4">
            {feedbacks.map((fb, i) => (
              <CarouselItem
                key={i}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="flex flex-col h-full p-6">
                    <p className="text-gray-300 italic mb-4">“{fb.message}”</p>
                    <div className="mt-auto text-left">
                      <h4 className="font-semibold">{fb.name}</h4>
                      <p className="text-sm text-orange-500">{fb.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
