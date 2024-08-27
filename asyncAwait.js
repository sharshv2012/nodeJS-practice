
import fs from 'fs'
import util from 'util'
const readFilePromise= util.promisify(fs.readFile) // this will convert the callback function to promise
const writeFilePromise = util.promisify(fs.writeFile)   




// const getText = (path) => { // path is a parameter
//     return new Promise((resolve, reject) => { 
//         fs.readFile(path , {encoding: 'utf-8'}, (err,data) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })  
// }

const start = async () => {
    try{
        const data = await readFilePromise('./Public/home.html', {encoding: 'utf-8'})
        await writeFilePromise('./Public/result.html', data)
        console.log(data)
    }catch (error){
        console.error(error)
    }
}   

start()