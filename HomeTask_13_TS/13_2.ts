import { User } from './13_1';

interface Admin {
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function printPerson(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
    if ('occupation' in person) {
        console.log(`Occupation: ${person.occupation}`);
    }
    if ('role' in person) {
        console.log(`Role: ${person.role}`);
    }
}

persons.forEach(person => {
    printPerson(person);
});