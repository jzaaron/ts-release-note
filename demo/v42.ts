
/**
 * Reverting Template Literal Inference (as const explicit)
 */

const word = 'world!';

const val = `hello ${word}` as const;

