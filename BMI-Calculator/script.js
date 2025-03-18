function BMI() {
    let height = document
        .getElementById("h")
        .value;
    let weight = document
        .getElementById("w")
        .value;

    // Validasi input
    if (height === "" || weight === "" || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document
            .getElementById("result")
            .innerHTML = "⚠️ Masukkan tinggi dan berat yang valid!";
        return;
    }

    // Konversi ke number
    height = parseFloat(height);
    weight = parseFloat(weight);

    // Perhitungan BMI
    let bmi = weight / ((height / 100) ** 2);
    let bmio = bmi.toFixed(2);

    // Menentukan kategori BMI
    let category = "";
    if (bmi < 18.5) {
        category = "Kurus (Underweight)";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Gemuk (Overweight)";
    } else {
        category = "Obesitas";
    }

    // Menampilkan hasil
    document
        .getElementById("result")
        .innerHTML = `📊 BMI Anda: ${bmio} (${category})`;
}

function calculateCalories() {
    let height = parseFloat(document.getElementById("h").value);
    let weight = parseFloat(document.getElementById("w").value);
    let gender = document
        .getElementById("gender")
        .value;
    let activity = parseFloat(document.getElementById("activity").value);
    let age = 25; // Bisa ditambahkan input usia jika diperlukan

    // Validasi input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document
            .getElementById("calorie-result")
            .innerHTML = "⚠️ Masukkan tinggi dan berat yang valid!";
        return;
    }

    let bmr;
    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    let tdee = bmr * activity;

    // Menampilkan hasil
    document
        .getElementById("calorie-result")
        .innerHTML = `🔥 Kebutuhan Kalori Harian Anda: <strong>${tdee.toFixed(2)} kcal</strong>`;
}
