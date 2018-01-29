// Code your solution in this file

function findMatching(x, y) {
  return x.filter(function(num) {
    return num.toLowerCase() === y.toLowerCase();
  });
}

function fuzzyMatch(x, y) {
  return x.filter(function(name) {
    return name.slice(0, 2) === y;
  });
}

function matchName(x, y) {
  return x.filter(function(name) {
    return name["name"] === y;
  });
}
