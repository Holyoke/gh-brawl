var React = require('react'),
    PropTypes = React.PropTypes;

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Results (props) {
  return (
    <div>Results: {puke(props)}</div>
  )
}

Results.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
