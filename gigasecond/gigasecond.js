var Gigasecond = function (inputDate){

    //creates large number (1 billion)
    let tmpBillion = 1;
    for (let i = 0; i < 9; i++){
        tmpBillion *= 10;
    }
    //creates gigasecond constant
    //const GigasecondValue = 1*tmpBillion;
    const GigasecondValue = 1000000000;

    //creates another date object that is one billion seconds older
    let newDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDay());

    //if inputDate is positive (1970 or later)
    if (inputDate.getTime() > 0)
        newDate.setSeconds(inputDate.getSeconds() + GigasecondValue);
    else
        newDate.setSeconds(GigasecondValue - inputDate.getSeconds());

    this.date = function(){
        return newDate;
    }
};
module.exports = Gigasecond;