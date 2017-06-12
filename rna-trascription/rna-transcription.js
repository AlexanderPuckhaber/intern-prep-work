var DnaTranscriber = function () {

    this.toRna = function (inputDna) {

        let outputRna = '';

        for (let i = 0; i < inputDna.length; i++) {
            letter = inputDna.charAt(i);

            if (letter === 'G')
                outputRna += 'C';
            else if (letter === 'C')
                outputRna += 'G';
            else if (letter === 'T')
                outputRna += 'A';
            else if (letter === 'A')
                outputRna += 'U';
            else
                throw new Error('Invalid input');
        }
        return outputRna;
    }

};

module.exports = DnaTranscriber;