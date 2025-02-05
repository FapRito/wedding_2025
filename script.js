// Đếm ngược thời gian đến ngày cưới
const weddingDate = new Date("2023-12-31T00:00:00").getTime(); // Thay đổi ngày cưới tại đây

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây
    `;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Đám cưới đã diễn ra!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Guestbook
const guestbookForm = document.getElementById("guestbook-form");
const guestbookEntries = document.getElementById("guestbook-entries");

guestbookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const entry = document.createElement("div");
    entry.innerHTML = `<strong>${name}:</strong> ${message}`;
    guestbookEntries.appendChild(entry);

    // Xóa form sau khi gửi
    guestbookForm.reset();
});