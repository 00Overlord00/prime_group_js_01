var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];




var employeeRecord = function() {

  for (var i = 0; i < employees.length; i++) {

    var name = employees[i][0];
    var employeeNumber = employees[i][1];
    var salary = parseInt(employees[i][2]);
    var review = employees[i][3];
    var adjustedSalary = 0;
    var bonus = 0;
    var roundedBonus = 0;

    if (employeeNumber.length == 4) {
      bonus += 0.05;
    }

    if(salary >= 65000){
      bonus -= 0.01;
    }

    switch (review) {
      case 0:
      case 1:
      case 2:
        bonus = 0;
        break;
      case 3:
        bonus += 0.04;
        break;
      case 4:
        bonus += 0.06;
        break;
      case 5:
        bonus += 0.1;
        break;
      default:
    }

    if (bonus > 0.13){
      bonus = 0.13;
    }

    adjustedSalary = salary + (salary * bonus);
    roundedBonus = Math.round(salary * bonus);

    var newArray = [name, bonus, adjustedSalary, roundedBonus];

    console.log(newArray);

  }
};

employeeRecord(employees);

//Everything works to this point.
