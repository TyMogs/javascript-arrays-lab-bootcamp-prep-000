const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  var kittensNew = kittens.push(name)
  return kittensNew
}

function prependKitten(name) {
  var kittensNew = kittens.unshift(name)
  return kittensNew
}

function removeLastKitten() {
  var kittensNew = kittens.slice(0, kittens.length - 1)
  return kittensNew
}

function 



















