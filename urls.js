const fs = require('fs');
const request = require('request')
let x = []



async function getData() {
    const data = fs.readFile(`${process.argv[2]}`, 'utf8', (err, data) => {
        try{
            let li = data.split("\n")
            li.forEach(li => {
                request({ uri: `${li}` }, function (error, response, body) {
                    if (error) {
                        console.log(`Couldn't download ${li}`)
                    } else {
                        let theUrl = new URL(li)
                        fs.writeFile(`./${theUrl.hostname}`, body, err => {
                            if (err) {
                                console.log(err)
                            }
                        })
                        console.log(`Wrote to ${theUrl.hostname}`)
    
                    }
                })
            })




        }catch(err){
            console.log(`Something went wrong ${err}`)
        }

    })


}


getData()


