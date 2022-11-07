Talk.ready.then(function () {
  var me = new Talk.User({
    id: '123456',
    name: 'Alice',
    role: "TEST",
    email: 'alice@example.com',
    photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
    welcomeMessage: 'Hey there! How are you? :-)',
  });
  var other = new Talk.User({
    id: '654321',
    name: 'Sebastian',
    email: 'Sebastian@example.com',
    photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
    welcomeMessage: 'Hey, how can I help?',
  });
  var other2 = new Talk.User({
    id: '202030',
    name: 'Alex',
    email: 'Alex@example.com',
    photoUrl: 'https://talkjs.com/images/avatar-2.jpg',
    welcomeMessage: 'Hey, how can I help?',
  });

  window.talkSession = new Talk.Session({
    appId: 'tMecoDjL', // My App ID
    me: me,
  });

  var conversation = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, other, other2)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(other);
  conversation.setParticipant(other2);

  var inbox = talkSession.createInbox({ 
    selected: conversation,
  });
  
  inbox.mount(document.getElementById('talkjs-container'));
});