type TDepartment = {
  name: string;
  salary: number;
};

type TCompanyTree = Record<string, TDepartment[] | TCompanyTree>;

const company: TCompanyTree = {
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

    internals: {
      client: [
        {
          name: 'Mag',
          salary: 300,
        },
      ],
      server: [
        {
          name: 'Don',
          salary: 33300,
        },
        {
          name: 'Max',
          salary: 700,
        },
      ],
    },
  },
};

export const findObjectArrsSumRec = (department: TCompanyTree): number => {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let result = 0;
    for (const subDeps of Object.values(department)) {
      result += findObjectArrsSumRec(subDeps);
    }
    return result;
  }
};

console.log(findObjectArrsSumRec(company));
