function time(num) {
  let h = Math.trunc(num / 3600);
  let m = Math.trunc((num % 3600) / 60);
  let s = num % 60;
  let res = [h, m, s].map((el) => el.toString().padStart(2, "0"));
  return res.join(" : ");
}

// console.log(time(45678));

function createArray(count) {
  let res = [];
  let resWrapper = [];
  for (let i = 0; i < count; i++) {
    res.push(0);
  }
  for (let i = 0; i < count; i++) {
    resWrapper.push(res);
  }

  return resWrapper;
}

// console.log(createArray(3));
function toCamelCase(str) {
  let res = str.split("-");
  let s = res.map(
    (el) => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase()
  );
  let camelCase = s.join("").slice(0, 1).toLowerCase() + s.join("").slice(1);

  return camelCase;
}

// console.log(toCamelCase("salom-world"));
// console.log(toCamelCase("lorem-ipsum-doloR"));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }
  introduce() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  }
}

// let student = new Student("John Doe", 20);
// console.log(student.introduce());

function createLink(link) {
  let str = link.split("-");
  if (link.startsWith("http://" || "https://")) {
    `<a href="${link}">${link}</a> videolar"`;
  }
  if (link.includes("http://" || "https://")) {
    `<a href="${link}">${link}</a> videolar"`;
  }
  return str;
}

// console.log( createLink("habarlar https://kun.uz/") );
// // "habarlar <a href="https://kun.uz/">https://kun.uz/</a>""
// console.log( createLink("http://youtube.com videolar") );
// // "<a href="http://youtube.com">http://youtube.com</a> videolar"
// console.log( createLink("linkhttps://kun.uz/") );
// // "linkhttps://kun.uz/"

function allNines(x) {
  if (x > 4000) {
    return x;
  }

  return 0n; // x is a bigint
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg === distanceToPump) {
    return true;
  } else {
    return false;
  }
};

function testEven(n) {
  if (n % 2 === 0 || n === 0) {
    return true;
  } else {
    return false;
  }
}

function squareDigits(num) {
  for (let i = 0; i < num.length; i++) {
    
  }
}
