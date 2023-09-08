// Membuat array dengan 100 nilai random antara 1 sampai 50
const mainArray = [];
for (let i = 0; i < 100; i++) {
  mainArray.push(Math.floor(Math.random() * 50) + 1);
}

// Membagi array menjadi dua berdasarkan indexnya
const evenArray = [];
const oddArray = [];
for (let i = 0; i < mainArray.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(mainArray[i]);
  } else {
    oddArray.push(mainArray[i]);
  }
}

// Fungsi untuk menghitung Min
function calculateMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Fungsi untuk menghitung Max
function calculateMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Fungsi untuk menghitung Total
function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Fungsi untuk menghitung Rata-rata
function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const total = calculateTotal(arr);
  return total / arr.length;
}

// Menghitung Min, Max, Total, dan Rata-rata pada setiap array
const minEven = calculateMin(evenArray);
const maxEven = calculateMax(evenArray);
const totalEven = calculateTotal(evenArray);
const averageEven = calculateAverage(evenArray);

const minOdd = calculateMin(oddArray);
const maxOdd = calculateMax(oddArray);
const totalOdd = calculateTotal(oddArray);
const averageOdd = calculateAverage(oddArray);

// Menampilkan output sesuai permintaan
console.log('Array dengan index 100 data:', mainArray);
console.log('Array genap index 50 data:', evenArray);
console.log('Array ganjil index 50 data:', oddArray);
console.log('Min, Max, Total, dan Rata-rata pada Array Genap:');
console.log('Min:', minEven);
console.log('Max:', maxEven);
console.log('Total:', totalEven);
console.log('Rata-rata:', averageEven);
console.log('Min, Max, Total, dan Rata-rata pada Array Ganjil:');
console.log('Min:', minOdd);
console.log('Max:', maxOdd);
console.log('Total:', totalOdd);
console.log('Rata-rata:', averageOdd);

// Membandingkan nilai antara array genap dan ganjil
if (minEven > maxOdd) {
  console.log('Min lebih besar pada array genap');
} else if (maxOdd > minEven) {
  console.log('Max lebih besar pada array ganjil');
} else {
  console.log('Min dan Max memiliki nilai yang sama pada kedua array');
}

if (totalEven === totalOdd) {
  console.log('Total memiliki nilai yang sama pada kedua array');
} else {
  console.log('Total berbeda pada kedua array');
}

if (averageOdd > averageEven) {
  console.log('Rata-rata lebih besar pada array ganjil');
} else {
  console.log('Rata-rata lebih besar pada array genap');
}