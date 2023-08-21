import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./About.css";
const AboutUs = () => {
  return (
   <div className="wrapper">
      {/* Header Start */}
      <header className="header-container">
        <Header />
      </header>
      {/* Header End */}

      {/* Main Start */}
      <main className="main-container">
      <div className="nosotros">
          <div className="img-cont">
            <img className="img-nosotros" src="https://infopastosyforrajes.com/wp-content/uploads/2019/09/00d7bd9de20fa1a4d68a19256c6dd5f8d7708d4d_hq.gif" alt="" />
          </div>
            <p className="texto">Bienvenidos a "Antojitos al Paso", una heladería dedicada a deleitar tus sentidos con los sabores más exquisitos y auténticos del helado nacional. Nos enorgullece compartir nuestra pasión por los helados y ofrecer a nuestros clientes una experiencia única llena de sabor y calidad. Desde nuestros inicios, nos hemos comprometido a resaltar la riqueza de los productos locales y a brindar momentos dulces e inolvidables a cada persona que visita nuestra heladería.</p> 
          <div class="flex-container" >
            <div class="flex-item-left" >
              <img className="img-about" src="https://media.tenor.com/XcvtQKUQTTEAAAAC/helado-rico.gif" alt="" />
            </div>
            <div class="flex-item-right" >
              <h2 >¿Quiénes somos?</h2>
              <p className="texto">Somos "Antojitos al Paso", una heladería apasionada por ofrecer a nuestros clientes experiencias únicas y deliciosas a través de nuestros helados artesanales. Nos destacamos por resaltar la riqueza y autenticidad de los sabores nacionales, utilizando ingredientes frescos y de alta calidad provenientes de productores locales.</p>
            </div>
          </div>
          <div class="flex-container2" >
            <div class="flex-item-left" >
              <img className="img-about" src="https://i.gifer.com/origin/e9/e937a55fc0af739c274c9575149cd99f.gif" alt="" />   
              
            </div>
            <div class="flex-item-right" >
            <h2>Misión</h2>
              <p className="texto">En "Antojitos al Paso", nuestra misión es fomentar el orgullo y el disfrute de los sabores nacionales a través de nuestros helados artesanales. Nos esforzamos por utilizar ingredientes frescos y de alta calidad, provenientes de productores locales, para crear helados únicos que resalten la autenticidad de nuestra cultura y tradiciones. Buscamos compartir la alegría y la satisfacción que brinda cada bocado de nuestros helados, haciendo de cada visita una experiencia memorable para nuestros clientes. </p> 
            </div>
          </div>
          <div class="flex-container" >
            <div class="flex-item-left" >
              <img className="img-about" src="https://i.gifer.com/7cfD.gif" alt="" />
            </div>
            <div class="flex-item-right" >
              <h2>Visión</h2>
              <p className="texto"><br/>Nuestra visión es convertirnos en la heladería de referencia en la región, reconocida por la excelencia en la elaboración de helados con ingredientes nacionales y el servicio excepcional que ofrecemos a nuestros clientes. Nos esforzamos por innovar constantemente, creando sabores sorprendentes y adaptándonos a las preferencias cambiantes de nuestros clientes. Aspiramos a ser una empresa sostenible y comprometida con nuestra comunidad, apoyando a los productores locales y promoviendo el desarrollo económico y social en nuestra región.</p>
            </div>
          </div>
      </div>

      </main>
      {/* Main End*/} 

      {/* Footer Start */}
      <footer className="footer-container">
        <Footer />
      </footer>
      {/* Footer End*/}
    </div>
    
  );
};

export default AboutUs;