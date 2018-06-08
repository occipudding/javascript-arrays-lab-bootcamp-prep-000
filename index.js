const app = "I don't do much."

var kittens = [`Milo`,`Otis`,`Garfield`];

function kittens(kittens) {
  return kittens;
}

function destructivelyAppendKitten() {
  kittens.push(`Ralph`);
  return kittens;
}

kittens();

function destructivelyPrependKitten() {
  kittens.unshift(`Bob`);
  return kittens;
}

kittens();

