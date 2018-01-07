"use strict";

let Student = require("../lib/student");
let readlineSync = require('readline-sync');
//module.exports = main;

//function main() {
let endloop;
let endloop2;
let allStudent=[]; //输入的所有学生信息
let printStu=[]; //要打印成绩的学生信息
let allStuSum = [];
let klassSum=0;
let klassAvr=0;
let klassMedian=0;
//stuCore存放每位同学的总成绩
let stuCore=[];
console.log(mainMenu());
readlineSync.promptLoop(function(input) {
    if (input === '1') {
        childMenu('1');
        readlineSync.promptLoop(function(input2) {
            //console.log(addStudent(input2));
            addStudent(input2);
            return endloop === true;
           // console.log(result);
            console.log('end loop');
        });

        console.log(mainMenu());
    } else if (input === '2') {
        childMenu('2');
        readlineSync.promptLoop(function(input2) {
            //console.log(addStudent(input2));
            check2(input2);
            //console.log('1');
            console.log(printCard());
           // console.log('2');
            return endloop2 === true;
            console.log('end loop2');
        });
    } else {
        childMenu('3');
    }
    return input === '3';
});
//}


function mainMenu() {
    let mainStr = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
    return mainStr;
}
function childMenu(inputNum) {
    if (inputNum === '1') {
        console.log("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
    }
    if (inputNum ==='2') {
        console.log("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
    }
    if(inputNum === '3'){

    }
}

function addStudent(inputString) {
    //let inputArray = [];
    let student = new Student(inputString);
    endloop = student.check();
    if (student.check()) {
        console.log("学生" + student.getStudentInfo().name + "的成绩被添加");
        allStudent.push(student.getStudentInfo());
       //console.log(allStudent);
    }else{

        console.log("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：");

    }
   // return allStudent;
}
function printCard(){
    let report1 = '成绩单\n'+ '姓名|数学|语文|英语|编程|平均分|总分\n';
    let report2 = '';
    let stuAvr = 0;
  //  let allStuSum = [];
    printStu.forEach((item)=>{
        let stuSum = 0;
        stuSum = item.math+item.chinese+item.english+item.code;
       // console.log(stuSum);
        stuAvr = stuSum /4;
        allStuSum.push(stuSum);
        report2+=item.name+'|'+item.math+'|'+item.chinese+'|'+item.english+'|'+item.code+'|'+stuAvr+'|'+stuSum+'\n';
    });
    klassMedian =compute_median(allStuSum);
    allStuSum.forEach(function(item){
        klassSum+=item;
    });
    klassAvr =klassSum /allStuSum.length;
    let report3 = '全班总分平均数：'+klassAvr+'\n'+'全班总分中位数：'+klassMedian;

    return report1+'========================\n'+report2+'========================\n'+report3;
}

function compute_median(collection) {
    //计算中位数
    var ary = collection.sort(function (a,b) {
        return a - b;
    });
    if(ary.length%2==0){
        var lowMiddle = Math.floor((ary.length - 1) / 2);
        var highMiddle = Math.ceil((ary.length - 1) / 2);
        return (ary[lowMiddle]+ ary[highMiddle]) / 2;
    }
    if(ary.length%2!=0){
        var Middle = ((ary.length - 1) / 2);
        return (ary[Middle]);
    }
}
function check2(inputStr){
    let allStuId = [];
    let printStuId = [];
    let strArr = inputStr.split(",");
   // console.log(strArr);
    allStudent.forEach(function(item){
        allStuId.push(item.id);
    });
    //console.log('打印所有学生id');
   // console.log('打印所有学生id'+allStuId);
    printStuId = allStuId.filter(function(item,index,arry){
        return strArr.indexOf(item)>-1;
    });

   // console.log('打印成绩学生id'+printStuId);
    allStudent.forEach(function(item){
        for(var i =0;i<printStuId.length;i++){
            if(printStuId[i]===item.id){
                printStu.push(item);
            }
        }
    });
    //console.log(printStu);
    endloop2=true;
}
