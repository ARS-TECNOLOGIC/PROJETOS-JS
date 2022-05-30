function startMenu() {
    var act = document.querySelectorAll('.sidebar ul li a');
    var url = document.baseURI.split('/').slice(-1).toLocaleString();

    act.forEach(element => {
        var href;
        href = element.href.split('/').slice(-1).toLocaleString();

        if (url === href) {
            element.classList.add('nova');
            var elant = element.closest('ul');
            var className = element.closest('li').className;
            if (className == 'sub not-show') {
                elant.querySelectorAll('.sub').forEach(e => { e.classList.remove('not-show') })
                elant.querySelectorAll('span').forEach(e => { e.classList.add('sub-select') })
                elant.querySelectorAll('.sub').forEach(e => { e.classList.add('nova-sub') })
            }
        };
    })
}

function trocarClass(el) {
    el = 'ul.' + el + ' li' + '.sub';
    var sub = document.querySelectorAll(el);

    sub.forEach(element => {
        console.log(element);
        element.classList.toggle('not-show');
    });

}

startMenu();