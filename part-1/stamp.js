var Stamp = function(args = {}) {
  this.name = args.name;
  this.issueDate = args.issueDate;
  this.appraisalValues = args.appraisalValues || [];
};

Stamp.prototype.averageAppraisal = function() {
  var total = this.appraisalValues.reduce(function(memo, val) {return memo + val}, 0);
  return total/this.appraisalValues.length;
};

Stamp.prototype.maximumAppraisal = function() {
  var sortedStampAppraisals = this.appraisalValues.sort().reverse();
  return sortedStampAppraisals[0];
}
