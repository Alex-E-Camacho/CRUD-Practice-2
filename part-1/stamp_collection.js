var StampCollection = function(stamps) {
  this.stamps = stamps || [];
}

StampCollection.prototype.stampNamed = function(searchedName) {
  function nameMatches(stamp) {
    return stamp.name === searchedName;
  }
  return this.stamps.find(nameMatches);
};

StampCollection.prototype.stampsIssued = function(searchedDate) {
  return this.stamps.filter(function(stamp) {
    return stamp.issueDate === searchedDate;
  })
};

StampCollection.prototype.value = function() {
  return this.stamps.reduce(function(memo, stamp) {return memo + stamp.maximumAppraisal()},0);
}
