const {app} = require('./bin/routes');

app.listen(3002, () =>{
    console.log('Serve on port 3002');
});