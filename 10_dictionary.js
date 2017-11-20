// # Dictionary
// #
// # Extend the Dictionary class.
// #
// # It should have three methods:
// # .add_word(word, definition) -> Should store a word and definition
// # .lookup(word) -> Should return a definition
// # .total_words -> Should return the number of words stored
// #
// # Difficulty:
// # 4/10
// #
// # Example:
// # dictionary = Dictionary.new
// # dictionary.addWord('ruby', 'A precious stone')
// # dictionary.totalWords -> should return 1
// # dictionary.lookup('ruby') -> should return 'A previous stone'

class Dictionary {
  constructor() {
    this.dictionary = {}
  }

  addWord(word, def) {
  	this.dictionary[word] = def
  }

  totalWords() {
  	return Object.keys(this.dictionary).length
  }

  lookup(word) {
  	return this.dictionary[word];
  }
}

const dictionary = new Dictionary
dictionary.addWord('ruby', 'A precious stone');
dictionary.addWord('diamond', 'Another precious stone');
console.log(dictionary.totalWords());
console.log(dictionary.lookup('diamond'));
console.log(dictionary.lookup('ruby'));