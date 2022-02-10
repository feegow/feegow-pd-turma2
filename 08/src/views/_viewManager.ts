import fs from 'fs'
import path from 'path'

const PATH_VIEW = path.join('.','src','views')

export function ShowView(view, dataView){

    const fileView = path.join(PATH_VIEW,`${view}.html`);
    let html = '';

    if(fs.existsSync(fileView)){
        html = fs.readFileSync(fileView).toString()
    }

    return html;
}
