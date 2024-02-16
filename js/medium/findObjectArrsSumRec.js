var company = {
  sales: [
    {
      name: 'John',
      salary: 1000,
    },
    {
      name: 'Alice',
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000,
      },
      {
        name: 'Alex',
        salary: 1800,
      },
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300,
      },
    ],
  },
};

function findObjectArrsSumRec(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    var result = 0;
    var subDeps = Object.values(department);

    for (var i = 0; i < subDeps.length; i++) {
      result += findObjectArrsSumRec(subDeps[i]);
    }
    return result;
  }
}

console.log(findObjectArrsSumRec(company));
