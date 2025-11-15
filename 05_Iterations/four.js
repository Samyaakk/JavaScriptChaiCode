const myObj = {
    js: 'javascript',
    cpp:'C++',
    rb: 'ruby',
    swift:'swift by apple'
}

for (const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js","rb","python","java","cpp"]
for(const key in programming){
    console.log(`${programming[key]}`);
}

