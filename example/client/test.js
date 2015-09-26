if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      JSX.runMain('client/sakura.jsxx');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
