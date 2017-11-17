var answer = 'Sadly NO!'
var rightNow = new Date( ).toString( )
var nowArray = rightNow.split(" ")

var weekday = nowArray[0]
var month = nowArray[1]
var dayNumber = nowArray[2]
var year = nowArray[3]
var time = nowArray[4]

var timeArray = time.split(":")
var hours = timeArray[0]
var minutes = timeArray[1]
var seconds = timeArray[2]



function setup(){
    createCanvas(windowWidth, windowHeight)
}

function draw(){
    background('turquoise')
    textSize(32)
    fill('white')
    text('Is it the weekend? ' + answer, 40, 40)
}