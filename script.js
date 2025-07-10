// Hiển thị năm hiện tại ở footer
document.getElementById("year").textContent = new Date().getFullYear();
<!-- Thêm vào cuối file, trước </body> -->
<script>
  // Hiển thị năm tự động
  document.getElementById('year').textContent = new Date().getFullYear();

  // Fade-in effect for sections on scroll + hiệu ứng động khi xuất hiện
  function revealOnScroll() {
    const sections = document.querySelectorAll('main section');
    sections.forEach((section, idx) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        setTimeout(() => section.classList.add('visible'), idx * 120);
      }
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  // Hiệu ứng động cho avatar
  document.addEventListener("DOMContentLoaded", function() {
    const avatar = document.querySelector('.avatar');
    if (avatar) {
      avatar.style.opacity = 0;
      avatar.style.transform = "scale(0.7)";
      setTimeout(() => {
        avatar.style.transition = "all 0.8s cubic-bezier(.68,-0.55,.27,1.55)";
        avatar.style.opacity = 1;
        avatar.style.transform = "scale(1)";
      }, 300);
    }
  });

  // Phát nhạc tự động khi mở trang
  window.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.volume = 0.5; // chỉnh âm lượng nếu muốn
      audio.play().catch(() => {
        // Một số trình duyệt chặn autoplay, có thể cần thao tác người dùng
      });
    }
  });
  const nameText = "Lê Minh Quân";
const typingElement = document.getElementById("typing-name");
let index = 0;

function typeWriter() {
  if (index < nameText.length) {
    typingElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // tốc độ đánh máy
  }
}

window.onload = typeWriter; // chạy khi load trang

</script>