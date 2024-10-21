const Benefits = () => {
  return (
    <section className="grid grid-rows-3 gap-6 mb-12">
      <div className="bg-red-100 p-4 rounded">
        <h4 className="text-xl font-bold mb-2">Be Organized</h4>
        <p className="mb-2">
          Bring traditional files and shortcuts together in one place.
        </p>
      </div>
      <div className="bg-blue-100 p-4 rounded">
        <h4 className="text-xl font-bold mb-2">Stay Focused</h4>
        <p className="mb-2">Save time by finding files easily.</p>
      </div>
      <div className="bg-purple-100 p-4 rounded">
        <h4 className="text-xl font-bold mb-2">Get in Sync</h4>
        <p className="mb-2">Coordinate your team with tools that sync daily.</p>
      </div>
    </section>
  );
};

export default Benefits;
