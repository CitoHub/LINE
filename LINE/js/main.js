
$("#leftside-navigation .sub-menu > a").click(function(e) {
    $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation()
})

function post(){
    const Url="https://script.google.com/macros/s/AKfycby1Q6OMJm2nsSj2Z9LkDdLVVxYHafoR6EzgKPTBf5oTbvOfRwhMjRgtxS_JwxYVVJLM/exec?"
    const mode="2"
    const name="test"
    const password="test7272"
    const id="3626537"
    const time="947104"
    $.post(Url, mode & name & password & id & time)
    console.log(Url, mode & name & password & id & time)
}