console.log('hello from client.js');

$('#submitQues').on('click', function(event) {
  event.preventDefault();

  console.log('hello');
  score = '';

  // Here we grab the form elements
  var newFriend = {
    friendName: $('#name').val().trim(),
    phoneNumber: $('#image').val().trim(),
    scores: [
      (score[0] = $('#quesZero').val().trim()),
      (score[1] = $('#quesOne').val().trim()),
      (score[2] = $('#quesTwo').val().trim()),
      (score[3] = $('#quesThree').val().trim()),
      (score[4] = $('#quesFour').val().trim()),
      (score[5] = $('#quesFive').val().trim()),
      (score[6] = $('#quesSix').val().trim()),
      (score[7] = $('#quesSeven').val().trim()),
      (score[8] = $('#quesEight').val().trim()),
      (score[9] = $('#quesNine').val().trim()),
    ],
  };

  console.log(newFriend);
  console.log('clicked');

  // // This line is the magic. It"s very similar to the standard ajax function we used.
  // // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
  // // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
  // // depending on if a tables is available or not.

  //   app.post('/api/friends', newFriend, function(data) {
  //     if (data) {
  //       alert('Yay! Your data was recorded!');
  //     } else {
  //       alert('Sorry your data went into cyberspace');
  //     }

  //     // Clear the form when submitting
  //     $('#name')
  //       .val('')
  //       .trim(), $('#image').val('').trim(), $('#quesZero').val(''), $('#quesOne').val(''), $('#quesTwo').val(''), $('#quesThree').val(''), $('#quesFour').val(''), $('#quesFive').val(''), $('#quesSix').val(''), $('#quesSeven').val(''), $('#quesEight').val(''), $('#quesNine').val('');
  //   });
});
