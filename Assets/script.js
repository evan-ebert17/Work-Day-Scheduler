$(document).ready(function () {
    var timeBlockDiv = document.getElementById('daniel');

    var timeblocksArray = [];
    timeblocksArray.length = 22;
    var tArrLength = timeblocksArray.length;

    var currentDayDiv = document.getElementById('currentDay');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    currentDayDiv.append(today);

    var currentTime = new Date();
    var time = currentTime.getHours();

    function createTimeblocks() {
        for (let i = 9; i < tArrLength; i++) {
            if (i <= 22) {
                let timeblockText = document.createElement('p');
                let timeblockField = document.createElement('input');
                let timeblockButton = document.createElement('button');
                let timeblockCard = document.createElement('div');

                timeblockCard.classList.add('timeDiv');
                timeblockCard.setAttribute('id', `${i}`)

                if (i < time) {
                    timeblockField.classList.add('past');
                } else if (i === time) {
                    timeblockField.classList.add('present');
                } else if (i > time) {
                    timeblockField.classList.add('future');
                }
                timeblockField.setAttribute('type', 'text')
                timeblockField.classList.add('description')
                if (i <= 11) {
                    timeblockText.textContent = `${i}AM`;
                } else if (i === 12) {
                    timeblockText.textContent = `12PM`
                }
                else {
                    timeblockText.textContent = `${i - 12}PM`
                }
                timeblockText.classList.add('hour')
                timeblockButton.textContent = "Save";
                timeblockButton.classList.add('saveBtn');
                //timeblockButton.setAttribute('id', `${i}`);
                timeBlockDiv.append(timeblockCard);
                timeblockCard.append(timeblockText);
                timeblockCard.append(timeblockField);
                timeblockCard.append(timeblockButton);
            }
        }
    }

    createTimeblocks();
    var buttons = document.querySelectorAll('button');
    var blockText = document.querySelectorAll('input');

    for (let i = 0; i < buttons.length; i++) {
        const allBtns = buttons[i];

        allBtns.addEventListener('click', function () {
                localStorage.setItem(`${i}`, blockText[i].value)
                alert('Saved!');
                console.log(localStorage)
        })
    }

    $('#9 .description').val(localStorage.getItem('0'));
    $('#10 .description').val(localStorage.getItem('1'));
    $('#11 .description').val(localStorage.getItem('2'));
    $('#12 .description').val(localStorage.getItem('3'));
    $('#13 .description').val(localStorage.getItem('4'));
    $('#14 .description').val(localStorage.getItem('5'));
    $('#15 .description').val(localStorage.getItem('6'));
    $('#16 .description').val(localStorage.getItem('7'));
    $('#17 .description').val(localStorage.getItem('8'));
    $('#18 .description').val(localStorage.getItem('9'));
    $('#19 .description').val(localStorage.getItem('10'));
    $('#20 .description').val(localStorage.getItem('11'));
    $('#21 .description').val(localStorage.getItem('12'));
});
