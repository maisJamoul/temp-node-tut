const os = require('os')
// const user = os.userInfo();
// console.log(user);
// console.log(`the system uptime ${os.uptime()}`)

// const currentOs={
//     type:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }
// console.log(currentOs);

const path = require('path');
// console.log('foo\bar\baz'.split(path.sep));
// console.log('foo\bar\baz');
// const filePath = path.join('./content/','subFolder','test.txt');
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname,'content','subFolder','test.txt');
// console.log(absolute);

// const {readFileSync,writeFileSync}=require('fs');
// const first =readFileSync('./content/first.txt','utf8');
// const second =readFileSync('./content/second.txt','utf8');
// console.log(first,second);
// writeFileSync('./content/result-sync.txt',
// `here is the result :${first} , ${second}`,
// {flag:'a'})

// const {readFile,writeFile} = require('fs');
// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     const first=result;
//     readFile('./content/second.txt','utf8',(err,result)=>{
//         if(err){
//         console.log(err)
//     }
//     const second=result;
//     writeFile('./content/result-sync.txt',`here is the result ${first} ${second}`,(err,result)=>{
//         if(err){
//         console.log('err',err)
//     }
//     console.log('result',result)
//     }
//     )
//     })
// })

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if(req.url ==='/'){res.end('Home')}
//     if(req.url ==='/about'){res.end('About')}
//     else
//     res.end('Oops !')
// })
// server.listen(8000);