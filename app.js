// Set the start date - using format YYYY-MM-DD for reliability
const startDate = new Date("2023-04-07")

function updateCounter() {
  const currentDate = new Date()

  
  let years = currentDate.getFullYear() - startDate.getFullYear()
  let months = currentDate.getMonth() - startDate.getMonth()

  // Adjust years and months if needed
  if (months < 0) {
    years--
    months += 12
  }

  // Calculate days
  const tempDate = new Date(currentDate)
  tempDate.setDate(0) // Last day of previous month
  const monthDays = tempDate.getDate()

  let days = currentDate.getDate() - startDate.getDate()
  if (days < 0) {
    months--
    if (months < 0) {
      years--
      months += 12
    }
    days += monthDays
  }

  // Calculate hours and minutes
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()

  document.getElementById("counter").innerHTML = `Estamos juntos hace:<br>
    ${years} año, ${months} meses, ${days} días, ${hours} horas y ${minutes} minutos.<br>
    Y espero que sea mucho tiempo más ❤️`
}

// Update counter immediately and then every second
updateCounter()
setInterval(updateCounter, 1000)