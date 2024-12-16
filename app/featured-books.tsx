import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from './components/ui/card';

const books = [
  {
    title: 'Atomic Habits',
    price: 39.0,
    rating: 5,
    image: '/assets/atomic habits.jpg',
  },
  {
    title: "Can't Hurt Me",
    price: 29.0,
    rating: 5,
    image: '/assets/david goggins.jpeg',
  },
  {
    title: 'Crack the Coding Interview',
    price: 32.0,
    rating: 5,
    image: '/assets/crack the coding interview.png',
  },
  {
    title: 'Sell Or Be Sold',
    originalPrice: 70.0,
    price: 12.5,
    rating: 5,
    image: '/assets/deep work.jpeg',
  },
];

export function FeaturedBooks() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-16">
          Featured <span className="text-purple">Books</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="aspect-[3/4] relative">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover rounded-md"
                    priority
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center text-center">
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(book.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                {book.originalPrice && (
                  <span className="line-through text-gray-400 mr-2">
                    ${book.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="font-bold">${book.price.toFixed(2)}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
