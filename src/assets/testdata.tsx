//This is only temporary test data for the user table view.
var users = [
    { id: 1, firstName: "Alice", name: "Smith", email: "alice@gmail.com", department: "Engineering", role: "Developer", tasks: ["placeholder1",] },
    { id: 2, firstName: "Bob", name: "Johnson", email: "bob@gmail.com", department: "Design", role: "Designer", tasks: ["placeholder2"] },
    { id: 3, firstName: "Charlie", name: "Brown", email: "charlie@gmail.com", department: "Marketing", role: "Marketer", tasks: ["placeholder3"] },
    { id: 4, firstName: "Diana", name: "Prince", email: "diana@gmail.com", department: "Management", role: "Manager", tasks: ["placeholder4"] },
    { id: 5, firstName: "Ethan", name: "Hunt", email: "ethan@gmail.com", department: "Operations", role: "Operator", tasks: ["placeholder5"] },
    { id: 6, firstName: "Fiona", name: "Gallagher", email: "fiona@gmail.com", department: "Finance", role: "Accountant", tasks: ["placeholder6"] },
    { id: 7, firstName: "George", name: "Miller", email: "george@gmail.com", department: "HR", role: "HR Specialist", tasks: ["placeholder7"] },
];

export default users;


//For now, the users aren't dependent on the types.ts definitions.
//Later, real Task objects with all properties should be assigned to the users' tasks array. Extended view of the tasks will be available upon clickin on a task.