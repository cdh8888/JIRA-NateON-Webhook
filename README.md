# JIRA-NateON-Webhook

### 목적
JIRA에 있는 Webhook의 데이타가 NateON 팀룸에서 제공하는 Webhook에 맞지 않아서 중간에 Nodejs로 개발한 서버로 JIRA와 NateON 팀룸의 Webhook를 연동.

### 구조
Nodejs로 서버를 개발하여 JIRA의 Webhook 데이타를 전송 받고, 받은 데이타 중 알고 싶은 데이타를 NateON 팀룸에 Webhook으로 전송하는 것이다.

JIRA -> Nodejs(데이타 가공) -> NateON 팀룸

### 코드
```javascript
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

```
