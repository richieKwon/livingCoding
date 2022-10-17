import logo from './logo.svg';
import './App.css';


function Header(props) {
  return <header>
    <h1><a href='/'>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html' },
    { id: 2, title: 'css', body: 'css' },
    { id: 3, title: 'javascript', body: 'javascript' }
  ];
  return (
    <div className="App">
      Hello World!
      <Header title="React"></Header>
      <Nav topics={topics}></Nav>
    </div>

  );
}

export default App;
