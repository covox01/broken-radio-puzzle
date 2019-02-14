




const audio = $('#main-audio')[0];
const mainSwitchStatus = () => {
    let status = true;
    $('.main-switch').on('click', function (e) {
        e.preventDefault();
        $('#trigger-1').toggleClass('on');
        //audio.currentTime tip from Wes Bos
        audio.currentTime = 0;
        audio.play();
        if (status === true) {
            status = false
        } else {
            status = true;
        }
        console.log(status)
    })

}


const sequenceOne = () => {
    mainSwitchStatus();

    

    // $('.main-switch').on('click', function(){
    //     console.log("clicked");
    //     $('#trigger-1').toggleClass('on');
    //     const mainSwitchStatus = {
    //         status: true
    //     }
    //     mainSwitch.push(mainSwitchStatus);
    //     console.log(mainSwitch[i]);
    // }) 

    // $('.switch-2').on('click', function(){
    //     $('#trigger-2').toggleClass('on');
    //     console.log("switch2");
    // })
    // $('.switch-3').on('click', function () {
    //     $('#trigger-3').toggleClass('on');
    // })
}



$(function(){
    console.log("ready");
    sequenceOne();
})