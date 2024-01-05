var currentPage = 1;
    var totalPages = 2; // Toplam sayfa sayısı

    function changePage(pageDifference) {
        var nextPage = currentPage + pageDifference;

        // Geçerli sayfa kontrolü
        if (nextPage >= 1 && nextPage <= totalPages) {
            // Şu anki sayfayı gizle
            document.getElementById("page" + currentPage).style.display = "none";

            // Yeni sayfayı göster
            document.getElementById("page" + nextPage).style.display = "block";

            // Sayfa numarasını güncelle
            currentPage = nextPage;

            // Önceki Sayfa ve Sonraki Sayfa butonlarını kontrol et
            var prevButton = document.querySelector('.page-navigation button:first-child');
            prevButton.disabled = currentPage === 1;

            var nextButton = document.querySelector('.page-navigation button:last-child');
            nextButton.disabled = currentPage === totalPages;
        }
    }