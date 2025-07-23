import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuizSection from "@/components/QuizSection";
import FilieresSection from "@/components/FilieresSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuizSection />
        <FilieresSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
