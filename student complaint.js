// ================================
// DOM ELEMENTS
// ================================

const form = document.getElementById("complaintForm");
const history = document.getElementById("history");
const description = document.getElementById("description");
const counter = document.getElementById("count");

// ================================
// CHARACTER COUNTER
// ================================

description.addEventListener("input", () => {
    counter.textContent = description.value.length;
});

// ================================
// SUBMIT COMPLAINT
// ================================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const room = document.getElementById("room").value.trim();
    const type = document.getElementById("type").value;
    const priority = document.getElementById("priority").value;
    const issue = description.value.trim();

    if (name === "" || room === "" || issue === "") {
        showNotification("Please fill in all required fields!", "#ef4444");
        return;
    }

    const complaint = document.createElement("div");
    complaint.className = "complaint-card";

    complaint.innerHTML = `
        <h3>${type}</h3>

        <p><strong>👤 Student:</strong> ${name}</p>

        <p><strong>🏠 Room:</strong> ${room}</p>

        <p><strong>⚡ Priority:</strong> ${priority}</p>

        <p><strong>📝 Description:</strong><br>${issue}</p>

        <span class="status">⏳ Pending</span>
    `;

    history.prepend(complaint);

    showNotification("Complaint submitted successfully!", "#22c55e");

    form.reset();
    counter.textContent = "0";
});

// ================================
// SUCCESS NOTIFICATION
// ================================

function showNotification(message, color) {

    const notify = document.createElement("div");

    notify.innerText = message;

    notify.style.position = "fixed";
    notify.style.top = "25px";
    notify.style.right = "25px";
    notify.style.background = color;
    notify.style.color = "white";
    notify.style.padding = "15px 25px";
    notify.style.borderRadius = "12px";
    notify.style.fontWeight = "600";
    notify.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
    notify.style.zIndex = "9999";
    notify.style.opacity = "0";
    notify.style.transition = ".3s";

    document.body.appendChild(notify);

    setTimeout(() => {
        notify.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        notify.style.opacity = "0";

        setTimeout(() => {
            notify.remove();
        }, 300);

    }, 2500);

}