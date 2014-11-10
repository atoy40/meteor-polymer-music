if (Meteor.isClient) {
  Meteor.startup(function() {
    $('body')
      .attr('unresolved', '')
      .attr('fullbleed', '');
  });
}
