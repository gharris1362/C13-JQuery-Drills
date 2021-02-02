document.addEventListener('DOMContentLoaded', function () {

    const $submitBtn = $('#btnSubmit');
    const $textInput = $('#textInput');

    const newDiv = $('<div id="newDiv"></div>')

    $('body').append(newDiv)


    const newUl = $('<ul></ul>')

    $('body').append(newUl);

    $submitBtn.attr('disabled', true)

    $submitBtn.click(function (event) {
        event.preventDefault()
        // let newH2 = $('<h2>' + $textInput.val() + '</h2>');
        let newLi = $(`<li>${$textInput.val()}</li>`)



        // newH2.mouseover(function () { 
        //     newH2.css({"background-color": "red", "border-radius": '100px'})
        // });
        // newH2.mouseout(function() {
        //     newH2.css({"background-color": "transparent", "border-radius": '100px'})
        // })


        newUl.append(newLi)


        newLi.click(function () {
            // let ArrOfColors = ['red', 'purple', 'green', 'navy', 'yellow']
            // let randomColor = Math.floor(Math.random() * ArrOfColors.length)
            let num1 = Math.floor(Math.random() * 255)
            let num2 = Math.floor(Math.random() * 255)
            let num3 = Math.floor(Math.random() * 255)

            // newLi.css({ 'color': 'rgb(' + num1 + ',' + num2 + ',' + num3 + ')' })
            newLi.css({'color': `rgb(${num1}, ${num2}, ${num3})`})
        })

        newLi.dblclick(function () {
            newLi.remove()
        })



    })


    $textInput.keyup(function () {
        if ($textInput.val() == '') {
            $submitBtn.attr('disabled', true)
        } else {
            $submitBtn.attr('disabled', false)
        }
    });



})