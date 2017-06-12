var Bob = function() {
    
    //hey is used for regular speech
    this.hey = function(inputSpeech) {
        let inputSpeechType = 'normal'; //default
        //checks if inputSpeech is a question
        if (inputSpeech.charAt(inputSpeech.length) == '?'){
            inputSpeechType = 'question';
        }
        //if inputSpeech is in all caps (yell) (overrides question)
        if (inputSpeech === inputSpeech.toUpperCase()) {
            inputSpeechType = 'yell';
        }
        //checks to see if inputSpeech is all spaces
        let isAllSpaces = true;
        for (char in inputSpeech){
            if (char != ' ')
                isAllSpaces = false;
        }
        if (isAllSpaces){
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