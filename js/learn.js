// learn.js

document.addEventListener("DOMContentLoaded", () => {
    // Ejemplo de actualización de progreso
    const courses = [
        { id: 1, progress: 50 },
        { id: 2, progress: 25 },
        { id: 3, progress: 0 },
    ];

    // Supongamos que esto podría actualizar el progreso en el futuro
    courses.forEach(course => {
        const progressBar = document.querySelector(`.course-card:nth-child(${course.id}) .progress`);
        if (progressBar) {
            progressBar.style.width = `${course.progress}%`;
            progressBar.textContent = `${course.progress}% completado`;
        }
    });
});
