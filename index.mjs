import express from 'express';

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my Profile API!');
});

app.get('/name', (req, res) => {
  res.send('Victor');  
});

app.get('/age', (req, res) => {
  res.send('20');  
});

app.get('/course', (req, res) => {
  res.send('Computer Science');  
});
app.get('/bio', (req, res) => {
  res.send('I am a developer');  
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
