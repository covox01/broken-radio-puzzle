
//Gets Status of Main Switch
const mainSwitch = () => {
    let switchProp = {
        name: 'Main Switch',
        sequence: 0
    }
    $('.main-switch').on('click', function (e) {
        e.preventDefault();
        $('#trigger-0').toggleClass('on');
        // Inserts Key(Name) and Value(Name of Switch)
        if (switchProp.sequence === 0) {
            switchProp.sequence = 1;
            switchProp.status = "Incomplete"
            sequenceCheck.splice(0, 1, switchProp);
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch1.play();
        } else if (switchProp.sequence === 1) {
            switchProp.sequence = 2;
            switchProp.status = "Incomplete"
            sequenceCheck.splice(0, 1, switchProp);
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch1.play();
        } else if (switchProp.sequence === 2) {
            switchProp.sequence = 3;
            switchProp.status = "Complete"
            sequenceCheck.splice(0, 1, switchProp);
            $('#trigger-0').css('background', '#E78B2E');    
                audioSwitch1.pause();
                audioSwitch1.CurrentTime = 0;
                audioSwitch2.play();
        } else if (switchProp.sequence === 3) {
            switchProp.status = "Incomplete"
            switchProp.sequence = 0;
            sequenceCheck.splice(0, 1, switchProp);
            $('#trigger-0').css('background', '#6B8983');  
                audioSwitch2.pause();
                audioSwitch2.currentTime = 0;
                audioSwitch1.play();
        }
        mainSwitchStatus(switchProp);
    })
}
const mainSwitchStatus = (status) => {
    console.log(sequenceCheck);
}
//Gets Status of Switch One
const switch1 = () => {
    let switchProp = {
        name: 'Switch 1',
        sequence: 0,
        status: "Incomplete"
    }   
    $('.switch-1').on('click', function (e) {
        e.preventDefault();
        $('#trigger-1').toggleClass('on');
        if (switchProp.sequence === 0 || switchProp.sequence === 2) {
            switchProp.sequence = 0;
            switchProp.sequence = 1;
            switchProp.status = "Incomplete";
            sequenceCheck.splice(1, 1, switchProp);
            $('#trigger-1').css('background', '#6B8983');
                audioSwitch2.pause();
                audioSwitch2.currentTime = 0;
                audioSwitch1.play();
        } else if (switchProp.sequence === 1) {
            switchProp.sequence = 2;
            switchProp.status = "Complete";
            sequenceCheck.splice(1, 1, switchProp);
            $('#trigger-1').css('background', '#E78B2E');  
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch2.play();
        }
        switchStatus1(switchProp);
    })
}
const switchStatus1 = (status) => {
    console.log(sequenceCheck);
}
//Get Status of Switch 2
const switch2 = () => {
    let switchProp = {
        name: 'Switch 2',
        sequence: 0,
        status: "Incomplete"
    }
    $('.switch-2').on('click', function (e) {
        e.preventDefault();
        $('#trigger-2').toggleClass('on');
        if (switchProp.sequence === 0 || switchProp.sequence === 2) {
            switchProp.sequence = 0;
            switchProp.sequence = 1;
            switchProp.status = "Complete";
            sequenceCheck.splice(2, 1, switchProp);
            $('#trigger-2').css('background', '#E78B2E');  
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch2.play();
        } else if (switchProp.sequence === 1) {
            switchProp.sequence = 0;
            switchProp.status = "Incomplete";
            sequenceCheck.splice(2, 1, switchProp);
            $('#trigger-2').css('background', '#6B8983');
                audioSwitch2.pause();
                audioSwitch2.currentTime = 0;
                audioSwitch1.play();
        }
        switchStatus2(switchProp);
    })
}
const switchStatus2 = (status) => {
    console.log(sequenceCheck);
}


//Submit Sequence 1
const submitSequence1 = () => {
    const failCheck = {}
    const success = []
    $('.button').click( function(){
        if (sequenceCheck[0].status === "Complete" && sequenceCheck[1].status === "Complete" && sequenceCheck[2].status === "Complete") {
            console.log("We Good");
            audioBell.pause();
            audioBell.play();
        } else {
            const fail = false;
            console.log("we not good");
            audioDud.pause();
            audioDud.currentTime = 0;
            audioDud.play();
            $('.fail').fadeIn('ease');
            success.push(fail);
            console.log(success);
            if (success[0] === fail) {
                setTimeout(function(){
                    $('.fail').fadeOut(1000);},
                 1000);
                
            }

        }
    })
}

// Test to see if sequence1 has been fulfilled
const sequenceCheck = ["Main Switch", "Switch 1", "Switch 2"]


//Audio Name Space
const audioSwitch1 = $('#audioSwitch-1')[0];
const audioSwitch2 = $('#audioSwitch-2')[0];
const audioSwitch3 = $('#audioSwitch-3')[0];
const audioBell = $('#bell')[0];
const audioDud = $('#dud')[0];


//Sequence1
const sequenceOne = () => {
    mainSwitch();
    switch1();
    switch2();
    //If submitSequence === True > Trigger Something
    submitSequence1();
}
//Sequence1
const sequenceTwo = () => {
    switch1();
    switch2();
    switch3();
    switch4();
    switch5();
    submitSequence2();
}
//Doc Ready
$(function(){
    console.log("ready");
    sequenceOne();
})
