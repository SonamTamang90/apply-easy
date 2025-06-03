import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "/assets/user1.jpg",
    quote:
      "ApplyEasy made my job search so much easier. The AI suggestions helped me land more interviews!",
  },
  {
    name: "Priya Patel",
    avatar: "/assets/user2.jpg",
    quote:
      "I love the cover letter generator. It saved me hours and got me noticed by recruiters.",
  },
  {
    name: "Michael Chen",
    avatar: "/assets/user3.jpg",
    quote:
      "The dashboard kept all my applications organized. Highly recommend for any job seeker!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center p-6 text-center shadow-md h-full"
            >
              <Avatar className="w-16 h-16 mb-4">
                <AvatarImage src={t.avatar} alt={t.name} />
                <AvatarFallback>{t.name[0]}</AvatarFallback>
              </Avatar>
              <p className="text-muted-foreground italic mb-4">“{t.quote}”</p>
              <div className="font-semibold text-lg">{t.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
