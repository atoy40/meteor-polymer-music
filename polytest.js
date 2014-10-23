if (Meteor.isClient) {

  Template.layout.events({
    'click paper-button': function () {
      document.querySelector('paper-dialog').toggle();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
