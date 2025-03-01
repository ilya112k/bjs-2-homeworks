function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = undefined;
    this.marks = [];
    this.excluded = undefined;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.excluded === undefined) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0)  {
      return 0;
  }

  const sum = this.marks.reduce((sum, mark) => sum += mark, 0);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    this.marks = undefined;
    this.subject = undefined;
}
