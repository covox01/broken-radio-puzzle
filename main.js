
//Gets Status of Main Switch
const mainSwitch = () => {
    let switchProp = {
        name: 'Main Switch',
        sequence: 0,
        complete: false
    }
    $('.main-switch').on('click', function (e) {
        e.preventDefault();
        $('#trigger-0').toggleClass('on');
        // Inserts Key(Name) and Value(Name of Switch)
        if (switchProp.sequence === 0) {
            switchProp.sequence = 1;
            switchProp.complete = false;
            sequenceCheck1.splice(0, 1, switchProp);
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch1.play();
        } else if (switchProp.sequence === 1) {
            switchProp.sequence = 2;
            switchProp.complete = false;
            sequenceCheck1.splice(0, 1, switchProp);
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch1.play();
        } else if (switchProp.sequence === 2) {
            switchProp.sequence = 3;
            switchProp.complete = true;
            sequenceCheck1.splice(0, 1, switchProp);
            $('#trigger-0').css('background', '#E78B2E');    
                audioSwitch1.pause();
                audioSwitch1.CurrentTime = 0;
                audioSwitch2.play();
        } else if (switchProp.sequence === 3) {
            switchProp.complete = false;
            switchProp.sequence = 0;
            sequenceCheck1.splice(0, 1, switchProp);
            $('#trigger-0').css('background', '#6B8983');  
                audioSwitch2.pause();
                audioSwitch2.currentTime = 0;
                audioSwitch1.play();
        }
        mainSwitchStatus(switchProp);
    })
}
const mainSwitchStatus = (status) => {
    console.log(sequenceCheck1);
}
//Gets Status of Switch One
const switch1 = () => {
    let switchProp = {
        name: 'Switch 1',
        sequence: 0,
        complete: false
    }   
    $('.switch-1').on('click', function (e) {
        e.preventDefault();
        $('#trigger-1').toggleClass('on');
        if (switchProp.sequence === 0 || switchProp.sequence === 2) {
            switchProp.sequence = 0;
            switchProp.sequence = 1;
            switchProp.complete = false;
            sequenceCheck1.splice(1, 1, switchProp);
            $('#trigger-1').css('background', '#6B8983');
                audioSwitch2.pause();
                audioSwitch2.currentTime = 0;
                audioSwitch1.play();
        } else if (switchProp.sequence === 1) {
            switchProp.sequence = 2;
            switchProp.complete = true;
            sequenceCheck1.splice(1, 1, switchProp);
            $('#trigger-1').css('background', '#E78B2E');  
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch2.play();
        }
        switchStatus1(switchProp);
    })
}
const switchStatus1 = (status) => {
    console.log(sequenceCheck1);
}

//Get Status of Switch 2
const switch2 = () => {
    let switchProp = {
        name: 'Switch 2',
        sequence: 0,
        complete: false
    }
    $('.switch-2').on('click', function (e) {
        e.preventDefault();
        $('#trigger-2').toggleClass('on');
        if (switchProp.sequence === 0 || switchProp.sequence === 2) {
            switchProp.sequence = 0;
            switchProp.sequence = 1;
            switchProp.complete = true;
            sequenceCheck1.splice(2, 1, switchProp);
            $('#trigger-2').css('background', '#E78B2E');  
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch2.play();
        } else if (switchProp.sequence === 1) {
            switchProp.sequence = 0;
            switchProp.complete = false;
            sequenceCheck1.splice(2, 1, switchProp);
            $('#trigger-2').css('background', '#6B8983');
                audioSwitch2.pause();
                audioSwitch2.currentTime = 0;
                audioSwitch1.play();
        }
        switchStatus2(switchProp);
    })
}
const switchStatus2 = (status) => {
    console.log(sequenceCheck1);
}

//Submit Sequence 1
const submitSequence1 = () => {
    let status = "check";
    $('.button').click( function(){
        if (sequenceCheck1[0].complete === true && sequenceCheck1[1].complete === true && sequenceCheck1[2].complete === true) {
            console.log("We Good");
            status = true;
            failCheck1.pop(status);
            failCheck1.push(status)
            console.log(failCheck1);
        $('.success').fadeIn(400);
            audioBell.pause();
            audioBell.play();
        } else {
            status = false;
            console.log("We not good");
            $('.success').hide();
            $('.fail').fadeIn(300);
            failCheck1.pop(status);
            failCheck1.push(status);
            console.log(failCheck1);
                audioDud.pause();
                audioDud.currentTime = 0;
                audioDud.play();
            if (failCheck1[0] === status) {
                setTimeout(function(){
                    $('.fail').fadeOut(300);},
                800);
            }
        }
    })
}

// Test to see if sequence checks are true
    const sequenceCheck1 = [1, 2, 3];
    const failCheck1 = [];

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
