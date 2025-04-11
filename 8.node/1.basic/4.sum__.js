function sum_to_num(number) {
  console.log(`== 값 다 더하기 ====`);
  let sum = 0;
  for (let count = 1; count <= number; count++) {
    sum += count; // count를 sum에 더해줌
  }
  console.log(`${sum}`);
}

sum_to_num(10);