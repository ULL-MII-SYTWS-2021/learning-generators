let str = '𝒳😂';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // garbage
}
for (let char of str) {
    console.log(char); // 𝒳, and then 😂
}