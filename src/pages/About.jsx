import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-6 jumbo-content">
            <h1>About Us</h1>
            <p>i-Lab is an integrated system that can support practicum activities in the Department of Informatics at the University of Muhammadiyah Malang, both for practitioners, lecturers and assistants.</p>
            <p>i-Lab is the work of students of the University of Muhammadiyah Malang and has been around since 2012 and has gone through many changes since then i-Lab merupakan sistem terintegrasi yang dapat menunjang kegiatan praktikum jurusan Informatika Universitas Muhammadiyah Malang, baik untuk praktikan, dosen maupun asisten.</p>
            <p>i-Lab merupakan karya mahasiswa Universitas Muhammadiyah Malang dan sudah ada sejak tahun 2012 dan sudah banyak melalui perubahan sejak saat itu</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;