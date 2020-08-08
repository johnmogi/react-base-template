1. goal- create a training program for React.
2. after test - proceed into headless cms native with wordpress theme.

3. Server - start with Sql, proceed into firebase.
4. bare, material and antdesign upon completion.

enjoy (time)


A. Server

app.js
npm init -y
npm i express joi cors mysql
relearn joi

https://dev.to/itnext/joi-awesome-code-validation-for-node-js-and-express-35pk
(is joi validation usefull only for mysql? or places where no model valid?)

dal bll cntrl srvr

[missing server date] 

postman

INSERT INTO `games` (`gameID`, `name`, `date`) VALUES (NULL, 'derbi 1', '2020-08-01');

INSERT INTO `scores` (`scoreID`, `gameID`, `teamA`, `teamB`, `teamA-score`, `teamB-score`) VALUES (NULL, '1', 'Maccabi Haifa', 'Hapoel- tel aviv', '125', '80');

INSERT INTO `comments` (`commentID`, `gameID`, `name`, `comment`) VALUES (NULL, '2', 'Johnny', 'boring race, need more carrots');





---*-*-*-*-**
B. Client
npx create-react-app client --template -typescript
# react-base-template
