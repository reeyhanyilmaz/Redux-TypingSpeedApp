import './App.css';
import Clock from './components/Clock';
import TextArea from './components/TextArea';
import Input from './components/Input';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Clock />
      <TextArea />
      <Input />
    </div>
  );
}

export default App;
