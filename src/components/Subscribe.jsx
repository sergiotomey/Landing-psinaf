const Subscribe = () => {
  return (
    <section className="text-center py-8">
      <h2 className="text-3xl font-bold mb-6">
        Move work forward from anywhere
      </h2>
      <form className="flex justify-center space-x-4">
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 rounded px-4 py-2"
        />
        <button className="bg-purple-600 text-white py-2 px-6 rounded">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
