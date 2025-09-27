import Image from "next/image";
import Container from "../layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon, MinusIcon } from "lucide-react";

const faqs = [
  {
    question: "How does ApplyEasy's AI optimize my resume and cover letters?",
    answer:
      "Our AI analyzes job descriptions and tailors your resume and cover letters to match specific requirements. It identifies key skills, keywords, and experiences that employers are looking for, then optimizes your documents to increase your chances of passing ATS filters and getting noticed by hiring managers.",
  },
  {
    question: "Is my personal information and documents secure on ApplyEasy?",
    answer:
      "Absolutely. We use enterprise-grade encryption to protect all your data. Your resumes, cover letters, and personal information are stored securely and never shared with third parties without your explicit consent. We comply with industry-standard security protocols to ensure your privacy.",
  },
  {
    question: "Can I track my job applications and their status?",
    answer:
      "Yes! ApplyEasy provides a comprehensive dashboard where you can track all your applications in real-time. Monitor application status, set follow-up reminders, schedule interviews, and manage your entire job search pipeline from one centralized location.",
  },
  {
    question: "What types of job positions and industries does ApplyEasy support?",
    answer:
      "ApplyEasy works across all industries and job levels, from entry-level positions to executive roles. Whether you're in tech, healthcare, finance, marketing, or any other field, our AI adapts to industry-specific requirements and helps optimize your applications accordingly.",
  },
  {
    question: "How much does ApplyEasy cost and what's included?",
    answer:
      "We offer flexible pricing plans to suit different needs. Our basic plan includes resume optimization and application tracking, while premium plans add features like AI cover letter generation, interview preparation, and priority support. Start with our free trial to explore all features risk-free.",
  },
  {
    question: "How quickly can I see results after using ApplyEasy?",
    answer:
      "Most users see improved response rates within the first week of using our optimized documents. Our AI instantly enhances your resume and cover letters, and many users report getting interview calls within 2-3 days of applying with their optimized materials.",
  },
];

const FAQSection = () => {
  return (
    <section className="w-full py-16 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="max-w-xl text-3xl md:text-[48px] font-medium mb-6 font-heading mx-auto">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-700 max-w-lg mx-auto">
            Can't find the answer you're looking for? Reach out to our{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              customer support
            </a>{" "}
            team.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Image
              src="/image-3.png"
              alt="FAQ illustration"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="mt-10 space-y-6">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`} className={`pt-6 ${index !== faqs.length - 1 ? 'border-b border-gray-300 pb-6' : 'border-none'}`}>
                    <dt>
                      <AccordionTrigger className="group flex w-full items-start justify-between text-left text-gray-900 hover:no-underline py-0 [&>svg]:hidden">
                        <span className="text-base/7 font-semibold">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-6 group-data-[state=open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-6 group-data-[state=closed]:hidden"
                          />
                        </span>
                      </AccordionTrigger>
                    </dt>
                    <AccordionContent asChild className="pb-0">
                      <dd className="mt-2 pr-12">
                        <p className="text-base/7 text-gray-600">{faq.answer}</p>
                      </dd>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
