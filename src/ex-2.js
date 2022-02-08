import { question } from "readline-sync";

const firstname = question('이름을 입력하세요...');
const lastname= question('성을 입력하세요...');
console.log('Hello ' + firstname + ' ' + lastname);
