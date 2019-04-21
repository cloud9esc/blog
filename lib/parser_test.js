const testMD = `---
title: Hi this is example 1
date: '2019-04-19'
intro: this is example 1. this is example 1. this is example 1. this is example 1. this is example 1? this is example 1.
---

# Hi this is example 1

this is example 1. this is example 1. this is example 1. this is example 1. this is example 1? this is example 1.

this is example 1. this is example 1. this is example 1. this is example 1. this is example 1? this is example 1.

this is example 1. this is example 1. this is example 1. this is example 1. this is example 1? this is example 1. this is example 1. this is example 1. this is example 1. this is example 1. this is example 1? this is example 1.`;

console.log(require('./parser')(testMD));
