import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import InfoPc from './InfoPc';
import { useFetch } from './useFetch';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
      <center><h1>Desarrollo de Apliaciónes Web - Grupo 8</h1></center>
        <Link to="/">
          <button class="boton"><strong>Inicio</strong></button>
        </Link>
        <Link to="/infopc">
          <button className="boton"><strong>Detalles PC</strong></button>
        </Link>
        <hr className='linea'/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infopc" element={<InfoPc />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useFetch(
    `https://api.plos.org/search?q=title:${searchTerm}`
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenAbstract = (abstract, title_display) => {
    // Abrir el abstract en una nueva ventana
    const newWindow = window.open('', '_blank');

    newWindow.document.write(`<html>
    <style>
    html {
      height: 100%;
    }
    body{
      background-image: url('https://img.freepik.com/vector-premium/fondo-estructura-molecular-plantilla-ciencia_230610-332.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
    .boton {
      border: 1px solid #2e518b; 
      padding: 10px; 
      background-color: #2e518b; 
      color: #ffffff; 
      text-decoration: none;
      text-transform: uppercase; 
      font-family: 'Helvetica', sans-serif; 
      border-radius: 50px; 
      }
      .p{
        text-align: justify;
        padding: 35px;
        border-width: 0;
        background-color: white;
      }
   </style>
      <body>
      <br/>
      <center><h1 style="color:black">Artículo: ${title_display}</h1></center>
      <div class='p'> ${abstract} </div>
      <center><button id="returnButton" class='boton'>Regresar</button></center>
      </body>
    </html>`);
    newWindow.document.close();

    // Llamar a handleReturn al hacer clic en el botón "Regresar"
    newWindow.document.getElementById('returnButton').addEventListener('click', () => {
      newWindow.close(); // Cierra la ventana actual al regresar a app.jsx
    });
  };

  const handleDir = () => {
    // Abrir el abstract en una nueva ventana
    const newWindow = window.open('', '_blank');

    newWindow.document.write(`<html>
    <style>
    body{
    background-image: url('https://img.freepik.com/vector-premium/fondo-estructura-molecular-plantilla-ciencia_230610-332.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
    .boton {
      border: 1px solid #2e518b; 
      padding: 10px; 
      background-color: #2e518b; 
      color: #ffffff; 
      text-decoration: none;
      text-transform: uppercase; 
      font-family: 'Helvetica', sans-serif; 
      border-radius: 50px; 
      }
      html {
        height: 100%;
      }
      table {
        background-color: white;
      }
    </style>
      <body>
      <center>
      </br>
        <table border={1}>
          <thead>
            <tr>                
              <th style="color:black">Título del artículo</th>
            </tr>
          </thead>
        </center>
          <tbody>
          ${data?.response?.docs.map((article) => `
            <tr key=${article.id}>
              <td>${article.title_display}</td>
              <td>                  
                <a href="${apiUrl}${article.id}" target="_blank" rel="noopener noreferrer">
                  ${apiUrl}${article.id}
                </a>
              </td>
            </tr>
          `).join('')}
        </tbody>
        </table>
        </br>
       <center><button class='boton' id="returnButton">Regresar</button></center>
      </body>
    </html>`);
    newWindow.document.close();

    // Llamar a handleReturn al hacer clic en el botón "Regresar"
    newWindow.document.getElementById('returnButton').addEventListener('click', () => {
      newWindow.close(); // Cierra la ventana actual al regresar a app.jsx
    });
  };

  const apiUrl = `https://journals.plos.org/plosone/article?id=`
  
  return (
    <div className='App'>
      <h1>Artículos Científicos PLOS API</h1>
      <input className='Buscador'
        type='text'
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Enter search term...'
      />

      <br/>
      <br/>
      <button className='boton' onClick={() => handleDir()}> <strong>DIRECCIONES</strong></button>
      <br/>
      <br/>
      <div className='card'>
        <table border={1}>
            <thead>
              <tr>
                <th className='c'>ID</th>
                <th className='c'>Journal</th>
                <th className='c'>Eissn</th>
                <th className='c'>Publication Date</th>
                <th className='c'>Article Type</th>
                <th className='c'>Author Display</th>
                <th className='c'>Title Display</th>
                <th className='c'>Score</th>
                <th className='c'>Actions</th>
              </tr>
            </thead>

          <tbody>
            {error && <li className='c'>Error: {error.message}</li>}
            {loading && <li className='c'>Loading...</li>}
            {data?.response?.docs.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.journal}</td>
                <td>{article.eissn}</td>
                <td>{article.publication_date}</td>
                <td>{article.article_type}</td>
                <td>{article.author_display}</td>
                <td>{article.title_display}</td>
                <td>{article.score}</td>
                <td>
                  <button className='boton' onClick={() => handleOpenAbstract(article.abstract, article.title_display)}> <strong>Ver Resumen</strong></button>                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;