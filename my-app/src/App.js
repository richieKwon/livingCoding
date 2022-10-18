import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Create() {
  return <article>
    <h2>Create</h2>
  </article>
}

function Header(props) {
  return <header>
    <h1><a href='/' onClick={function (event) {
      event.preventDefault();
      props.onChangeMode();
    }
    }>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={(event) => {
        event.preventDefault();
        // event.target >> means "a tag". 
        // event.target.id >> means the id of "a tag" 
        props.onChangeMode(event.target.id);
      }}> {t.title}</a>
    </li>)
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {
  // const mode = useState('Welcome');
  const [mode, setMode] = useState('Welcome');
  let content = null;
  const topics = [
    { id: 1, title: 'html', body: 'html' },
    { id: 2, title: 'css', body: 'css' },
    { id: 3, title: 'javascript', body: 'javascript' }
  ];


  return (
    <div className="App">
      Hello World!
      <Header title="React" onChangeMode={() => {
        setMode('Welcome')
      }}
      ></Header>
      <Nav topics={topics} onChangeMode={(id) => { alert(id) }}></Nav>
      <a href='/create' onClick={event => {
        event.preventDefault();
        setMode('Create');
      }}>Create</a>
    </div>

  );
}

export default App;
