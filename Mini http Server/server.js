const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url === '/' && req.method === 'GET'){
        const stream = fs.createReadStream('home.html');
        res.setHeader('Content-Type', 'text/html');
        stream.pipe(res);
    }
    else if(req.url === '/submit' && req.method === 'POST'){
        let body = '';
        req.on('data', (chunk)=>{
            body+=chunk;
        });
        req.on('end', ()=>{
            console.log(body);
            let nm;
            if(req.headers['content-type'] === 'application/json'){
            // if(req.headers['content-type']?.includes('application/json')){
                const data = JSON.parse(body);
                console.log(data.name);
                nm = data.name;
            }

            else if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
            // else if (contentType?.includes('application/x-www-form-urlencoded')) { 
                const parsed = new URLSearchParams(body);
                console.log(parsed.get('name'));
                nm = parsed.get('name');
            }
            fs.writeFile('data.txt', nm, (err)=>{
                if(err){
                    res.statusCode = 500;
                    return res.end('Error Serving Data');
                }
                
                res.setHeader('Location', '/success');
                res.statusCode = 302;
                res.end();
            })
        })
    }
    else if(req.url === '/success' && req.method === 'GET'){
        const stream = fs.createReadStream('success.html');
        res.setHeader('Content-Type', 'text/html');
        stream.on('error', () => {
            res.statusCode = 500;
            res.end('Error loading file');
        });
        stream.pipe(res);
        
        // OR ->
        
        // const stream = fs.createReadStream('success.html');
        // res.setHeader('Content-Type', 'text/html');
        // stream.on('data', (chunk)=>{
        //     res.write(chunk);
        // })
        // stream.on('end', ()=>{
        //     res.end();
        // })

    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found');
    }
});

server.listen(3000, ()=>{
    console.log('Started...')
})




// curl cmd for json data -
// curl -X POST http://localhost:3000/submit \
// -H "Content-Type: application/json" \
// -d "{\"name\":\"Sana\"}"