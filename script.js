// ============================================================
// عيادة لآلئ لطب الأسنان — سكربت بسيط
// ملاحظة: قائمة الموبايل تعمل بالكامل عبر CSS (checkbox trick)
// دون الحاجة لجافاسكربت، لذلك هذا الملف يقتصر على نموذج الحجز.
// ============================================================

const bookingForm = document.getElementById('booking-form');
const formNote = document.getElementById('form-note');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (event) {
    // نمنع الإرسال الفعلي لأن هذه الصفحة تجريبية بدون خادم (backend)
    event.preventDefault();

    // TODO: عند ربط الموقع بخادم حقيقي، استبدلي هذا الجزء
    // بطلب fetch() يرسل بيانات الفورم إلى الـ API الخاص بالعيادة.
    formNote.textContent = 'تم استلام طلبك بنجاح، سيتواصل معك فريقنا قريباً لتأكيد الموعد.';
    formNote.style.color = 'var(--color-primary)';

    bookingForm.reset();
  });
}

// إغلاق قائمة الموبايل تلقائياً عند الضغط على أحد الروابط
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (navToggle) {
      navToggle.checked = false;
    }
  });
});
