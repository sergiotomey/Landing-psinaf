const Solutions = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="p-6 bg-white rounded shadow">
        <h3 className="text-2xl font-bold mb-4">Nosotros</h3>
        <p className="text-sm mb-4">
          PSINAF, como institución, se crea en 2003 entendiendo la
          interdisciplina como único camino para el abordaje de las diferentes
          problemáticas recibidas en nuestros consultorios individuales, desde
          1989...
        </p>
        <img src="/pexels-niezam-16516.jpg" alt="" />
        <a href="#" className="text-purple-600 underline">
          Sobre Nosotros
        </a>
      </div>
      <div className="p-6 bg-white rounded shadow">
        <img
          src="/pexels-kobeboy-1516440.jpg"
          alt="Workspace Image"
          className="w-full rounded"
        />
        <a href="#" className="text-purple-600 underline">
          Integracion Escolar
        </a>
      </div>
    </section>
  );
};

export default Solutions;
