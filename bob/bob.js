var Bob = function () {

    //hey is used for regular speech
    this.hey = function (inputSpeech) {
        let inputSpeechType = 'normal'; //default
        //checks if inputSpeech is a question
        if (inputSpeech.charAt(inputSpeech.length - 1) == '?') {
            inputSpeechType = 'question';
        }
        //if inputSpeech is a yell (ends in '!')
        if (inputSpeech.charAt(inputSpeech.length - 1) == '!') {
            inputSpeechType = 'yell';
        }
        //also in all caps (as long as there are no numbers)
        let containsNumbers = false;
        for (let i = 0; i < inputSpeech.length; i++) {
            if (parseInt(inputSpeech.charAt(i)) > -1)
                containsNumbers = true;
        }
        if (!containsNumbers && inputSpeech === inputSpeech.toUpperCase()) {
            inputSpeechType = 'yell';
        }
        //checks to see if inputSpeech is all spaces
        let isAllSpaces = true;
        for (let i = 0; i < inputSpeech.length; i++) {
            letter = inputSpeech.charAt(i);
            if (letter != ' ')
                isAllSpaces = false;
        }
        if (isAllSpaces) {
            inputSpeechType = 'blank'
        }

        //returns bob's response
        if (inputSpeechType == 'normal')
            return 'Whatever.';
        else if (inputSpeechType == 'question')
            return 'Sure.';
        else if (inputSpeechType == 'yell')
            return 'Whoa, chill out!';
        else if (inputSpeechType == 'blank')
            return 'Fine. Be that way!';
    }

};

module.exports = Bob;