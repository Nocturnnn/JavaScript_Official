const data = new Date() //data do marco 0 em milesimos de segundo
console.log(data.toString())

const data2 = new Date(2004, 9, 6, 22, 0, 0) // ano, mês, dia, h, m, s, ms
console.log(data2.toString())

const data3 = new Date('2004-9-6 22:00:00')
console.log(data3.toString())