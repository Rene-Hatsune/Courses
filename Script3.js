// JavaScript source code

/*
 * Intellisense indicates that there should only be one component per file.
 * However, this code works, and there are a lot of React examples that
 * do the same thing.
 */

function Hello(props) {
  return (
    <div class="hello">Hello Component - Hello {props.name}</div>
  );
}

function Goodbye(props) {
  return (
    <div class="goodbye">Goodbye Component - Goodbye {props.name}</div>
  );
}

/* component hosting two child components */

function App() {
  return (
    <div>
      <div class="container">
        <div class="app">App Component - contains Hello and Goodbye</div>
        <Hello name="React code in Script3.js" />
        <Goodbye name="React component code in body" />
      </div>
    </div>
  );
}

/* 
 * This implementation does not work.
 * It's here to experiment with later.
 * 
class HelloGoodBye extends React.Component {
  render() {
    return (
      <div>
        <Hello name={"Jim"} />
        <Goodbye name={"Fawcett"} />
      </div>
    );
  }
}

*/
