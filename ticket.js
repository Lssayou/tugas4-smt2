const form = document.getElementById('ticketForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const category = document.getElementById('category');
      const quantity = document.getElementById('quantity');
      const payment = document.getElementById('payment');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const categoryError = document.getElementById('categoryError');
      const quantityError = document.getElementById('quantityError');
      const paymentError = document.getElementById('paymentError');

      [nameError, emailError, categoryError, quantityError, paymentError].forEach(e => e.classList.add('hidden'));

      let isValid = true;

      if (name.value.trim() === '') {
        nameError.classList.remove('hidden');
        isValid = false;
      }
      if (email.value.trim() === '') {
        emailError.classList.remove('hidden');
        isValid = false;
      }
      if (category.value === '') {
        categoryError.classList.remove('hidden');
        isValid = false;
      }
      if (quantity.value === '' || Number(quantity.value) < 1) {
        quantityError.classList.remove('hidden');
        isValid = false;
      }
      if (payment.value === '') {
        paymentError.classList.remove('hidden');
        isValid = false;
      }

      if (!isValid) return;

      // Show popup
      const overlay = document.getElementById('confirmationOverlay');
      const confirmationText = document.getElementById('confirmationText');
      confirmationText.innerText =
        `Terima kasih, ${name.value}! Anda telah membeli ${quantity.value} tiket kategori ${category.value} dengan metode pembayaran ${payment.value}. Info telah dikirim ke ${email.value}.`;
      
      overlay.classList.remove('hidden');

      form.reset();
    });