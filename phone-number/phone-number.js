var PhoneNumber = function (newNumber) {

    //initializes fields
    var inputPhoneNumber = newNumber;

    var unformattedNumber = "";
    var areacode;
    var formattedNumber;


    //variable to keep track of how many non-parenthesis separators there are in the string
    //designed to catch "  ", "afaf", and other nonsense such as "&l", but not ") "
    //2 or more separators next to each other = corrupt data, set to 0000000000
    var seperatorCount = 0;
    //cleans up inputPhoneNumber by removing all non-digit characters (seperators and such)
    for (var i = 0; i < inputPhoneNumber.length; i++) {

        //gets character in inputPhoneNumber
        var tmp = inputPhoneNumber.charAt(i);

        //determines if character is a digit bewteen 0 and 9 inclusive
        if (parseInt(tmp) > -1 && parseInt(tmp) < 10) {
            //reset seperatorCount
            seperatorCount = 0;
            //add char to phone.number
            //print(tmp);
            unformattedNumber += tmp;
        }
        //else, increment seperatorCount by one
        else {
            seperatorCount++;
            //if there are 2 or more seperators next to each other, data is probably corrupted

            if (seperatorCount > 1) {
                //However, the edge case is the ") " after the area code, which should be allowed.
                //if the last 2 characters weren't ") ", throw out the data!
                if (tmp == " " && (i > 0 && inputPhoneNumber.charAt(i - 1) == ")")) {
                    //everything is fine, the last two seperators were ") "
                } else {
                    //exit loop
                    i = inputPhoneNumber.length;
                    //make phone number null
                    unformattedNumber = "0000000000";
                }
            }
        }
    }

    //checks the length of the phone number to see if it is valid
    //Length needs to be between 10 and 11
    if (unformattedNumber.length > 11 || unformattedNumber.length < 10) {
        //number is a null value (10 zeroes)
        unformattedNumber = "0000000000";
    } else {
        //darn, the phone number is valid. more needs to be done...

        //checks to see if the phone number has 11 digits, in which case the first digit (hopefully 1) is removed
        if (unformattedNumber.length == 11) {
            //Complains if first digit is not 1
            if (unformattedNumber.charAt(0) != "1") {
                //print("PhoneNumber " + unformattedNumber + " does NOT have an international area code of '1'!");
            }
            //removes first digit
            var tmpNumber = "";
            for (var i = 1; i < unformattedNumber.length; i++) {
                tmpNumber += unformattedNumber.charAt(i);
            }
            unformattedNumber = tmpNumber;
        }

    }
    //else, do nothing

    //ok, we should probably check to see if the first and fourth digits of the phone number are between 2-9
    if (parseInt(unformattedNumber.charAt(0)) < 2 /*above 9 was checked initially*/ ) {
        //print("Area code of " + unformattedNumber + " begins with 0 or 1!")
    }
    if (parseInt(unformattedNumber.charAt(3)) < 2 /*above 9 was checked initially*/ ) {
        //print("Exchange code of " + unformattedNumber + " begins with 0 or 1!")
    }

    //ok, now we need to extract the area code from the number
    areacode = unformattedNumber.substr(0, 3);

    //creates formatted phone number '(areacode) XXX-XXX'
    //note: substr(start, len) is different from substring(start, end)

    formattedNumber = "(" + areacode + ") " + unformattedNumber.substring(3, 6) + "-" + unformattedNumber.substring(6, 10);


    //functions number(), areaCode(), and toString()
    this.number = function () {
        return (unformattedNumber);
    };

    this.areaCode = function () {
        return (areacode);
    }

    this.toString = function () {
        return (formattedNumber);
    }
};

module.exports = PhoneNumber;