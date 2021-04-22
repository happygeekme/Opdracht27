const whatIsYourAge = function(age) {
    if (age >= 18) return true;
    if (age < 18) return false;
};
// console.log (whatIsYourAge(18));

const greeting = function() {
  const adult = whatIsYourAge(18);
  if (adult == true) {
    return "Hello there";
  }
  if (adult == false) {
    return  "Hello Kiddo";
  }
};

console.log(greeting())


