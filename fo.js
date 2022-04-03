#!/usr/bin/env node

// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders



const fs = require('fs')
const path = require('path')

let helpObj = require("./modules/help")
let treeObj = require("./modules/tree")
let organizeObj = require("./modules/organize")

let input = process.argv.slice(2)

let inputArr = input

let command = inputArr[0]

console.log(input)

// let types = {
//     media: ["mp4", "mkv"],
//     archives: ["zip", "7z", "rar", 'tar', 'gz', 'ar', 'iso', 'xz'],
//     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
//     app: ['exe', 'dmg', 'pkg', 'deb']
// }


switch (command) {
    case 'tree':
        //console.log('Tree Implemented')
        // treeFn(inputArr[1])
        treeObj.treekey(inputArr[1])
        break
    case 'organize':
        // console.log('Organize Implemented')
        // organizeFn(inputArr[1])
        organizeObj.organizeKey(inputArr[1])
        break;
    case 'help':
        // console.log('Help Implemented')
        // helpfn()
        helpObj.helpkey()
        break;
    default:
        console.log('Please enter a valid command 🙏')
        break;

}




