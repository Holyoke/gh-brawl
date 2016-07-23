var React = require('react'),
    PropTypes = React.PropTypes,
    styles = require('../styles/index'),
    UserDetails = require('./UserDetails'),
    UserDetailsWrapper = require('./UserDetailsWrapper'),
    Link = require('react-router').Link;

function StartOver(props) {
  return(
    <div className='col-sm-12' styles={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Try Again?</button>
      </Link>
    </div>
  )
}

function Results (props) {
  if (props.isLoading) {
    return(
      <pre>is Loading...</pre>
    )
  }

  //Tie
  if (props.scores[0] === props.scores[1]) {
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBG}>
      <h1>Draw!</h1>
      <StartOver/>
    </div>
  }

  var winningIdx = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIdx = winningIdx === 0 ? 1 : 0;

  return (
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBG}>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIdx]} info={props.playersInfo[winningIdx]} />
        </UserDetailsWrapper>

        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIdx]} info={props.playersInfo[losingIdx]} />
        </UserDetailsWrapper>
      </div>

      <StartOver/>
    </div>
  )
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Results;
