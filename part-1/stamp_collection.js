var StampCollection = function(stamps) {
  this.stamps = stamps || [];
}

StampCollection.prototype.stampNamed = function(searchedName) {
  function nameMatches(stamp) {
    return stamp.name === searchedName;
  }
  return this.stamps.find(nameMatches);
};
