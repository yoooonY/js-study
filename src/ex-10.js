// 1킬로그램은 2.204 파운드다. 몸무게를 킬로그램 단위로 입력받아서 파운드로 변환하여 출력하라.
import { question } from "readline-sync";

const kg = Number(question('몸무게 입력 (kg)..'));
// console.log(`value: ${day}, type: ${typeof day}`);

const result = 2.204 * kg;

console.log('파운드로 환산하면 ' + result + '입니다.');