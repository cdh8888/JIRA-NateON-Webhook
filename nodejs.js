'use strict'

const express = require('express')
const querystring = require('querystring');
const request = require('request');

// Create a new instance of express
const app = express()
app.use(express.json());

// Route that receives a POST request to /sms
app.post('/jira', function (req, res) {

const jira = req.body;

// 사용 할 정보
const data = `Title : ${jira.issue.fields.summary} | User : ${jira.user.displayName} | Event : ${jira.webhookEvent} | URL : ${JIRA 서버 URL}/browse/${jira.issue.key}`;
console.log(data);
const formData = querystring.stringify({content:data});
const contentLength = formData.length;

request({
  headers: {
    'Content-Length': formData.length,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  uri: '${팀룸URL}',
  method: 'POST',
  body: formData,
  }, 
  function (e, r, b) {
  });

  res.send(req.body);
  res.end();
})

// Tell our app to listen on port 3000
app.listen(3000, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 3000')
})
