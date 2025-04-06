// Set the start date - using format YYYY-MM-DD for reliability
const startDate = new Date("2023-04-07T00:00:00")

function updateCounter() {
  const currentDate = new Date()

  // Forzar que la comparación sea precisa usando fechas sin zona horaria
  const startYear = startDate.getFullYear()
  const startMonth = startDate.getMonth()
  const startDay = startDate.getDate()

  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  // Verificar explícitamente si ya pasamos el aniversario este año
  const isPastAnniversaryDay = currentMonth > startMonth || (currentMonth === startMonth && currentDay >= startDay)

  // Calcular años completos
  let years = currentYear - startYear
  if (!isPastAnniversaryDay) {
    years = years - 1
  }

  // Calcular meses y días restantes
  let months = 0
  let days = 0

  if (isPastAnniversaryDay) {
    // Si ya pasamos el aniversario este año
    months = currentMonth - startMonth
    days = currentDay - startDay
  } else {
    // Si aún no llegamos al aniversario este año
    months = currentMonth + 12 - startMonth
    if (currentDay >= startDay) {
      days = currentDay - startDay
    } else {
      // Obtener días del mes anterior
      const lastDayPrevMonth = new Date(currentYear, currentMonth, 0).getDate()
      months = months - 1
      days = currentDay + (lastDayPrevMonth - startDay)
    }
  }

  // Ajustar meses si es necesario
  if (months === 12) {
    months = 0
  }

  // Calcular horas y minutos
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()

  // Pluralización correcta
  const yearText = years === 1 ? "año" : "años"
  const monthText = months === 1 ? "mes" : "meses"
  const dayText = days === 1 ? "día" : "días"
  const hourText = hours === 1 ? "hora" : "horas"
  const minuteText = minutes === 1 ? "minuto" : "minutos"

  // Construir mensaje
  document.getElementById("counter").innerHTML = `Estamos juntos hace:<br>
    ${years} ${yearText}, ${months} ${monthText}, ${days} ${dayText}, ${hours} ${hourText} y ${minutes} ${minuteText}.<br>
    Y espero que sea mucho tiempo más ❤️`

  // Para depuración - puedes eliminar esto en producción
  console.log(`Fecha actual: ${currentDate}`)
  console.log(`¿Pasó el aniversario este año?: ${isPastAnniversaryDay}`)
  console.log(`Años: ${years}, Meses: ${months}, Días: ${days}`)
}

// Update counter immediately and then every second
updateCounter()
setInterval(updateCounter, 1000)

