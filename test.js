const sendMail = require('./server/sendemail')

sendMail("henrymprof@gmail.com", "Test Email", 'This email is a test')
.then(d => {
    console.log(d)
})
.catch(e=>{
    console.log(e)
})