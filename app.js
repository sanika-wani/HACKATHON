 const express = require('express'); 
 const app = express(); 
 const PORT = 3000; 
 
const workoutRouter = require('./routes/workout')
const challengesRouter = require('./routes/challenges')
const profileRouter = require('./routes/profile')
const loginRouter = require('./routes/login')
const newtrendsRouter = require('./routes/newtrends')

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,"./public/index.html"));
});

app.use('/workout' , workoutRouter);
app.use('/challenges', challengesRouter);
app.use('/profile' , profileRouter);
app.use('/login' , loginRouter);
app.use('/newtrends',newtrendsRouter);

app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);