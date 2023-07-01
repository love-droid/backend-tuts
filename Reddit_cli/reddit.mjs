#! /usr/bin/env node

import open from "open";    
import fetch from "node-fetch";
import yargs from "yargs";

const {argv} = yargs(process.argv);

const res = await fetch("https://www.reddit.com/.json");
const data = await res.json();

const children = data.data.children;
const posts = children[Math.floor(Math.random() * children.length)].data;
const link = `https://www.reddit.com${posts.permalink}`;

// console.log(posts.title);
// console.log(link);
if(argv.print){
    console.log(`title: ${posts.title}
    link: ${link}`)
}
else{
    open(link);
}

