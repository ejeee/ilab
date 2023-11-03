import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../components/img/hero.jpg";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div class="card text-bg-dark">
        <img src={Logo} class="card-img" alt="" />
        <div class="card-img-overlay">
          <h1 class="card-text pt-5 fw-semibold"> Selamat Datang </h1>
          <p class="card-text-sub pb-5">
            {" "}di website Praktikum Pemrograman Web{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
