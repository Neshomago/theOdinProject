const leapYears = function(year) {
 if (year%4 === 0){
     console.log("block divided by four", true);
 } else if ( year%400 === 0){
    console.log("block divided by 400", true);
 } else {
     console.log("todo falso como la buena voluntad de carola");
 }
};

module.exports = leapYears;
