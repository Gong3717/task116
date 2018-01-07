"use strict";
class Student{
    constructor(inputStr) {
        this.inputStr = inputStr;
        // let reg = /[\u4e00-\u9fa5]{1,3}，[0-9]{3}，[\u4e00-\u9fa5]，[0-9]，[\u4e00-\u9fa5]{2}：[0-9]{1,3}，[\u4e00-\u9fa5]{2}：[0-9]{1,3}，[\u4e00-\u9fa5]{2}：[0-9]{1,3}，[\u4e00-\u9fa5]{2}：[0-9]{1,3}$/;
        // return reg.test(this.inputStr);
    }
    getStudentInfo(){
        let strArr = this.inputStr.split(",");
        let studentInfo = {};
        studentInfo.name = strArr[0];
        studentInfo.id = strArr[1];
        studentInfo.nation = strArr[2];
        studentInfo.klass = strArr[3];
        studentInfo.math = parseFloat(strArr[4].substr(3));
        studentInfo.chinese = parseFloat(strArr[5].substr(3));
        studentInfo.english = parseFloat(strArr[6].substr(3));
        studentInfo.code = parseFloat(strArr[7].substr(3));
        return studentInfo;
    }


    //检查输入的格式是否正确
    check() {
        //张三,001,汉,1,数学：75,语文：95,英语：80,编程：80
        //李四,002,汉,1,数学：85,语文：80,英语：70,编程：90
        //王五,003,汉,1,数学：94.5,语文：85,英语：90,编程：70.5
        let isRight = false;
        let strArr = this.inputStr.split(",");
        //判断8个信息是否完全输入
        if(strArr.length === 8) {
            //找到后四个关于成绩的元素
            strArr = strArr.slice(4);
            //console.log(strArr);
                strArr.forEach(function(item){
                   if(item.substr(3)>100){
                       isRight = false;
                    }
                    else{
                       isRight = true;
                   }
                });
        }
        return isRight;
    }

}
module.exports = Student;
// let student = new Student("张三,123,汉,1,数学：75,语文：95,英语：80,编程：80");
// console.log(student.getStudentInfo());
// console.log(student.check(student));
// console.log(student);
// console.log(student.getStudentInfo().name);
// let a = [];
// a.push(student.getStudentInfo());
// console.log(a);
