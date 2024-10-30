document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');//ใสในค่า backtotop
    
    // ฟังก์ชั่นการแสดง/ซ่อนปุ่ม
    function toggleButtonVisibility() {
        if (window.scrollY > 450) { // ใส่ค่าว่าเลื่อนไปเท่าไหร่ให้ปุ่มปรากฏ
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // การเลื่อนกลับให้เนียนตา
        });
    }


    // ฟังก์ตรวจการเลื่อน
    window.addEventListener('scroll', toggleButtonVisibility);

    // ฟังก์ชั่นคลิกปุ่ม
    backToTopButton.addEventListener('click', scrollToTop);

    //ฟังก์ชั่นเปิดปิดปุ่มข้อมูล
    document.getElementById('toggle-button').addEventListener('click', function() {
        var content = document.getElementById('toggle-content');//กำหรดตะัวแปรเปิด content
        var icon = document.getElementById('toggle-icon');//กำหนดตัวแปร icon ขึ้นลง
    
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            content.classList.add('show');
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });

});

