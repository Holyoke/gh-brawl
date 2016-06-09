var React = require('react'),
    ReactDOM = require('react-dom');

var DUMMY_DATA = {
  name: 'Nosaj Gneube',
  username: 'holyoke',
  image: 'https://avatars0.githubusercontent.com/u/6300995?v=3&s=460'
};

var ProfilePic = React.createClass({
   render: function() {
     return (
       <div>
         <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
       </div>
     )
   }
});

 var ProfileLink = React.createClass({
   render: function() {
     return (
       <a href={'https://www.github.com/' + this.props.username}>
         {this.props.username}
       </a>
     )
   }
 });

 var ProfileName = React.createClass({
   render: function() {
     return (
       <div>{this.props.name}</div>
     )
   }
 });

 var Avatar = React.createClass({
   old: function () {
     return (
       <div>
       <ProfilePic imageUrl={this.props.user.image} />
       <ProfileLink username={this.props.user.username} />
       </div>
     )
   },

   render: function() {
     return (
       <div>
         <ProfilePic imageUrl={this.props.user.image} />
         <ProfileName name={this.props.user.name}  />
         <ProfileLink username={this.props.user.username} />
       </div>
     )
   }
 })

 ReactDOM.render(
   <Avatar user={DUMMY_DATA} />,
   document.getElementById('app')
 );
