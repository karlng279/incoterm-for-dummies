import Link from "next/link";
import {
  BookOpen,
  Search,
  GitCompare,
  CheckCircle,
  Compass,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Educational Content",
    description:
      "Plain-language explanations of all 11 Incoterms 2020 with visual diagrams",
    href: "/learn",
  },
  {
    icon: Search,
    title: "Quick Reference",
    description: "Look up any of the 11 Incoterms with instant search",
    href: "/reference",
  },
  {
    icon: GitCompare,
    title: "Compare",
    description: "Side-by-side comparison of 2-3 Incoterms to see differences",
    href: "/compare",
  },
  {
    icon: CheckCircle,
    title: "Interactive Quiz",
    description:
      "Test your knowledge with fun quizzes and learn from mistakes",
    href: "/quiz",
  },
  {
    icon: Compass,
    title: "Find Right Term",
    description:
      "Answer simple questions to find the best Incoterm for your situation",
    href: "/find",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mesh-gradient relative overflow-hidden flex flex-col items-center justify-center px-4 py-24 text-center md:py-32 lg:py-40">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-forwards">
          <h1 className="max-w-4xl text-5xl font-bold tracking-tight font-serif text-slate-900 md:text-6xl lg:text-7xl mb-6">
            Learn Incoterms the{" "}
            <span className="text-primary relative inline-block">
              Easy Way
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-700 md:text-2xl leading-relaxed">
            Master international trade terms with interactive lessons, visual
            guides, and practical tools. Everything you need to understand
            Incoterms 2020.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-1" asChild>
              <Link href="/learn">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base backdrop-blur-sm bg-white/50 border-white/40 hover:bg-white/80 transition-all hover:-translate-y-1" asChild>
              <Link href="/find">Find Your Incoterm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50/50 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-3xl font-bold font-serif md:text-5xl text-slate-900">
            Everything You Need to Master Incoterms
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className={`animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-forwards`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="glass-card h-full border-0">
                    <CardHeader>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-slate-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* What are Incoterms Section */}
      <section className="px-4 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Global Trade Standards
          </div>
          <h2 className="text-3xl font-bold font-serif md:text-5xl text-slate-900 mb-8">
            What are Incoterms?
          </h2>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Incoterms (International Commercial Terms) are a set of 11
            internationally recognized rules published by the International
            Chamber of Commerce (ICC). They define the responsibilities of
            sellers and buyers in international trade transactions, specifying
            who is responsible for shipping, insurance, and tariffs.
          </p>
          <div className="mt-10">
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-slate-300 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all" asChild>
              <Link href="/learn">
                Explore All 11 Incoterms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Quick Stats Section */}
      <section className="px-4 py-20 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            <div className="text-center group">
              <div className="text-4xl font-black text-slate-900 md:text-5xl font-serif mb-2 group-hover:scale-110 transition-transform duration-300">
                11
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Incoterms 2020
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-slate-900 md:text-5xl font-serif mb-2 group-hover:scale-110 transition-transform duration-300">
                7
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Any Transport Mode
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-slate-900 md:text-5xl font-serif mb-2 group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Sea Transport Only
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black text-slate-900 md:text-5xl font-serif mb-2 group-hover:scale-110 transition-transform duration-300">
                45+
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Quiz Questions
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
