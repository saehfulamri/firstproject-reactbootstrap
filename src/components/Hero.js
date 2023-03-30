import Carousel from "react-bootstrap/Carousel";
import Hero1 from "./../assets/hero1.png";
import Hero2 from "./../assets/hero2.png";
import Hero3 from "./../assets/hero3.png";
import Hero4 from "./../assets/hero4.png";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero1} alt="First slide" />
        <Carousel.Caption>
          <h3>Diskusi Siswa</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Kegiatan Luar Kelas</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Diskusi Panel</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero4} alt="Third slide" />

        <Carousel.Caption>
          <h3>Kerja Tim</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
