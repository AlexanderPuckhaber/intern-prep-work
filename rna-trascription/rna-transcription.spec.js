var DnaTranscriber = require('./rna-transcription');
var dnaTranscriber = new DnaTranscriber();

describe('toRna()', function () {

  /**
   * Write some tests that show each individual rna type being
   * transcribed successfully. You'll need a total of four tests
   * to adequately show that the basics of your script work
   * as described in the instructions.
   */

  it('should transcribe all dna nucleotides to their rna complements', function () {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU');
  });

  it('should correctly handle completely invalid input', function () {
    expect(function () {
      dnaTranscriber.toRna('XXX')
    }).toThrow(
      new Error('Invalid input')
    );
  });

  it('should correctly handle partially invalid input', function () {
    expect(function () {
      dnaTranscriber.toRna('ACGTXXXCTTAA')
    }).toThrow(
      new Error('Invalid input')
    );
  });
});