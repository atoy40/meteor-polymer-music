if (Meteor.isClient) {

  Template.layout.events({
    'click paper-button': function () {
      document.querySelector('paper-dialog').toggle();
    }
  });

  Template.layout.cards = function() {
    return [
      {
        name: "Kelly Slater",
        periode: "Periode 2",
        reportent: "sdsqdsqdsqd",
        reportiut: "dfdfsdfffffsdfsf",
      },
      {
        name: "Jean-Luc Brassard",
        periode: "Periode 3",
        reportent: "sdsqdsqdsqd",
        reportiut: "dfdfsdfffffsdfsf",
      },
    ];
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
