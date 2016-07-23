var React = require('react'),
    transparentBg = require('../styles').transparentBg,
    Link = require('react-router').Link,
    MainContainer = require('../containers/MainContainer');

var Home = React.createClass({
  render: function () {
    return (
      <MainContainer>
        <h1>Github Brawl</h1>
        <p className='lead'>Crazy minecraft saying</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-successs'>Begin</button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
