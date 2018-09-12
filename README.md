# JIRA-NateON-Webhook

### 목적
JIRA에 있는 Webhook의 데이타가 NateON 팀룸에서 제공하는 Webhook에 맞지 않아서 중간 서버를 개발하여 JIRA와 NateON 팀룸의 Webhook를 연동.

### 구조
중간 서버를 개발하여 JIRA의 Webhook 데이타를 전송 받고, 받은 데이타 중 알고 싶은 데이타를 NateON 팀룸에 Webhook으로 전송하는 것이다.

JIRA -> 중간 서버(데이타 가공) -> NateON 팀룸

