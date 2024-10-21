import Carousel from "./Carousel";
const Hero = () => {
  return (
    <section className="text-center mb-12">
      <Carousel>
        <div>
          <img
            src="https://www.w3schools.com/howto/img_snow_wide.jpg"
            alt="img1"
          />
        </div>
        <div>
          <img
            src="https://www.w3schools.com/howto/img_woods_wide.jpg"
            alt="img2"
          />
        </div>
        <div>
          <img
            src="https://www.w3schools.com/howto/img_lights_wide.jpg"
            alt="img3"
          />
        </div>
      </Carousel>
      <h2 className="text-4xl font-bold mb-4">
        Servicio de Apoyo a la Integración Escolar
      </h2>
      <p className="text-lg mb-6">
        Abordaje Interdisciplinario del niño, adolescente y familia
      </p>
      <button className="bg-purple-600 text-white py-2 px-6 rounded">
        Contactanos
      </button>
    </section>
  );
};

export default Hero;
