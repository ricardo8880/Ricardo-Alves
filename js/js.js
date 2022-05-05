let alves = document.querySelector('.alves')

let cores = new Array('#00ffea', 'white')
let indiceCores = 0

function mudarCor() {
    //alves.style.color = cores[indeceCores]
    alves.style.textShadow = ' 1px 2px 5px ' + cores[indiceCores]
    if (indiceCores == 4) {
        indiceCores = 0
    } else {
        indiceCores++
    }

}

setInterval(mudarCor, 200)

/*---------------------------------------------------------------------------*/
let tecnologias = ['FULL-STECK', 'FRONT-END', 'LARAVEL', 'PHP', 'MYSQL', 'HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY', 'JSON', 'AJAX', 'PHOTOSHOP', 'FIGMA']
let indiceTec = 0

function mudarTec() {
    let mudarTec = tecnologias[indiceTec]
    document.querySelector('.tecnologias').innerHTML = mudarTec

    if (indiceTec == 13) {
        indiceTec = 0
    } else {
        indiceTec++
    }

}


setInterval(mudarTec, 2000)

/*---------------------------------------------------------------------------*/
$(document).ready(function() {
    $('.projetos-sites').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: { enabled: true }
        // other options
    });
});


/*---------------------------------------------------------------------------*/
$(function() {
    $('a.navegacao').click(function(d) {
        d.preventDefault()
        let id = $(this).attr('href')
        let distancia = $(id).offset().top
        $('html, body').animate({
            scrollTop: distancia
        }, 2000)


    })

})

/*---------------------------------------------------------------------------*/

$(function() {
    $('.icone-menu').on('click', function() {
        $('.menu ul').slideToggle()

    })
})