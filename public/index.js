class TestReact extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get(`https://salallegrabackend.herokuapp.com/projects`).then(res => {
      const projects = res.data;
      this.setState({ projects });
    });
  }
  render() {
    return (
      <ul>
        {this.state.projects.map(projects => (
          <div>
            <li>
              {projects.projectName} | {projects.projectDescription}
            </li>
          </div>
        ))}
      </ul>
    );
  }
}
ReactDOM.render(<TestReact />, document.getElementById("root"));
