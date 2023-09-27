function fizzbuzz() {
  for (let i = 0; i < 101; i++) {
    if (i % 15 == 0) {
      console.log('fizzbuzz: ' + i + '\n (' + i / 15 + ' * 15)');
    } else if (i % 3 == 0) {
      console.log('fizz: ' + i + '\n (' + i / 3 + ' * 3)');
    } else if (i % 5 == 0) {
      console.log('buzz:' + i + '\n (' + i / 5 + ' * 5)');
    } else {
      console.log(i);
    }
  }
}
fizzbuzz();
