let img = document.querySelector(".img");
let contaniner = document.querySelector(".contaniner");
function phones(phone) {
  img.src = phone;
}
function colors(color) {
  contaniner.style.background = color;
}
///////////////////////////////////////////////////
const cards = document.querySelectorAll(".glass-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // الموضع الأفقي داخل البطاقة
    const y = e.clientY - rect.top; // الموضع الرأسي داخل البطاقة

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // حساب زاوية الدوران (أقصى ميل 15 درجة)
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    // إعادة البطاقة لوضعها الطبيعي بنعومة
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    card.style.transition = "all 0.5s ease";
  });

  card.addEventListener("mouseenter", () => {
    card.style.transition = "none"; // لإلغاء التنعيم أثناء الحركة الفعلية لزيادة الاستجابة
  });
});