var PhoneNumber = function(inputPhoneNumber) {

    //initializes fields
    var unformattedNumber = "";
    var areacode = "";
    var formattedNumber = "";

    //cleans up inputPhoneNumber by removing all non-digit characters (seperators and such)
    for (var i = 0; i < inputPhoneNumber.length; i++) {



        //gets character in inputPhoneNumber
        var tmp = inputPhoneNumber.charAt(i);
        //determines if character is a digit bewteen 0 and 9 inclusive
        if (parseInt(inputPhoneNumber) > -1 && parseInt(inputPhoneNumber) < 10) {
            //add char to phone.number
            unformattedNumber += tmp;
        }
        //else, do nothing
    }
    //checks the length of the phone number to see if it is valid
    if (unformattedNumber.length > 11 || unformattedNumber.length < 10) {
        //number is a null value (10 zeroes)
        unformattedNumber = "0000000000";
    }
    else {
        //darn, the phone number is valid. more needs to be done...

        //checks to see if the phone number has 11 digits, in which case the first digit (hopefully 1) is removed
        if (unformattedNumber.length == 11) {
            //Complains if first digit is not 1
            if (unformattedNumber.charAt(0) != "1")
                print("PhoneNumber " + unformattedNumber + " does NOT have an international area code of '1'!");
            //removes first digit
            var tmpNumber = "";
            for (var i = 1; i < unformattedNumber.length; i++) {
                tmpNumber += unformattedNumber.charAt(i);
            }
            unformattedNumber = tmpNumber;
        }
        //else, do nothing

        //ok, we should probably check to see if the first and fourth digits of the phone number are between 2-9
        if (parseInt(unformattedNumber.charAt(0)) < 2 /*above 9 was checked initially*/) {
            print("Area code of " + unformattedNumber + " begins with 0 or 1!")
        }
        if (parseInt(unformattedNumber.charAt(3)) < 2 /*above 9 was checked initially*/) {
            print("Exchange code of " + unformattedNumber + " begins with 0 or 1!")
        }

        //ok, now we need to extract the area code from the number
        areacode = unformattedNumber.substr(0, 3);

        //creates formatted phone number '(areacode) XXX-XXX'
        formattedNumber = "(" + areaCode + " " + unformattedNumber.substr(3, 6) + "-" + unformattedNumber.substr(6, 10);
    }

    //functions number(), areaCode(), and toString()
    function number() {
        return (unformattedNumber);
    }

    function areaCode() {
        return (areacode);
    }

    function toString() {
        return (formattedNumber);
    }
};

//phone = new PhoneNumber("qw983af2q9834");