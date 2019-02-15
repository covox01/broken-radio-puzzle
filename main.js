//Audio Name Space
const audioSwitch1 = $('#audioSwitch-1')[0];
const audioSwitch2 = $('#audioSwitch-2')[0];
const audioSwitch3 = $('#audioSwitch-3')[0];


//Gets Status of Main Switch
const mainSwitch = () => {
    let switchProp = {
        name: 'Main Switch',
        sequence: 0
    }
    $('.main-switch').on('click', function (e) {
        e.preventDefault();
        $('#trigger-1').toggleClass('on');
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
                audioSwitch1.pause();
                audioSwitch1.CurrentTime = 0;
                audioSwitch2.play();
        } else if (switchProp.sequence === 3) {
            switchProp.status = "Incomplete"
            switchProp.sequence = 0;
            sequenceCheck.splice(0, 1, switchProp);
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
    $('.switch-2').on('click', function (e) {
        e.preventDefault();
        $('#trigger-2').toggleClass('on');
        // Inserts Key(Name) and Value(Name of Switch)
        if (switchProp.sequence === 0 || switchProp.sequence === 2) {
            switchProp.sequence = 0;
            switchProp.sequence = 1;
            sequenceCheck.splice(1, 1, switchProp);
                audioSwitch2.pause();
                audioSwitch2.currentTime = 0;
                audioSwitch1.play();
        } else if (switchProp.sequence === 1) {
            switchProp.sequence = 2;
            switchProp.status = "Complete";
            sequenceCheck.splice(1, 1, switchProp);
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
    // const switchProp = []
    $('.switch-3').on('click', function (e) {
        e.preventDefault();
        $('#trigger-3').toggleClass('on');
        // Inserts Key(Name) and Value(Name of Switch)
        if (switchProp.sequence === 0 || switchProp.sequence === 2) {
            // sequenceCheck.pop(switchProp);
            switchProp.sequence = 0;
            switchProp.sequence = 1;
            switchProp.status = "Complete";
            sequenceCheck.splice(2, 1, switchProp);
                audioSwitch1.pause();
                audioSwitch1.currentTime = 0;
                audioSwitch2.play();
        } else if (switchProp.sequence === 1) {
            // sequenceCheck.pop(switchProp);
            switchProp.sequence = 0;
            switchProp.status = "Incomplete";
            sequenceCheck.splice(2, 1, switchProp);
                audioSwitch2.pause();
                audioSwitch2.currentTime = 0;
                audioSwitch1.play();
        }
        switchStatus2(switchProp);
    })
}

const switchStatus2 = (status) => {
    // console.log(status);
    // sequenceCheck.pop(status);
    // sequenceCheck.push(status);
    console.log(sequenceCheck);
}

// --------------------
// Test to see if sequence1 has been fulfilled
const sequenceCheck = ["Main Switch", "Switch 1", "Switch 2"]




const sequenceOne = () => {
    mainSwitch();
    switch1();
    switch2();

}

$(function(){
    console.log("ready");
    sequenceOne();
})


// const mainSwitchStatus = () => {
//     let status = "start"
//     const sequence = []
//     $('.main-switch').on('click', function (e) {
//         e.preventDefault();
//         $('#trigger-1').toggleClass('on');
//         audio.currentTime = 0;
//         audio.play();
//         if (sequence.length === 0) {
//             status = "S1 Complete"
//             sequence.push(status);
//         } else if (status === "S1 Complete") {
//             status = "S2 Complete";
//             sequence.push(status);
//         } else if (sequence.length === 2) {
//             status = "S3 Success";
//             sequence.push(status);
//         } else if (status === "S3 Success") {
//             status = "start"
//             sequence.length = 0
//         }
//         mainSwitchValue(sequence);
//     })
// }