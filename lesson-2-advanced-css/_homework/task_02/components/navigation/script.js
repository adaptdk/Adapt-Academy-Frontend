
window.onload = () => {
    const selectClasses = document.querySelectorAll('.header-navigation__mobile_button');
    selectClasses.forEach(classes => {
        classes.classList.add("hide");
    });
  };

const showMenu = () => {
    const toggleClasses = document.querySelectorAll('.header-navigation__mobile_button');
    toggleClasses.forEach(classes => {
        classes.classList.toggle("show_block");
    });
};