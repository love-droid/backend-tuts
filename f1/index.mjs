import {readFile,writeFile} from 'fs/promises';
import path from 'path';

let template = await readFile(path.resolve('template.html'), 'utf-8');

const data = {
    title: 'Hello World',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

for(const [k,v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v)
} 

console.log(template);
await writeFile(path.resolve('index.html'), template);


