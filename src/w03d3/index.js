/**
 * An empty array.
 *
 * Use the `.` accessor to see what properties and methods are
 * available on the array.
 */
const emptyArray = [];

/**
 * An empty object.
 *
 * Use the `.` accessor to see what properties and methods are
 * available on the object.
 *
 * Notice that there are none! An empty object is empty: no
 * properties, no methods. We need to define the properties and
 * methods ourselves.
 */
const emptyObject = {};

/**
 * An object with properties.
 *
 * We can access an object's properties using the `.` accessor on
 * the object.
 */
const user = {
  firstName: "John",
  lastName: "Smith",
};

user.firstName;
user.lastName;

/**
 * We use objects as function parameters.
 *
 * This one assumes that a person has a `firstName` and a `lastName`.
 */
function initials(person) {
  const firstInitial = person.firstName[0];
  const lastInitial = person.lastName[0];

  return `${firstInitial}${lastInitial}`.toLocaleUpperCase();
}

const userInitials = initials(user);

userInitials;

/**
 * We can also include getters in an object to define properties that are
 * evaluated like methods.
 *
 * Notice that the `.` accessor allows you to get the object's `email` and
 * `username` as if it were a simple property.
 *
 * Also, notice how we use the `this` keyword to access properties inside
 * the object.
 */
const employee = {
  firstName: "Olive",
  lastName: "Rudd",

  get email() {
    return `${this.firstName}.${this.lastName}@example.com`.toLocaleLowerCase();
  },
};

const email = employee.email;
email;

/**
 * We can also include setters in an object to define properties that are
 * evaluated like methods.
 *
 * Notice that `actualPassword` is a real property that can be set too!
 */
const secureEmployee = {
  actualPassword: "secret",
  firstName: "Alf",
  lastName: "Brockwell",

  set password(newPassword) {
    if (newPassword.length < 8) {
      throw "Too short"; // this tells the caller that something is wrong
    } else {
      this.actualPassword = newPassword;
    }
  },

  get username() {
    return `${this.firstName[0]}.${this.lastName}`.toLocaleLowerCase();
  },
};

secureEmployee.password = "h4rd2gu3ss"; // set the `password` property.

/**
 * We can inspect the properties and methods of an object using the `Object`
 * type.
 *
 * There is also an `Array` type that offers some additional methods for
 * working with arrays.
 */
const keys = Object.keys(user);
keys;

const values = Object.values(user);
values;

const entries = Object.entries(user);
entries;
