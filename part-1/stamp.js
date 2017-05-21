var Stamp = function(args = {}) {
  this.name = args.name;
  this.issueDate = args.issueDate;
  this.appraisalValues = args.appraisalValues || [];
}
