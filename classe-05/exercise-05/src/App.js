import './App.css';
import AlertImage from './assets/alert.svg';
import CookieImage from './assets/cookie.svg';
import Card from './components/Card';

const buttons = [
  {
    id: 1,
    src: CookieImage,
    alt: 'imagem de um cookie',
    p: 'Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.',
    textButton: 'Tudo bem!',
    colorButton: '#ED6755'
  },
  {
    id: 2,
    src: AlertImage,
    alt: 'imagem de um sinal de alerta',
    p: 'Você será deslogado imediatamente!',
    textButton: 'Extender login',
    colorButton: '#1C1B5E'
  }
];

export default function App() {
  return (
    <div className="App">
      {buttons.map((button) => (
        <Card
          key={button.id}
          src={button.src}
          alt={button.alt}
          p={button.p}
          textButton={button.textButton}
          colorButton={button.colorButton}
        />
      ))
      }
    </div>
  );
}


