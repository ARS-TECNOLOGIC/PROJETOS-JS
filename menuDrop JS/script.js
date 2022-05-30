function startMenu() {
    var act = document.querySelectorAll('.sidebar ul li a');
    var url = document.baseURI;

    act.forEach(element => {
        if (url === element.href) {
            element.classList.add('nova');
            var elant = element.closest('ul');
            var className = element.closest('li').className;
            console.log(className)
            if (className == 'sub not-show') {
                elant.querySelectorAll('.sub').forEach(e => { e.classList.remove('not-show') })
                elant.querySelectorAll('span').forEach(e => { e.classList.add('sub-select') })
                elant.querySelectorAll('.sub').forEach(e => { e.classList.add('nova-sub') })
            }
        };
    })
}

function myFunction(el) {
    el = 'ul.' + el + ' li' + '.sub';
    var sub = document.querySelectorAll(el);

    sub.forEach(element => {
        console.log(element);
        element.classList.toggle('not-show');
    });

}

startMenu();