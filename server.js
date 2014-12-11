var dao = require('./dao.js')

var dburl = 'mongodb://127.0.0.1:27017/store'
var coll = 'objs'
var doc1 = {name:"david", title:"About MongoDB"};
var doc2 = {name:"maine", title:"abc"}

dao.insert(dburl, coll, doc1)
dao.update(dburl, coll, {name:"david"}, doc2)
