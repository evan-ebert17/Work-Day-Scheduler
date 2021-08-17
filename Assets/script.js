var timeBlockDiv = document.getElementById('daniel');
var timeTextArray = [`9 Am`, `10 Am`, `11 Am`, `12 Pm`, `1 Pm`, `2 Pm`, `3 Pm`, `4 Pm`, `5 Pm`, `6 Pm`, `7 Pm`, `8 Pm`, `9 Pm`];

currentDayDiv = document.getElementById('currentDay');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
currentDayDiv.append(today);

var currentTime = new Date();
var time = currentTime.getHours();

function createTimeblocks() {
    for (let i = 0; i < timeTextArray.length; i++) {
        const ArrayPos = timeTextArray[i];
        if (i <= 13) {
            console.log('hello')
            var timeblockText = document.createElement('p');
            var timeblockField = document.createElement('input');
            var timeblockButton = document.createElement('button');
            var timeblockCard = document.createElement('div');
            timeblockText.textContent = timeTextArray[i];
            timeblockField.classList.add('timeblock');
            timeblockButton.textContent = "Save";
            timeblockButton.classList.add('saveBtn');
            timeBlockDiv.append(timeblockCard);
            timeblockCard.append(timeblockText);
            timeblockCard.append(timeblockField);
            timeblockCard.append(timeblockButton);

        }
    }
}

createTimeblocks();