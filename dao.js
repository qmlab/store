/*
* This example uses the node MongoDB module to connect to the local
* mongodb database on this virtual machine
*
* More here: http://mongodb.github.io/node-mongodb-native/markdown-docs/insert.html
*/

//require node modules (see package.json)
var MongoClient = require('mongodb').MongoClient
, format = require('util').format;

module.exports.insert = function (dburl, coll, json) {
  //connect away
  MongoClient.connect(dburl, function(err, db) {
    if (err) throw err;
    else console.log("Connected to Database");

    var collection = db.collection(coll)

    //insert record
    db.collection(coll).insert(json, {w:1}, function(err, records) {
      if (err) throw err;
      else console.log("Record added to %s as id=%s", coll, records[0]._id);
    });
  });
}

module.exports.update = function (dburl, coll, criteria, json) {
  //connect away
  MongoClient.connect(dburl, function(err, db) {
    if (err) throw err;
    else console.log("Connected to Database");

    var collection = db.collection(coll)

    //insert record
    db.collection(coll).update(criteria, json, {w:1}, function(err) {
      if (err) throw err;
      else console.log("Successfully updated");
    });
  });
}
