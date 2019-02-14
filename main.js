


const mainSwitchValue = (a) => {
    console.log(a)
}

const mainSwitchStatus = () => {
    let trigger1 = {
        name: 'Main Switch',
        sequence: 0
    }
    const sequence = []
    $('.main-switch').on('click', function (e) {
        e.preventDefault();
        $('#trigger-1').toggleClass('on');
        audio.currentTime = 0;
        audio.play();
        // Inserts Key(Name) and Value(Name of Switch)
        if (trigger1.sequence === 0) {
            trigger1.sequence = 1;
            sequence.push(trigger1);
        } else if (trigger1.sequence === 1) {
            trigger1.sequence = 2;
        } else if (trigger1.sequence === 2) {
            trigger1.sequence = 3;
            trigger1.status = "Complete"
        } else if (trigger1.sequence === 3) {
            trigger1.sequence = 0;
            sequence.length = 0;
        }
        mainSwitchValue(sequence);
    })
}

//assets
const audio = $('#main-audio')[0];

const sequenceOne = () => {
    mainSwitchStatus();

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