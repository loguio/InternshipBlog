import './App.css';
import img from "./Photo_Marius.jpg";
function App() {
  return (
    <div className="App">
      <div className="App-header">
       <p class="headText">A propos de moi</p>
       <img src={img} alt="Marius Bourse" className='imgMe'></img>
       <p>Salut, je m'appel Marius Bourse et je suis étudiant en école d'informatique depuis 2 ans maintenant, je pratique le développement depuis le lycée, là où j'ai pus faire un Bac STI2D à Livet dans le centre de Nantes. Je suis actuellement en 3ème année en alternance, je suis toujours a la recherche de nouvelles compétences afin de m'améliorer, que ce soit dans de nombreux langages ou des connaissance plus aiguisé sur un langage en particulier je veux avant tout devenir meilleur. A l'aise sur du python, java, c# jusqu'au javaScript ou le golang, je mène des petits projets personnel sur mon temps libre quand c'est possible et après de nombreux projet fait en cours, je suis prêt à travailler sur de nouveaux projet donc n'hésitez pas à me contacter ! Sur ce site vous pourrez retrouver toutes les informations de ma vie professionnel ainsi que mes projets réalisé par le passé.</p>
      </div>
    </div>
  );
}

export default App;
