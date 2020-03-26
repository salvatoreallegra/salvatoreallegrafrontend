class TestReact extends React.Component {
  render() {
    return (
      <div>
        <h1>Test Succeed</h1>
        <img src="https://source.unsplash.com/random" />
      </div>
    );
  }
}
ReactDOM.render(<TestReact />, document.getElementById("root"));
