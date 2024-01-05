var complaints = JSON.parse(localStorage.getItem("complaints")) || [
    {
        id: 'comment1',
        company: 'B COMPANY',
        subject: 'Hizmet',
        content: 'B firması hizmet konusunda çok kötü. Puanım 10 üzerinden 1.',
        date: '2023-01-01',  // Örnek bir tarih formatı
        owner: 'Ahmet Berke',   // Şikayet sahibinin adı
        description: 'Şirketin hizmetleri çok yetersiz.',  // Şikayet açıklaması
        status: 'In Progress'  // Şikayet durumu
    },
    {
        id: 'comment2',
        company: 'C COMPANY',
        subject: 'Fiyatlar',
        content: 'C firmasının fiyatları çok yüksek. Puanım 10 üzerinden 3.',
        date: '2023-01-15',  // Örnek bir tarih formatı
        owner: 'Ahmet Berke',   // Şikayet sahibinin adı
        description: 'Fiyatlar rekabetçi değil.',  // Şikayet açıklaması
        status: 'Closed'  // Şikayet durumu
    },
];


function openFormekle() {
    document.getElementById("form-div").style.display = "block";
}

function closeFormekle() {
    document.getElementById("form-div").style.display = "none";
}

function openForm(complaintId) {
    var complaint = getComplaintById(complaintId);

    // Doldurulan bilgileri form içine set et
    document.getElementById("name").value = complaint.company;
    document.getElementById("konu").value = complaint.subject;
    document.getElementById("comment").value = complaint.content;

    // Form içinde şikayet ID'sini ayarla
    document.getElementById("complaintId").value = complaintId;

    document.getElementById("form-div").style.display = "block";
}

function getComplaintById(commentId) {
    return complaints.find(c => c.id === commentId);
}

function submitComplaintForm() {
    // Form verilerini al
    var name = document.getElementById("name").value;
    var konu = document.getElementById("konu").value;
    var text = document.getElementById("comment").value;
    var date = document.getElementById("date").value;
    var owner = document.getElementById("owner").value;

    // Form verilerini doğrula (gerekiyorsa daha fazla doğrulama ekleyebilirsiniz)
    if (name.trim() === "" || konu.trim() === "" || text.trim() === "" || date.trim() === "" || owner.trim() === "") {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    // Eğer şikayet ID'si varsa (düzenleme modunu gösterir)
    var complaintId = document.getElementById("complaintId").value;

    if (complaintId) {
        // ID'ye göre mevcut şikayeti bul
        var existingComplaint = getComplaintById(complaintId);

        // Mevcut şikayeti güncelle
        existingComplaint.company = name;
        existingComplaint.subject = konu;
        existingComplaint.content = text;
        existingComplaint.date = date;
        existingComplaint.owner = owner;
    } else {
        // Yeni bir şikayet girdisi oluştur
        var newComplaintId = "comment" + (complaints.length + 1);
        var newComplaint = {
            id: newComplaintId,
            company: name,
            subject: konu,
            content: text,
            date: date,
            owner: owner
        };

        // Yeni şikayeti listeye ekle
        complaints.push(newComplaint);
    }

    // Şikayetleri göster
    displayComplaints();

    // Local storage'a kaydet
    localStorage.setItem("complaints", JSON.stringify(complaints));

    // Formu kapat
    closeFormekle();
}

// Helper function to get the current date in the required format
function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
}

function createComplaintHtml(complaint) {
    return `
        <div class="list-group-item">
            <div class="row">
                <div class="col-md-3">
                    <strong>Şirket Adı:</strong> ${complaint.company}
                </div>
                <div class="col-md-3">
                    <strong>Konu:</strong> ${complaint.subject}
                </div>
                <div class="col-md-2">
                    <strong>Tarih:</strong> ${complaint.date}
                </div>
                <div class="col-md-2">
                    <strong>Sahip:</strong> ${complaint.owner}
                </div>
                <div class="col-md-2">
                    <button class="btn btn-outline-dark btn-sm" onclick="openForm('${complaint.id}')">Değiştir</button>
                    <button class="btn btn-dark btn-sm" onclick="deleteComplaint('${complaint.id}')">Sil</button>
                </div>
            </div>
            <hr>
            <p>${complaint.content}</p>
        </div>
    `;
}


function displayComplaints() {
    var complaintsContainer = document.getElementById("complaintsContainer");
    complaintsContainer.innerHTML = "";

    for (var i = 0; i < complaints.length; i++) {
        var complaintHtml = createComplaintHtml(complaints[i]);
        complaintsContainer.innerHTML += complaintHtml;
    }
}

function deleteComplaint(commentId) {
    var confirmation = confirm("Bu şikayeti silmek istediğinizden emin misiniz?");
    if (confirmation) {
        // Find and remove the complaint
        var index = complaints.findIndex(c => c.id === commentId);
        if (index !== -1) {
            complaints.splice(index, 1);
            // Update the display
            displayComplaints();
            // Save to local storage
            localStorage.setItem("complaints", JSON.stringify(complaints));
            // Close the form after deleting
            closeFormekle();
        }
    }
}

// Sayfa yüklendiğinde şikayetleri göster
displayComplaints();
