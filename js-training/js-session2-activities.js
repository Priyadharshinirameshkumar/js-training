console.log("JavaScript Connected");
//Activity 1
console.log("1");

setTimeout(() => console.log("2"), 1000);

console.log("3");
// 3 logs before 2 because setTimeout runs asynchronously.
// JavaScript schedules the timer and continues executing the next statement.
console.log("1");

setTimeout(() => console.log("2"), 0);

console.log("3");
// Even with 0ms, setTimeout does not run immediately.
// It waits until the current code finishes executing.
console.log("Fetching data...");

setTimeout(() => {
    console.log("Data received!");
}, 2000);
//Activity 2
//task 1
const getData = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5
  setTimeout(() => {
    if (success)
      resolve("Data loaded!")
    else
      reject("Something went wrong")

  }, 1000)
})
getData
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
//task 2
const startValue = new Promise((resolve) => resolve(5));

startValue
  .then(num => num * 2)
  .then(num => num + 10)
  .then(result => console.log(result));

//task 3

const promise1 =
new Promise((resolve) =>
setTimeout(() =>
resolve("User loaded"), 1000))

const promise2 =
new Promise((resolve) =>
setTimeout(() =>
resolve("Orders loaded"), 1500))

Promise.all([promise1, promise2])
  .then(results => {
    console.log(results);
  });

  //Activity 3
  //task 1
  const getUser = async () => {
    try {
        const response =
        await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
        );
        const user =
        await response.json();
        console.log(user.name);
    } catch(error) {
        console.log(error);
    }
};
getUser();

//task 2 
const getUserById = async (id) => {
    const response =
    await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user =
    await response.json();
    return {
        name: user.name,
        email: user.email
    };
};
getUserById(3)
    .then(result => console.log(result));

//task 3
const getAllUsers = async () => {
    const response =
    await fetch(
    "https://jsonplaceholder.typicode.com/users"
    );
    const users =
    await response.json();

    return users.map(user => ({
        name: user.name,
        email: user.email
    }));
};
getAllUsers()
    .then(users => console.log(users));

    //Activity 4
    //task 1
    const fetchUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log("Error:", error.message);
  }
};
fetchUser();

//task 2
const fetchMissing = async () => {
  try {
    const response =
    await fetch(
    "https://jsonplaceholder.typicode.com/users/99999"
    );
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data =
    await response.json();
    console.log(data);
  } catch(error) {
    console.log(
      "Caught:",
      error.message
    );
  }
};
fetchMissing();
//task 3
const p1 =
fetch(
"https://jsonplaceholder.typicode.com/users/1"
);
const p2 =
fetch(
"https://wrongurl.com"
);
Promise.allSettled([p1, p2])  //If one promise fails,Still show all results
.then(results => {
  console.log(results);
});

//Activity 5
//task 1
document.querySelector("#title").textContent = "Hello, Intern!";

//task 2
document.querySelector("#subtitle").style.color = "blue";

//task 3
const counter =document.querySelector("#counter");
let value =Number(counter.textContent);
value++;
counter.textContent = value;

//task 4
const names =
[
    "Alice",
    "Bob",
    "Carol"
];
const userList =document.querySelector("#user-list");
names.forEach(name => {
    const li =document.createElement("li");
    li.textContent = name;
    userList.appendChild(li);
});

//task 5
document.querySelector("#title").classList.toggle("highlight");

//Activity 6
//task 1
const greetBtn =
document.querySelector("#greet-btn");
greetBtn.addEventListener(
"click",
() => {
    const name =
    document.querySelector("#name-input")
    .value;
    const greeting =
    document.querySelector("#greeting");
    if(name === "") {
        greeting.textContent =
        "Please enter a name";
    }
    else {
        greeting.textContent =
        `Hello, ${name}!`;
    }
});

//task 2
let clicks = 0;
document.querySelector("#add-btn")
.addEventListener(
"click",
() => {
    clicks++;
    document.querySelector("#click-count")
    .textContent =
    `Clicks: ${clicks}`;
});

document.querySelector("#reset-btn")
.addEventListener(
"click",
() => {
    clicks = 0;
    document.querySelector("#click-count")
    .textContent =
    "Clicks: 0";
});

//task 3
document.querySelector("#name-input")
.addEventListener(
"input",
(event) => {
    document.querySelector("#greeting")
    .textContent =
    `Hello, ${event.target.value}!`;
});

//task 4
document.querySelector("#name-input")
.addEventListener(
"keydown",
(event) => {
    if(event.key === "Enter") {
        document.querySelector("#greet-btn")
        .click();
    }
});

//activity 7 
const loadBtn = document.querySelector("#load-btn");
const status = document.querySelector("#status");
const container = document.querySelector("#users-container");
const searchInput = document.querySelector("#search");

let allUsers = [];

// Function to display users
function displayUsers(users) {
    container.innerHTML = "";
    users.forEach(user => {

        container.innerHTML += `
            <div>
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>City: ${user.address.city}</p>
                <hr>
            </div>
        `;
    });
}
// Load Users Button
loadBtn.addEventListener("click", async () => {
    try {
        status.textContent = "Loading...";
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const users = await response.json();
        allUsers = users;
        displayUsers(users);
        status.textContent =
            `${users.length} users loaded`;
    }
    catch (error) {
        status.textContent =
            "Failed to load users. Try again.";
        container.innerHTML = "";
    }
});
// Search Users
searchInput.addEventListener("input", (event) => {
    const searchText =
        event.target.value.toLowerCase();
    const filteredUsers =
        allUsers.filter(user =>
            user.name
                .toLowerCase()
                .includes(searchText)
        );
    displayUsers(filteredUsers);
});

//Activity 8
// TASK 1
const getUserAndPosts = async () => {
    const [userResponse, postsResponse] =
    await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users/1"),
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    ]);
    const user = await userResponse.json();
    const posts = await postsResponse.json();
    console.log(
        `${user.name} has ${posts.length} posts`
    );
};
getUserAndPosts();

// TASK 2
const usersContainer =
document.querySelector("#users-container");
["Alice","Bob","Carol"]
.forEach(name => {
    const p =
    document.createElement("p");
    p.textContent = name;
    usersContainer.appendChild(p);
});
// TASK 3
localStorage.setItem(
    "sampleUsers",
    JSON.stringify([
        {
            name:"Alice"
        },
        {
            name:"Bob"
        }
    ])
);
console.log(
    JSON.parse(
        localStorage.getItem(
            "sampleUsers"
        )
    )
);

// TASK 4

let controller;
document.querySelector("#load-btn")
.addEventListener("click", async () => {
    try {
        controller =
        new AbortController();
        const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                signal:
                controller.signal
            }
        );
        const users =
        await response.json();
        console.log(users);
    }
    catch(error) {
        if(error.name === "AbortError") {
         console.log(
                "Request Cancelled"
            );
        }
    }
});
document.querySelector("#cancel-btn")
.addEventListener("click", () => {
    if(controller) {
        controller.abort();
    }
});