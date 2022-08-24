function display(btn) {
    switch (btn) {
        case 'first':
                document.getElementById('first').classList.toggle('dnone')
            break;
        case 'second':
                document.getElementById('second').classList.toggle('dnone')
            break;
    }
}

function navtoggle() {
    document.getElementById('nav').classList.toggle('sidebar-active')
    document.getElementById('button').classList.toggle('btn-active')
}