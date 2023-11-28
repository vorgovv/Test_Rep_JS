export interface User {
    name: string;
    age: number;
    occupation: string;
    role?: string;
    car?: string; 
    children?: number;
  }
  
  const users: User[] = [
    {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep',
      car: 'VW',
    },
    {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut',
      children: 2,
    },
  ];
  
  users.forEach((user) => {
    console.log(`${user.name} is ${user.age} years old and works as a ${user.occupation}.`);
  
    if (user.car) {
      console.log(`${user.name} owns a ${user.car}.`);
    }
  
    if (user.children) {
      console.log(`${user.name} has ${user.children} children.`);
    }
  
    console.log('---');
  });  