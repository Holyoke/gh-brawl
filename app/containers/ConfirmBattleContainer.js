var React = require('react'),
    ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  render: function () {
    return (
      <ConfirmBattle />
    )
  }
});

module.exports = ConfirmBattleContainer
