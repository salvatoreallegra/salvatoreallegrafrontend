class TestReact extends React.Component {
  render() {
    return <h1>Test Succeeded</h1>;
  }
}
ReactDOM.render(<TestReact />, document.getElementById("root"));
