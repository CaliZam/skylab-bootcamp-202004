const { Component } = React;

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "landing",
      user: undefined,
      userEmail: undefined,
    };
  }
  handleGoToRegister = () => this.setState({ view: "register" });
  handleGoToLogin = () => this.setState({ view: "login" });
  handleLogout = () =>
    this.setState({
      view: "landing",
      user: undefined,
    });
  handleLogin = (email, password) => {
    authenticateUser(email, password, (error, token) => {
        retrieveUser(token, (error, user) => {

        this.setState({
        view: "home",
        userName: user.name,
        userEmail: user.email
      });
    });
})
  };

  render() {
    return (
      <>
        {this.state.view === "landing" && (<Landing onRegister={this.handleGoToRegister} onLogin={this.handleGoToLogin}/>)}
        {this.state.view === "register" && (<Register onLogin={this.handleGoToLogin} />)}
        {this.state.view === "login" && (<Login onRegister={this.handleGoToRegister} onSubmitLogin={this.handleLogin}/>)}
        {this.state.view === "home" && (<Home name={this.state.userName} userEmail={this.state.userEmail} logOut={this.handleLogout}/>)}
      </>
    );
  }
}