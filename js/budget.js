// ================================
// CÁLCULO DE PRESUPUESTO
// ================================

// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los elementos del formulario
  const courseSelect = document.getElementById("curso");
  const monthsInput = document.getElementById("meses");
  const extrasCheckboxes = document.querySelectorAll(".extra");
  const totalPriceElement = document.getElementById("total-price");
  const form = document.getElementById("formulario-web");

  // ================================
  // FUNCIÓN DE CÁLCULO
  // ================================
  function calculateTotal() {
    const coursePrice = Number(courseSelect.value);
    const months = Number(monthsInput.value);

    let total = coursePrice * months;

    // Descuentos por duración
    if (months >= 3 && months <= 5) {
      total *= 0.95; // 5%
    } else if (months >= 6) {
      total *= 0.9; // 10%
    }

    // Extras
    extrasCheckboxes.forEach((extra) => {
      if (extra.checked) {
        total += Number(extra.value);
      }
    });

    return total;
  }

  // ================================
  // SUBMIT DEL FORMULARIO
  // ================================
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const total = calculateTotal();

    // Mostrar el total solo al enviar
    totalPriceElement.textContent = `Total: €${total.toFixed(2)}`;

    // Scroll suave al total
    totalPriceElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
