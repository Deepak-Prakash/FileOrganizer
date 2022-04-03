
const fs = require('fs')
const path = require('path')

function helpfn() {
    console.log(`List of all the commands->
                            1)Tree - node fo.js tree <dirPath>
                            2)Organize - node fo.js organize <dirPath>
                            3)Help - node fo.js help`
    )
}

module.exports = {
    helpkey: helpfn
}