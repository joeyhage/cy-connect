const React = require('react');

class Nav extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isBurgerOpen: false  
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  render() {
    return (
      
    );
  }

  handleClick() {
    console.log('Test');
    this.setState({isBurgerOpen: !this.state.isBurgerOpen});
  }
}

module.exports = Nav;