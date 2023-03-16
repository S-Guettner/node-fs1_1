import fs from 'fs'
import { rename } from 'node:fs';

fs.writeFile('./blog1.txt','Hello World !!!!!!!!!!!!!', (err) => {
    if(err) console.error(err)
})

fs.writeFile('./blog2.txt','Hello World 2222222222', (err) => {
    if(err) console.error(err)
})

fs.mkdir('./assets',(err) => {
    if(err) console.error(err)
})

fs.exists('./assets',(exists) => {
    if(exists) {
        fs.rmdir('./assets', (err) => console.log(err))
    }
        
})

fs.writeFile('./delete.txt',"", (err) => {
    if(err)console.log(err)
} )

fs.exists('./delete.txt',(exists) => {
    if(exists) {
        fs.unlink('./delete.txt', (err) => console.log(err))
    }
        
})

fs.writeFile('./hello.txt','Hello World', (err) => {
    if(err) console.error(err)
})

rename('hello.txt','HelloWorld.txt', (err) => {
    if(err) console.log(err)
})
