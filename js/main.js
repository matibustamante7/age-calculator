document.getElementById("ageCalculatorForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // obtengo los datos ingresados del formulario
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');

    // mensaje de error
    const errorElement = document.getElementById('error');

    // parseo los datos recibidos a numeros
    const year = parseInt(yearInput.value, 10)
    const month = parseInt(monthInput.value, 10)
    const day = parseInt(dayInput.value, 10)

    // console.log(`naciste el ${day}/${month}/${year}`);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        errorElement.textContent = "Datos no válidos"
    } else if (day < 1 || day > 31) {
        errorElement.textContent = "Dia no valido" 
    } else if (month < 1 || month > 12) {
        errorElement.textContent = "Mes no valido" 
    } else{
        errorElement.textContent = ""
    }

    // ahora calculamos 
    // necesito el dia de la fecha para calcular exacto
    const today = new Date();
    
    // devuelve el dia en numero
    const dayToday = today.getDate();
    // devuelve el mes en array desde 0 por eso se suma 1
    const monthToday = today.getMonth() + 1;
    
    const yearToday = today.getFullYear();

    // console.log(`dia de la fecha ${dayToday}/${monthToday}/${yearToday}`)

    const birthDate = new Date(year, month - 1, day); // Restamos 1 al mes ya que los meses se indexan desde 0.

    const responseDay = dayToday - day;
    const responseMonth = monthToday - month;
    const responseYear = yearToday - birthDate.getFullYear();

    // console.log(responseDay, responseMonth, responseYear);

    // respuestas
    const days = document.getElementById('days')
    const months = document.getElementById('months')
    const years = document.getElementById('years')

    if (responseDay ) {
        days.textContent = responseDay
    }
    if (responseMonth) {
        months.textContent = responseMonth
    }
    if (responseYear) {
        years.textContent = responseYear
    }

});
