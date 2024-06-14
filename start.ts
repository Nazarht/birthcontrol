const pluralityCheck = (amount: number) =>{
  return amount > 1 ? "s" : ""
}

/*
 * Age: is your cuurent age
 * Year: is the year you want to know your age in in the same time as now
 * Birthday: true or false - did you have your birhtday yet?
 */

function howOld(age: number, year: number, birthday: boolean) {
  const currentYear = new Date().getFullYear();
  const birthYear = birthday ? currentYear - age : currentYear - age - 1;

  if (year > currentYear) {
    const yearDifference = year - currentYear;
    const plusAge = age + yearDifference;
    return `You will be ${plusAge} in the year ${year}`;
  } else if (year < currentYear) {
    const beforeBirth = birthYear - year;
    if (birthYear > year) {
      return `The year ${year} was ${beforeBirth} year${pluralityCheck(beforeBirth)} before you were born`;
    } else if (birthYear < year) {
      const afterBirth = year - birthYear;

      return `You were ${afterBirth} year${pluralityCheck(afterBirth)} old in the year ${year}`;
    } else if (birthYear === year) {
      return `Thats the year you were born!`;
    }
  } else if (year === currentYear) {
    return `You're ${age} now!`;
  }
}

console.log(howOld(26, 1997, false));
