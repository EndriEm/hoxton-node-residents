type resident = {
    id: number,
    name: string,
    age: number,
    gender: string,
    houseId: number
  }


export const houses = [
  {
    id: 1,
    address: "Road 1",
    type: "house",
  },
  {
    id: 2,
    address: "Road 2",
    type: "flat",
  },
  {
    id: 3,
    address: "Road 3",
    type: "farm",
  }

];

export const residents: resident[] = [
    {
      id: 1,
      name: "Tea",
      age: 25,
      gender: "female",
      houseId: 1
    },
    {
        id: 2,
        name: "John",
        age: 26,
        gender: "male",
        houseId: 1
      }, {
        id: 3,
        name: "Lora",
        age: 27,
        gender: "female",
        houseId: 2
      }, {
        id: 4,
        name: "Dean",
        age: 28,
        gender: "male",
        houseId: 3
      }, {
        id: 5,
        name: "Zoe",
        age: 29,
        gender: "female",
        houseId: 3
      }, {
        id: 6,
        name: "Ross",
        age: 30,
        gender: "male",
        houseId: 3
      },
 
  ];
