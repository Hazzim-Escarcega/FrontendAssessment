const pa11y = require ('pa11y')

async function run(){
    const response = await pa11y('http://traversy.dev')
    console.log(response)
}

run()