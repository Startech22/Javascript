//Refazer anterior -5 com async e await
async function makeAllCaps(words) {
  let promise = new Promise((resolve, reject) => {
    const result = [];
      for (let word of words) {
         if (typeof word !== 'string') {
            reject(word);
            return;
         }
        result.push(word.toUpperCase());
        result.sort();
  }
    resolve(result);
  });
  let res = await promise; // wait until the promise resolves (*)
  console.log(res); // result:  "Done!"
}
makeAllCaps(["maça", "carambola", "abacaxi", "banana"])