let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    const studentLoginForm = document.getElementById('student-login-form');
    if (studentLoginForm) {
        studentLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Simulate authentication and role assignment
            localStorage.setItem('userRole', 'student');
            window.location.href = 'student-dashboard.html';
        });
    }

    const teacherLoginForm = document.getElementById('teacher-login-form');
    if (teacherLoginForm) {
        teacherLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Simulate authentication and role assignment
            localStorage.setItem('userRole', 'teacher');
            window.location.href = 'teacher-dashboard.html';
        });
    }

    const adminLoginForm = document.getElementById('admin-login-form');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Simulate authentication and role assignment
            localStorage.setItem('userRole', 'admin');
            window.location.href = 'admin-dashboard.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const userRole = localStorage.getItem('userRole');
    const allowedRoles = document.body.getAttribute('data-allowed-roles');

    if (allowedRoles && !allowedRoles.split(',').includes(userRole)) {
        alert('You do not have access to this page.');
        window.location.href = 'index.html';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

document.querySelector('.carousel-prev').addEventListener('click', function() {
    moveSlide(-1);
});

document.querySelector('.carousel-next').addEventListener('click', function() {
    moveSlide(1);
});

function registerEvent(eventName) {
    alert(`You have registered for the ${eventName}`);
}
