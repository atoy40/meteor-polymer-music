// Polymer body fixes
Meteor.startup(function() {
  $('body')
    .attr('unresolved', '')
    .attr('fullbleed', '');
});
