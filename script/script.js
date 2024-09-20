$(document).ready(function () {
    /************* */
    $('#toggle').click(function () {
        $('.navbar-menu').slideToggle();
    })

    $('#find').click(function () {
        $('.navbar-form').slideToggle();
    })

    $('.title_container').click(function () {
        $('.title_content-list').slideToggle()
    })
})
