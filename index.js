const projectElements = document.querySelectorAll('.project');

projectElements.forEach((project) => {
    project.addEventListener('mouseover', () => {
        project.classList.add('hover'); 
    });

    project.addEventListener('mouseout', () => {
        project.classList.remove('hover'); 
    });
});
