
const fs = require('fs')
const path = require('path')

let types = require("../utility")


function organizeFn(dirPath) {

    let destPath

    if (dirPath == undefined) {
        destPath = process.cwd()
        return;
    }//check whether directory path is passed or not simply return

    let doesexist = fs.existsSync(dirPath)

    //this doesExist will tell the target folder exists or not

    if (doesexist == true) {
        destPath = path.join(dirPath, 'organized_files')

        //we created a path for organized_Files folder

        if (fs.existsSync(destPath) == false) {
            fs.mkdirSync(destPath)
        }
        else {
            console.log("Folder already exist")
        }
    }
    else {
        console.log('Please Enter A Valid Path')
    }

    organizehelper(dirPath, destPath)
}


function organizehelper(src, dest) {
    // identify all categoreis of files present in input directory
    let childNames = fs.readdirSync(src);
    // console.log(childNames)
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            let category = getCategory(childNames[i])
            console.log(childNames[i], "belongs to -> ", category)

            sendFiles(childAddress, dest, category)
        }
    }

}

function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category)
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath)
    }
    let fileName = path.basename(srcFilePath)
    let destFilePath = path.join(categoryPath, fileName)
    fs.copyFileSync(srcFilePath, destFilePath)
    fs.unlinkSync(srcFilePath)
    console.log(fileName, "copied")
}

function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1)
    for (let type in types) {
        let ctypeArray = types[type]
        for (let i = 0; i < ctypeArray.length; i++) {
            if (ext == ctypeArray[i]) {
                return type;
            }
        }
    }
    return "others"
}



module.exports = {
    organizeKey: organizeFn
}