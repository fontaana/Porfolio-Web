const d = document

const funcionalidades = () => {
    // Obtén referencias a los elementos h1
    const primaryHeading = document.getElementById('primary');
    const secondHeading = document.getElementById('second');

    // Función para cambiar los colores al pasar el mouse sobre el primer h1
    const handleMouseOverPrimary = () => {
        primaryHeading.style.color = 'var(--second-color)';
        secondHeading.style.color = 'var(--first-color)';
    };

    // Función para cambiar los colores al pasar el mouse sobre el segundo h1
    const handleMouseOverSecond = () => {
        primaryHeading.style.color = 'var(--second-color)';
        secondHeading.style.color = 'var(--first-color)';
    };

    // Función para restaurar los colores originales al salir del mouse de los h1
    const handleMouseOut = () => {
        primaryHeading.style.color = 'var(--first-color)';
        secondHeading.style.color = 'var(--second-color)';
    };

    // Agrega eventos al pasar el mouse sobre los h1
    primaryHeading.addEventListener('mouseover', handleMouseOverPrimary);
    secondHeading.addEventListener('mouseover', handleMouseOverSecond);

    // Agrega evento al salir del mouse de los h1 para restaurar colores originales
    primaryHeading.addEventListener('mouseout', handleMouseOut);
    secondHeading.addEventListener('mouseout', handleMouseOut);

    
}

d.addEventListener("DOMContentLoaded", () => {
    funcionalidades()
})