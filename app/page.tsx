import { Button } from './components/ui/button';
import Image from 'next/image';
import { Zap, BookOpen, Tags } from 'lucide-react';
import { FeaturedBooks } from './featured-books';

const features = [
  {
    icon: <Zap className="w-12 h-12 text-purple" />,
    title: 'Easy and Quick',
    description: 'Get access to the book you purchased online instantly.',
  },
  {
    icon: <BookOpen className="w-12 h-12 text-purple" />,
    title: '10,000+ Books',
    description: 'Library has books in all your favourite categories.',
  },
  {
    icon: <Tags className="w-12 h-12 text-purple" />,
    title: 'Affordable',
    description: 'Get your hands on popular books for as little as $10.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl text-purple">
            Australia&apos;s most awarded
            <br />
            online library platform
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl mt-4">
            Find your dream book with{' '}
            <span className="text-purple">Library</span>
          </h2>

          <div className="mt-6">
            <Button
              size="lg"
              className="bg-purple hover:bg-purple/90 text-lg px-8"
            >
              Browse books
            </Button>
          </div>

          <div className="relative w-full max-w-[800px] h-[400px] mt-8">
            <Image
              src="/assets/Undraw_Books.svg"
              alt="Girl reading on stack of books"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold mb-16">
            Why choose <span className="text-purple">Library</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="p-4 rounded-xl border border-purple/20 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedBooks />
    </div>
  );
}
