//Return the second half of the input string. For odd lengths, don't include the middle character (ex: the last 2 characters of a 5 character string)
const grabSecondHalf = (str) => {
    const halfLength = Math.ceil(str.length/2);
    return str.substr(halfLength);
  };


  