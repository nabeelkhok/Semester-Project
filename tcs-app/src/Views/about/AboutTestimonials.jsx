const testimonials = [
  {
    text: "TCS is the most reliable courier service we've used! Fast & secure!",
    author: "Sarah Wilson",
  },
  {
    text: "Excellent customer support and timely delivery!",
    author: "Mark Thompson",
  },
  // add more testimonials here
];

function AboutTestimonials() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {testimonials.map(({ text, author }, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
              <blockquote className="text-xl italic text-gray-700 mb-4">"{text}"</blockquote>
              <p className="font-bold text-lg">- {author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
