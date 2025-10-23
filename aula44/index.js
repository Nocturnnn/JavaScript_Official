try {
    // é executado quando não há erros
    console.log(a)
    console.log('abri um arquivo')
    console.log('fechei um arquivo')
} catch (e){
    // é executado quando há erros
    console.log('tratando erro')
} finally {
    // sempre
    console.log('sempre sou executado')
}