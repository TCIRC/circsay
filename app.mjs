const PORT = 80;
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import childProcess from 'child_process';

const app = express();
http.createServer(app);
app.use(bodyParser.urlencoded({ extended: false }));


const form = '<h1>circsay</h1><h2>串串設計了一個能執行 cowsay 指令的系統，當輸入為空則跑 frotune，但電電只花了一分鐘就把系統打下來了，你也能找到 FLAG 嗎？</h2><form method="POST"><input name=input></input><button type="submit">Submit</button></form><br><pre>'

app.get('/', (req, res) => {
  res.send(form);
});

app.post('/', (req, res) => {
  let output;
  let input = req.body.input;
  if(!input)input=';/usr/games/fortune';
  console.log(`Processing input ${input}`);
  try {
    const process = childProcess.spawnSync(`echo ${input} |/usr/games/cowsay `, {
      shell: true,
    });
    /* If the shell option is enabled, do not pass unsanitized user input to this function.
    Any input containing shell metacharacters may be used to trigger arbitrary command execution.*/
    // :P
    output = process.output[1].toString();
  } catch (err) {
    output = err;
  }
  console.log(`Sending output: ${output}`);
  res.send(`${form + output }</pre>`);
});

app.listen(PORT, () => {
  console.log('app started on port ' + PORT + '.');
});
