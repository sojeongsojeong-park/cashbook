enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person: {
  name: string;
  age: number;
  hobbies: string[];
  //role: [number, string]; //tuple can't catch push error!
  role: Role;
} = {
  name: "sojeong",
  age: 25,
  hobbies: ["movie", "travel"],
  role: Role.ADMIN,
};
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
