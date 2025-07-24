document.addEventListener("DOMContentLoaded", function () {
    const steps = ["step1", "step2", "step3"];
    const progressItems = document.querySelectorAll(".step-item");
    const stepCircles = document.querySelectorAll(".step-circle");
    const progressFill = document.getElementById("progress-fill");
    const gifPath = "https://cdn.jsdelivr.net/gh/ciko99code/source_99code@v1/cdn-panel/img/cat.gif";
    let currentStep = 0;

    function showStep(index) {
        steps.forEach((id, i) => {
            const section = document.getElementById(id);
            if (!section) return;

            if (i === index) {
                section.style.display = "block";
                setTimeout(() => section.classList.add("active"), 10);
            } else {
                section.classList.remove("active");
                setTimeout(() => section.style.display = "none", 300);
            }
        });

        progressItems.forEach((el, i) => {
            el.classList.remove("active", "done");
            if (i < index) el.classList.add("done");
            if (i === index) el.classList.add("active");
        });

        stepCircles.forEach((circle, i) => {
            circle.innerHTML = ""; // Kosongkan isi circle
            if (i === index) {
                const gif = document.createElement("img");
                gif.src = gifPath;
                gif.alt = "cat";
                gif.className = "character-gif";
                circle.appendChild(gif);
            }
        });

        const progressPercent = (index) / (steps.length - 1) * 100;
        progressFill.style.width = `${progressPercent}%`;

        currentStep = index;
    }

    window.nextStep = function (targetIndex) {
        if (targetIndex > currentStep && targetIndex <= steps.length) {
            showStep(targetIndex - 1);
        }
    };

    window.prevStep = function (targetIndex) {
        if (targetIndex - 1 < currentStep && targetIndex > 0) {
            showStep(targetIndex - 1);
        }
    };
    
    showStep(0);
});
