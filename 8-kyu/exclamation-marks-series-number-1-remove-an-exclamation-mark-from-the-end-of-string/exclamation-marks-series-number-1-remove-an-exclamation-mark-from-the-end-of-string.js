function remove (string) {
  return string[string.length-1] === "!" ? string.substring(0, string.length-1) : string;
}