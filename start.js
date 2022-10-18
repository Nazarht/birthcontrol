function howOld(age,year) {
    let currentYear = 2022;
    let birthYear = currentYear - age;
    if (year > currentYear) {
      let yearDifference = year - currentYear;
      let plusAge = age + yearDifference;
      return `You will be ${plusAge} in the year ${year}`
    } else if (year < currentYear){
      let beforeBirth = birthYear - year;
      let afterBirth = year - birthYear
        if (birthYear > year) {
          return `The year ${year} was ${beforeBirth} years before you were born`
        } else if (birthYear < year) {
          return `You were ${afterBirth} in the year ${year}`
        } else if (birthYear === year) {
          return `Thats the year you were born!`
        }
    } else if (year === currentYear) {
      return `Youre ${age} now!`;
    }
  }

  console.log(howOld( 24, 1998))

  