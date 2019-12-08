
window.onload = () => {
    let introClasses = document.querySelectorAll('.page-wrapper-intro__title-starts, .page-wrapper-intro__title-01, .page-wrapper-intro__title-02, .page-wrapper-intro__title-03, .page-wrapper-intro__title-04, .page-wrapper-intro__title-ends, .page-wrapper-transition__gif, .page-wrapper__bg, .page-wrapper-header, .page-wrapper-navigation, .page-wrapper-about-me, .page-wrapper-works, .page-wrapper-contacts');
    introClasses.forEach(classes => {
        classes.classList.add("hide");
    });
};

    let action = [
        {
            time : 1000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-starts').classList.add("show_flex");
            }
        },
        {
            time : 3000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-starts').classList.remove("show_flex");
            }
        },
        {
            time : 1000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-01').classList.add("show_flex");
            }
        },
        {
            time : 3000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-01').classList.remove("show_flex");
            }
        },
        {
            time : 1000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-02').classList.add("show_flex");
            }
        },
        {
            time : 2000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-02').classList.remove("show_flex");
            }
        },
        {
            time : 1000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-03').classList.add("show_flex");
            }
        },
        {
            time : 2000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-03').classList.remove("show_flex");
            }
        },
        {
            time : 1000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-04').classList.add("show_flex");
            }
        },
        {
            time : 3000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-04').classList.remove("show_flex");
            }
        },
        {
            time : 600,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-ends').classList.add("show_flex");
            }
        },
        {
            time : 400,
            fx   : () => {
                document.querySelector('.page-wrapper-intro__title-ends').classList.remove("show_flex");
            }
        },
        {
            time : 1000,
            fx   : () => {
                document.querySelector('.page-wrapper-transition__gif').classList.add("show_flex");
            }
        },
        {
            time : 3000,
            fx   : () => {
                document.querySelector('.page-wrapper-transition__gif').classList.remove("show_flex");
            }
        },
        {
            time : 1000,
            fx   : () => {
                document.querySelector('.page-wrapper-intro').classList.add("hide");
                document.querySelector('.page-wrapper-transition').classList.add("hide");
            }
        },
        {
            time : 500,
            fx   : () => {
                document.querySelector('.page-wrapper__bg').classList.remove("hide");
            }
        },
        {
            time : 1000,
            fx   : () => {
                document.querySelector('.page-wrapper-header').classList.remove("hide");
            }
        },
        {
            time : 7000,
            fx   : () => {
                document.querySelector('.page-wrapper-navigation').classList.remove("hide");
            }
        }
    ]
    
    let index = 0;
    const player = () => {
        setTimeout(() => {
            action[index].fx();
            index++;
            if(action.length == index)index = 0;
            player();
        },  action[index].time);
    };
    
    player();


    const aboutMe = () => {
        document.querySelector('.page-wrapper-about-me').classList.remove("hide");
        document.querySelector('.page-wrapper-works').classList.add("hide");
        document.querySelector('.page-wrapper-contacts').classList.add("hide");
    };

    aboutMe();

    const works = () => {
        document.querySelector('.page-wrapper-about-me').classList.add("hide");
        document.querySelector('.page-wrapper-works').classList.remove("hide");
        document.querySelector('.page-wrapper-contacts').classList.add("hide");
    };

    works();

    const contacts = () => {
        document.querySelector('.page-wrapper-about-me').classList.add("hide");
        document.querySelector('.page-wrapper-works').classList.add("hide");
        document.querySelector('.page-wrapper-contacts').classList.remove("hide");
    };

    contacts();