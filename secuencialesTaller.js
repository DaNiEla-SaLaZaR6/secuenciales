// ejercicio 1-a
// let A=2, B=5, C=1
// total1=3*A-4*B/A**2
// console.log(total1)

// ejercicio 1-b
// let A=2, B=5, C=1
// total2=(((B+C)/2*A+10)*3*B)-6
// console.log(total2)

// ejercicio 2
// let total, capital=0
// capital=parseFloat(prompt('dijite la capital que desea invertir'))
// total=capital-1.2
// console.log(`Por invertir en el banco usted ganara ${total}`)

// ejercicio 3
// let base, altura, total=0
// base=parseInt(prompt('dijite la base del triangulo'))
// altura=parseInt(prompt('dijite la altura de un triangulo'))
// total=base*altura/2
// console.log(total)

// ejercicio 4
// let salario=980000, comision=170000, valorDeVenta=0, salarioTotal=0
// autos=parseInt(prompt('dijite la cantidad de autos vendidos en el mes:'))
// valorDeVenta=parseInt(prompt('dijite el valor total de  las ventas del mes '))
// montoVentas=(comision*autos)+(valorDeVenta*5/100)
// salarioFin=salario+montoVentas
// console.log(`El salario total del empleado es: ${salarioFin}\n El monto de las ventas es:${montoVentas}`)

// ejercicio 5
// let nota1, nota2, nota3, nota4, porcentaje1, porcentaje2=0
// nota1=parseFloat(prompt('Dijite la nota 1:'))
// nota2=parseFloat(prompt('Dijite la nota 2:'))
// nota3=parseFloat(prompt('Dijite la nota 3:'))
// nota4=parseFloat(prompt('Dijite la nota 4:'))
// porcentaje1=(nota1+nota2)*0.40
// porcentaje2=(nota3+nota4)*0.60
// console.log(`El porcenta de las calificaciones es:\n Porcentaje de las notas 40% es : ${porcentaje1}\n Porcentaje de las notas 60% es:${porcentaje2} `)

// ejercicio 6
// let pulsaciones=0
// edad=parseInt(prompt('dijite la edad:'))
// pulsaciones=(220-edad)/10
// console.log(`Su edad es de ${edad} Y Sus pulsaciones por cada 10 seg de ejercicios  son: ${pulsaciones}`)

// ejercicio 7
// let sueldoBase=980000, comision,sueldoTotal=0
// ventas=parseFloat(prompt('Dijite el valor totla de las 3 ventas realizadas:'))
// comision=ventas*10/100
// sueldoTotal=comision+sueldoBase
// console.log(`Su sueldo base es de:${sueldoBase}\nSu comision es de ${comision}\n Su sueldo total es de:${sueldoTotal}`)

// ejercicio 8
// let matematicas, proMate1, proMte2, fisica, proFisica1, proFisica2, quimica, notaQuimica1=0
// notaMate1=parseInt(prompt('Dijite la nota del examen de MATEMATICAS:'))
// notaTareMate1=parseInt(prompt('Dijite la nota de la tarea #1 de MATEMATICAS:'))
// notaTareMate2=parseInt(prompt('Dijite la nota de la tarea #2 de MATEMATICAS:'))
// notaTareMate3=parseInt(prompt('Dijite la nota de la tarea #3 de MATEMATICAS:'))
// proMate1=notaMate1*90/100
// proMte2=(notaTareMate1+notaTareMate2+notaTareMate3/3)*10/100
// matematicas=proMate1+proMte2/2

// notafisica1=parseInt(prompt('Dijite la nota del examen de FISICA:'))
// notaTareFisica1=parseInt(prompt('Dijite la nota de la tarea #1 de FISICA:'))
// notaTareFisica2=parseInt(prompt('Dijite la nota de la tarea #2 de FISICA:'))
// proFisica1=notafisica1*80/100
// proFisica2=(notaTareFisica1+notaTareFisica2/2)*20/100
// fisica=proFisica1+proFisica2/2

// notaQuimica1=parseInt(prompt('Dijite la nota del examen de QUIMICA:'))
// notaTareQuimica1=parseInt(prompt('Dijite la nota de la tarea #1 de QUIMICA:'))
// notaTareQuimica2=parseInt(prompt('Dijite la nota de la tarea #2 de QUIMICA:'))
// notaTareQuimica3=parseInt(prompt('Dijite la nota de la tarea #3 de QUIMICA:'))
// proQuimica1=notaQuimica1*85/100
// proQuimica2=(notaTareQuimica1+notaTareQuimica2+notaTareQuimica3/3)*15/100
// quimica=proQuimica1+proQuimica2/2

// console.log(`MATEMATICAS`)
// console.log(`El promedio de su nota del examen en MATEMATICAS es: ${proMate1}% y su proemdio de tareas de MATEMATICAS es:${proMte2}%\nSu prmedio total en el area de MATEMATICAS es:${matematicas}%`)
// console.log(`__________________`)

// console.log(`FISICA`)
// console.log(`El promedio de su nota del examen en FSICA es: ${proFisica1}% y su proemdio de tareas de FISICA es:${proFisica2}%\nSu prmedio total en el area de FISICA es:${fisica}%`)
// console.log(`__________________`)

// console.log(`QUIMICA`)
// console.log(`El promedio de su nota del examen en QUIMICA es: ${proQuimica1}% y su proemdio de tareas de QUIMICA es:${proQuimica2}%\nSu prmedio total en el area de QUIMICA es:${quimica}%`)
// console.log(`__________________`)