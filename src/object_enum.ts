// const person: {
//     name: string,
//     age: number

// } = {
//     name: "Travis",
//     age: 30
// }

// console.log(person.name);

// const person : {
//      name: string,
//      age: number,
//      hobbies: string[],
//      role: [number,string]
// }  = {
//     name: "Travis",
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// person.role.push('admin');
// person.role = [2,'author','admin'];
// person.role[1] = 10;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;


enum Role {ADMIN = 5, READ_ONLY, AUTHOR}

const person = {
    name: "Travis",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

//we telling TS that favoriteActivities would be an array of String 
let favoriteActivities: any[];
favoriteActivities = ['Sports']

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby);
    
    // error because map is only for array not string
    // console.log(hobby.map()); 
}

if(person.role === Role.AUTHOR)
{
    console.log('is Admin');
}