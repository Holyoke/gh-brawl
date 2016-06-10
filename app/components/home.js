var React = require('react'),
    transparentBg = require('../styles').transparentBg,
    Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Github Brawl</h1>
        <p className='lead'>Crazy minecraft saying</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-successs'>Begin</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
