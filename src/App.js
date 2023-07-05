// import logo from './logo.svg';
import './App.css';
import bg from './images/bg.svg';
import banner from './images/mockup.svg';
import perfil from './images/aqui.png';
import perfillink from './images/linkedin.png';
import perfilInsta from './images/instagram.png';
import perfilGit from './images/github.png';
import React, {useEffect, useState } from 'react';
import calculadora from './images/calculadora.png'
import site from './images/pçao.png'
import htmlfoto from './images/html.png'
import cssfoto from './images/css.png'
import jsfoto from './images/jv.png'
import MeuMapa from './MeuMapa';

// import MyForm from './Mensagem.js'; 

function App() {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState([])
 useEffect(()=>{

        fetch('data.json')
        .then(a => a.json())
        .then(b => {
            console.log(b)
            setData(b)})
        
    },[])


  
    const abrirModal = () => {
        setModal(!modal);
    };


  return (
    
    <div className="App"> 
    {
      modal?
      <div className='contentContato'>
        <div className='redes'>
          

              <div className='imgRedes' style={{ backgroundImage: `url(${perfilInsta})`}}></div><a href="https://www.instagram.com/angelicaaalmeidaa/" target="_blank">Instagram</a>
              <div className='imgRedes' style={{ backgroundImage: `url(${perfilGit})`}}></div><a href="https://github.com/angelicaaaaaaaaaaaaaaaaa" target="_blank">GitHub</a>
       
              <div className='imgRedes' style={{ backgroundImage: `url(${perfillink})`}}></div><a href="https://www.linkedin.com/in/angelica-almeida-763a5019a/>" target="_blank">Linkedin</a>
       
        </div>
          
      {/* <MyForm></MyForm> */}
      </div>
      
      :
      <div></div>
  }
  

      <section className="main" style={{backgroundImage: `url(${bg})`}}>
      <div className="itensMenu">
                       <a onClick={()=>abrirModal()} href="#" className="contactBtn">Entre em contato</a>
                   </div>
           
           <div className="center">
            
               <div className="mockup">
                   <h1> Conheça uma pouco sobre o meu trabalho.</h1>
                   <p>E veja resultados significativos dia após dia</p>
                   <br/>
            
                   <div className='imgmk' style={{backgroundImage: `url(${banner})`}} >
                    <div className='contentInformacoes'> 
                      <div className='sobreMim'>
                        <div className='alinhar'>
                          <div className='perfil' style={{backgroundImage: `url(${perfil})`}}></div>
                        </div>
                          <div className='corpoPort'><p>
                          Sou Angélica, uma Dev Júnior apaixonada por tecnologia e por transformar ideias em soluções práticas. Com experiência em desenvolvimento web com HTML, CSS, JavaScript.</p>
                        
                        
                        </div>
                      </div>
                    <div className='entreContato'>
                    
                            <div className='skill' style={{backgroundImage: `url(${htmlfoto})`}}>
                            </div> <span>Html</span>
                            <div className='skill' style={{backgroundImage: `url(${cssfoto})`}}>
                            </div> <span>Css</span>
                             <div className='skill'style={{backgroundImage: `url(${jsfoto})`}}>
                          </div> <span>JavaScript</span>
                    </div>
                    </div>
                   </div>
               </div>
        
            </div> 
             
       </section>
      
        <div className='projetos'>
          {/* colocar os links no atributo href do a */}  
            <div className='projeto' style={{backgroundImage: `url(${calculadora})`}} >
              <a href="https://angelicaaaaaaaaaaaaaaaaa.github.io/calculadora/" target="_blank">Calculadora</a>
              <div className='inform'>{data[0]?.nome}__{data[0]?.texto}</div>
              </div> 
              
            <div className='projeto' style={{backgroundImage: `url(${site})`}} >
              <a href=" https://angelicaaaaaaaaaaaaaaaaa.github.io/PRIMEIRO-PROJETO/" target="_blank">Confeitaria</a>
              <div className='inform'>{data[1]?.nome}__{data[1]?.texto}</div>
              </div>
              
            
        </div>
      <div id='pais'  className='pais'>
                    <MeuMapa></MeuMapa>
                  
        
       </div>
    </div>
  );
}

export default App;
