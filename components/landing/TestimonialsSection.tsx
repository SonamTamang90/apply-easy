import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Container from "../layout/Container";
import SectionIntro from "./SectionIntro";
import { FadeIn, FadeInStagger } from "./FadeIn";

const featuredTestimonial = {
  body: "ApplyEasy completely transformed my job search process. The AI-powered cover letter generator helped me craft personalized applications in minutes instead of hours. I landed 3 interviews in my first week using the platform and got my dream job at a tech startup!",
  author: {
    name: "Sarah Chen",
    handle: "sarahchen_dev",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logoUrl:
      "https://tailwindui.starxg.com/plus/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "The application tracking dashboard is incredible. I can see exactly where each application stands and never miss a follow-up again. Got organized and got hired!",
        author: {
          name: "Alex Rodriguez",
          handle: "alexrodriguez",
          imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "ApplyEasy's resume optimization suggestions helped me get past ATS filters. Finally started getting responses after months of silence.",
        author: {
          name: "Emily Johnson",
          handle: "emilyjohnson",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "The company research feature helped me nail every interview. Knowing their recent news and company culture made all the difference.",
        author: {
          name: "James Wilson",
          handle: "jameswilson",
          imageUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "The interview prep feature with AI-generated questions for specific companies was a game changer. Felt confident walking into every interview.",
        author: {
          name: "Marcus Thompson",
          handle: "marcusthompson",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "As a career changer, the skill gap analysis and course recommendations were exactly what I needed. Landed a role in tech within 6 months.",
        author: {
          name: "Priya Patel",
          handle: "priyapatel",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "The job matching algorithm is spot on. It suggested positions I never would have found on my own, including the one I ultimately accepted.",
        author: {
          name: "David Kim",
          handle: "davidkim",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Saved me 10+ hours per week on applications. The bulk apply feature with personalized cover letters is pure magic.",
        author: {
          name: "Jennifer Liu",
          handle: "jenniferliu",
          imageUrl:
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "The LinkedIn integration made networking effortless. Connected with 50+ professionals in my field and got 3 referrals in the first month.",
        author: {
          name: "Kevin Zhang",
          handle: "kevinzhang",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "The salary negotiation templates and market data helped me negotiate a 25% salary increase. Best investment I've made in my career.",
        author: {
          name: "Michael Foster",
          handle: "michaelfoster",
          imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Remote work filtering saved me so much time. Only saw jobs that matched my work-from-home requirements. No more wasted applications.",
        author: {
          name: "Sofia Rodriguez",
          handle: "sofiarodriguez",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "The automated follow-up reminders kept me organized and professional. Never missed a thank-you email or follow-up again.",
        author: {
          name: "Rachel Green",
          handle: "rachelgreen",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "The portfolio integration feature helped me showcase my work directly in applications. Landed my first design role at a major agency.",
        author: {
          name: "Tyler Johnson",
          handle: "tylerjohnson",
          imageUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "The AI-powered job recommendations were incredibly accurate. Found opportunities I never knew existed in my field.",
        author: {
          name: "Amanda Davis",
          handle: "amandadavis",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <SectionIntro title=" What Our Users Say" className="mb-16">
        Real stories from professionals who transformed their job search with
        ApplyEasy
      </SectionIntro>
      <Container>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <FadeInStagger className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials
              .flat(2)
              .slice(0, 9)
              .map((testimonial) => (
                <FadeIn
                  key={testimonial.author.handle}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                    <blockquote className="text-gray-900">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img
                        alt=""
                        src={testimonial.author.imageUrl}
                        className="size-10 rounded-full bg-gray-50"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.author.name}
                        </div>
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </FadeIn>
              ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  );
}
