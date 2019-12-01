// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Sai',
//   age: 30,
//   hobbies: ['Yoga', 'Painting'],
//   role: [66, 'dude'],
// };

enum Role {
  ADMIN = 3,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Sai',
  age: 30,
  hobbies: ['Yoga', 'Painting'],
  role: Role.ADMIN,
};

// person.role.push('Welcome, stranger!');

let favActivities: string[];
favActivities = ['Dude', 'Bro'];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person);
