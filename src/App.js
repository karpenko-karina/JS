import logo from './logo.svg';
import './App.css';
import iphone from './iphone.png';

const Header = ({children}) =>
<header> 
  <div className='Logo'>
    <img src={logo} className='App-logo'/>
  </div>
  <nav className='Main-nav'>
    <ul>
      {children}
    </ul>
  </nav>
</header>

const Card = ({image, price=0, name='имя товар', description='описание товара'}) =>
<div className='Card'>
  <img src={image} />
  <a href='#'><h3>{name}</h3></a>
  <p>{description}</p>
  <money>{price}</money>
</div>

const CardList = () =>
<div className='CardList'>
  <Card image={iphone} price={100500} name='Iphone' description='device' />
  <Card image={iphone} price={100500} name='Iphone' description='device' />
  <Card image={iphone} price={100500} name='Iphone' description='device' />
  <Card image={iphone} price={100500} name='Iphone' description='device' />
  <Card image={iphone} price={100500} name='Iphone' description='device' />
  <Card image={iphone} price={100500} name='Iphone' description='device' />
  <Card image={logo} price={100500} name='Iphone' description='device' />
  <Card image={logo} price={100500} name='Iphone' description='device' />
  <Card image={logo} price={100500} name='Iphone' description='device' />
  <Card image={logo} price={100500} name='Iphone' description='device' />
  <Card image={logo} price={100500} name='Iphone' description='device' />
  <Card image={logo} price={100500} name='Iphone' description='device' />
</div>
const
const Main = () =>
<main>
  <CardList />
</main>

const FooterContent = () =>
<div className='Contcts'>
</div>

const Footer = () =>
<footer> 
  <FooterContent />
  <FooterBottom />
</footer>

const NavItem = ({href, children}) =>
<li><a href={href}>{children}</a></li>

function App() {
  return (
    <div className="App">
      <Header>
        <NavItem href='#'>Link1</NavItem>
        <NavItem href='#'>Link2</NavItem>
        <NavItem href='#'>Link3</NavItem>
        <NavItem href='#'>Link4</NavItem>
        <NavItem href='#'>Link5</NavItem>
      </Header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
