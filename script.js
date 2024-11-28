// Fungsi untuk menampilkan kategori berdasarkan pilihan
function showCategory(category) {
    const categories = document.querySelectorAll('.content');
    categories.forEach(function (section) {
        section.style.display = 'none';
    });

    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}

// Fungsi untuk toggle dropdown
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Membuat halaman awal tampil dengan kategori "home"
document.addEventListener('DOMContentLoaded', function () {
    showCategory('home');
});
