var similarity = require('compute-cosine-similarity');

var friendDatas = [
  {
    friendName: 'name',
    friendPhoto: 'friendPhoto',
    scores: [],
  },
];

// The higher the cosine similarity number, the more similar they are

var compare = function() {
  for (var i = 0; i < friendDatas.length; i++);
  s = similarity(friendDatas[i], friendDatas[i++]);
  var j = i++;
  console.log('Value ' + s + 'between arrays ' + i + 'and ' + j);
};

// compare();
