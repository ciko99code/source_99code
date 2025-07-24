document.addEventListener("DOMContentLoaded", function () {
    function updateDateTime() {
        const now = new Date();

        // Format tanggal dalam Bahasa Indonesia
        const dateFormatter = new Intl.DateTimeFormat('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Jakarta'
        });
        document.getElementById("todayDate").textContent = dateFormatter.format(now);

        // Format waktu 12-jam dengan AM/PM
        const timeFormatter = new Intl.DateTimeFormat('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true, // aktifkan AM/PM
            timeZone: 'Asia/Jakarta'
        });
        document.getElementById("currentTime").textContent = timeFormatter.format(now);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
