/**
 * Created by wj on 2016/5/26.
 */
'use strict';

const fs = require('fs')

export default function (name, filePath, _import = '//@import', _register = '//@register') {
    let page = fs.readFileSync(filePath).toString();

    const toImportString = `import ${name} from './${name}/${name}'` + "\n" + _import
    const toRegisterString = `,
    ${name}.name` + _register

//import about from './about/about'
//about.name

    page = page.replace(_import, toImportString)
    page = page.replace(_register, toRegisterString)
    console.log(`write ${name}file ${toImportString}`);
    fs.writeFileSync(filePath, page)
}