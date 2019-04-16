//Sequence 1
//Gets Status of Main Switch
    const mainSwitch = () => {
        let switchProp = {
            name: 'Main Switch',
            sequence: 0,
            complete: false
        }
        $('.main-switch').on('click keypress', function (e) {
            e.preventDefault();
            if (e.keyCode == 13 || e.KeyCode == 32) {
                
            }
            $('.main-trigger').toggleClass('main-trigger-on');
            if ((e.keyCode == 13 || e.KeyCode == 32) || switchProp.sequence === 0) {
                switchProp.sequence = 1;
                switchProp.complete = false;
                sequenceCheck1.splice(0, 1, switchProp);
                audioSwitchOff();
            } else if ((e.keyCode == 13 || e.KeyCode == 32) || switchProp.sequence === 1) {
                switchProp.sequence = 2;
                switchProp.complete = false;
                sequenceCheck1.splice(0, 1, switchProp);
                audioSwitchOff();
            } else if ((e.keyCode == 13 || e.KeyCode == 32) || switchProp.sequence === 2) {
                switchProp.sequence = 3;
                switchProp.complete = true;
                sequenceCheck1.splice(0, 1, switchProp);
                $('.main-trigger').css('background', '#E78B2E'); 
                audioSwitchOn();
            } else if ((e.keyCode == 13 || e.KeyCode == 32) || switchProp.sequence === 3 && hardMode === false) {
                switchProp.complete = false;
                switchProp.sequence = 0;
                sequenceCheck1.splice(0, 1, switchProp);
                $('.main-trigger').css('background', '#6B8983'); audioSwitchOff();
            } else if ((e.keyCode == 13 || e.KeyCode == 32) || switchProp.sequence === 3 && hardMode === true){
                switchProp.complete = false;
                switchProp.sequence = 0;
                sequenceCheck1.splice(0, 1, switchProp);
                audioSwitchOff();
                $('.main-trigger').css('background', '#E78B2E'); 
            }
        })
    }
//Gets Status of Sequence 1 Switch 1
    const switch1 = () => {
        let switchProp = {
            name: 'Switch 1',
            sequence: 0,
            complete: false
        }   
        $('.s1-switch-1').on('click', function (e) {
            e.preventDefault();
            $('.s1-trigger-1').toggleClass('s1-trigger-on');
            if ((switchProp.sequence === 0 || switchProp.sequence === 2) && hardMode === false) {
                switchProp.sequence = 0;
                switchProp.sequence = 1;
                switchProp.complete = false;
                sequenceCheck1.splice(1, 1, switchProp);
                $('.s1-trigger-1').css('background', '#6B8983');
                audioSwitchOff();
            }   else if ((switchProp.sequence === 0 || switchProp.sequence === 2) && hardMode === true) {
                switchProp.sequence = 0;
                switchProp.sequence = 1;
                switchProp.complete = false;
                sequenceCheck1.splice(1, 1, switchProp);
                $('.s1-trigger-1').css('background', '#E78B2E');
                audioSwitchOff();
            }  else if (switchProp.sequence === 1) {
                switchProp.sequence = 2;
                switchProp.complete = true;
                sequenceCheck1.splice(1, 1, switchProp);
                $('.s1-trigger-1').css('background', '#E78B2E');
                audioSwitchOn();
            }
        })
    }

//Get Status of Sequence 1 Switch 2
    const switch2 = () => {
        let switchProp = {
            name: 'Switch 2',
            sequence: 0,
            complete: false
        }
        $('.s1-switch-2').on('click', function (e) {
            e.preventDefault();
            $('.s1-trigger-2').toggleClass('s1-trigger-on');
            if (switchProp.sequence === 0 || switchProp.sequence === 2) {
                switchProp.sequence = 0;
                switchProp.sequence = 1;
                switchProp.complete = true;
                sequenceCheck1.splice(2, 1, switchProp);
                $('.s1-trigger-2').css('background', '#E78B2E');  
                audioSwitchOn();
            } else if (switchProp.sequence === 1 && hardMode === false) {
                switchProp.sequence = 0;
                switchProp.complete = false;
                sequenceCheck1.splice(2, 1, switchProp);
                $('.s1-trigger-2').css('background', '#6B8983');
                 audioSwitchOff();
            } else if (switchProp.sequence === 1 && hardMode === true) {
                switchProp.sequence = 0;
                switchProp.complete = false;
                sequenceCheck1.splice(2, 1, switchProp);
                $('.s1-trigger-2').css('background', '#E78B2E');
                audioSwitchOff();
            }
        })
    }

// Sequence 2
// Get Status of Sequence 2 Switch 1
    const s2Switch1 = () => {
        let switchProp ={
            name: 'S2 Switch 1',
            sequence: 0,
            complete: false
        }
        $('.s2-switch-1').on('click', function(e){
            e.preventDefault();
            if (switchProp.sequence === 0) {
                $('.s2-trigger-1').addClass('s2-trigger-1-pos-1');
                switchProp.sequence = 1;
                sequenceCheck2.splice(0, 1, switchProp)
                audioSwitchOff();
            } else if (switchProp.sequence === 1) {
                $('.s2-trigger-1').removeClass('s2-trigger-1-pos-1');
                $('.s2-trigger-1').addClass('s2-trigger-1-pos-2');
                switchProp.sequence = 2;
                switchProp.complete = true;
                sequenceCheck2.splice(0, 1, switchProp);
                audioSwitchOn();
            } else {
                $('.s2-trigger-1').removeClass('s2-trigger-1-pos-1 s2-trigger-1-pos-2');
                switchProp.sequence = 0;
                switchProp.complete = false;
                sequenceCheck2.splice(0, 1, switchProp);
                audioSwitchOff();
            }
        })
    }
// Get Status of Sequence 2 Switch 2
const s2Switch2 = () => {
    let switchProp = {
        name: 'S2 Switch 2',
        sequence: 0,
        complete: false
    }
    $('.s2-switch-2').on('click', function (e) {
        e.preventDefault();
        if (switchProp.sequence === 0 || switchProp.sequence === 3) {
            $('.s2-trigger-2').removeClass('s2-trigger-2-pos-3');
            $('.s2-trigger-2').addClass('s2-trigger-2-pos-1');
            switchProp.sequence = 1;
            sequenceCheck2.splice(1, 1, switchProp)
            audioSwitchOff();
        } else if (switchProp.sequence === 1) {
            $('.s2-trigger-2').removeClass('s2-trigger-2-pos-1');
            $('.s2-trigger-2').addClass('s2-trigger-2-pos-2');
            switchProp.sequence = 2;
            sequenceCheck2.splice(1, 1, switchProp);
            audioSwitchOff();
        } else {
            $('.s2-trigger-2').removeClass('s2-trigger-2-pos-2');
            $('.s2-trigger-2').addClass('s2-trigger-2-pos-3');
            switchProp.sequence = 3;
            switchProp.complete = true;
            sequenceCheck2.splice(1, 1, switchProp);
            audioSwitchOn();
        } 
    })
}
// Get Status of Sequence 2 Switch 3
const s2Switch3 = () => {
    let switchProp = {
        name: 'S2 Switch 3',
        sequence: 0,
        complete: false
    }
    $('.s2-switch-3').on('click', function (e) {
        e.preventDefault();
        if (switchProp.sequence === 0) {
            $('.s2-trigger-3').removeClass('s2-trigger-3-pos-2');
            $('.s2-trigger-3').addClass('s2-trigger-3-pos-1');
            switchProp.sequence = 1;
            switchProp.complete = true;
            sequenceCheck2.splice(2, 1, switchProp)
            audioSwitchOn();
        } else if (switchProp.sequence === 1){
            $('.s2-trigger-3').removeClass('s2-trigger-3-pos-1');
            $('.s2-trigger-3').addClass('s2-trigger-3-pos-2');
            switchProp.sequence = 2;
            switchProp.complete = false;
            sequenceCheck2.splice(2, 1, switchProp);
            audioSwitchOff();
        } else {
            $('.s2-trigger-3').removeClass('s2-trigger-3-pos-2');
            switchProp.sequence = 0;
            sequenceCheck2.splice(2, 1, switchProp);
            audioSwitchOff();
        }
    })
}
// Get Status of Sequence 2 Switch 4
    const s2Switch4 = () => {
        let switchProp = {
            name: 'S2 Switch 4',
            sequence: 0,
            complete: false
        }
        $('.s2-switch-4').on('click', function (e) {
            e.preventDefault();
            if (switchProp.sequence === 0) {
                $('.s2-trigger-4').removeClass('s2-trigger-4-pos-2');
                $('.s2-trigger-4').addClass('s2-trigger-4-pos-1');
                switchProp.sequence = 1;
                sequenceCheck2.splice(3, 1, switchProp);
                audioSwitchOff();
            } else if (switchProp.sequence === 1) {
                $('.s2-trigger-4').removeClass('s2-trigger-4-pos-1');
                switchProp.sequence = 2
                sequenceCheck2.splice(3, 1, switchProp);
                audioSwitchOff();
            } else if (switchProp.sequence === 2) {
                $('.s2-trigger-4').addClass('s2-trigger-4-pos-1 s2-trigger-4-pos-2');
                switchProp.sequence = 3
                switchProp.complete = true;
                sequenceCheck2.splice(3, 1, switchProp);
                audioSwitchOn();
            } else if (switchProp.complete === true) {
                $('.s2-trigger-4').removeClass('s2-trigger-4-pos-1 s2-trigger-4-pos-2');
                switchProp.sequence = 0;
                switchProp.complete = false;
                sequenceCheck2.splice(3, 1, switchProp);
                audioSwitchOff();
            }
        })
    }
// Get Status of Sequence 2 Switch 5
    const s2Switch5 = () => {
        let switchProp = {
            name: 'S2 Switch 5',
            sequence: 0,
            complete: false
        }
        $('.s2-switch-5').on('click', function (e) {
            e.preventDefault();
            if (switchProp.sequence === 0) {
                $('.s2-trigger-5').removeClass('s2-trigger-5-pos-2');
                $('.s2-trigger-5').addClass('s2-trigger-5-pos-1');
                switchProp.sequence = 1;
                sequenceCheck2.splice(4, 1, switchProp)
                audioSwitchOff();
            } else if (switchProp.sequence === 1) {
                $('.s2-trigger-5').removeClass('s2-trigger-5-pos-1');
                $('.s2-trigger-5').addClass('s2-trigger-5-pos-2');
                switchProp.sequence = 2;
                switchProp.complete = true;
                sequenceCheck2.splice(4, 1, switchProp);
                audioSwitchOn();
            } else if (switchProp.sequence === 2) {
                $('.s2-trigger-5').removeClass('s2-trigger-5-pos-2');
                $('.s2-trigger-5').addClass('s2-trigger-5-pos-1');
                switchProp.sequence = 3;
                switchProp.complete = false;
                sequenceCheck2.splice(4, 1, switchProp);
                audioSwitchOff();
            } else {
                $('.s2-trigger-5').removeClass('s2-trigger-5-pos-1');
                switchProp.sequence = 0;
                sequenceCheck2.splice(4, 1, switchProp);
                audioSwitchOff();
            }
        })
    }
//Submit Sequences
//Submit Sequence 1
    const submitSequence1 = () => {
        let status = {
            name: "Sequence 1",
            complete: false
        };
        $('.s1-submit').click(function () {
            if (sequenceCheck1[0].complete === true && sequenceCheck1[1].complete === true && sequenceCheck1[2].complete === true) {
                status.complete = true;
                failCheck1.pop(status);
                failCheck1.push(status);
                finalCheck.splice(0, 1, status);
                finalSequenceCheck();
                $('.s1-success').fadeIn(300);
                audioSuccess();
            } else {
                status.complete = false;
                $('.s1-success').hide();
                $('.s1-fail').fadeIn(300);
                failCheck1.pop(status);
                failCheck1.push(status);
                finalCheck.splice(0, 1, status);
                audioFail();
                if (failCheck1[0] === status) {
                    setTimeout(function () {
                        $('.s1-fail').fadeOut(800);
                    }, 800);
                }
            }
        })
    }
    //Submit Sequence 2
    const submitSequence2 = () => {
        let status = {
            name: "Sequence 2",
            complete: false
        };
        $('.s2-submit').click(function() {
            if (sequenceCheck2[0].complete === true && sequenceCheck2[1].complete === true && sequenceCheck2[2].complete === true && sequenceCheck2[3].complete === true && sequenceCheck2[4].complete === true) {
                status.complete = true;
                failCheck2.pop(status);
                failCheck2.push(status)
                finalCheck.splice(1, 1, status);
                finalSequenceCheck();
                $('.s2-success').fadeIn(300);
                audioSuccess();
            } else {
                status.complete = false;
                $('.s2-success').hide();
                $('.s2-fail').fadeIn(300);
                failCheck2.pop(status);
                failCheck2.push(status);
                finalCheck.splice(1, 1, status)
                audioFail();
                if (failCheck2[0] === status) {
                    setTimeout(function() {
                        $('.s2-fail').fadeOut(800);
                    }, 800);
                }
            }
        })
    }

//Final Sequence Check

    const finalSequenceCheck = () => {
        if (finalCheck[0].complete === true && finalCheck[1].complete === true) {
            $('.radiohead').css('background', '#E78B2E');
            $('.channel').css('background', '#B2F7E9');
            $('.channel-length').css('background', '#6B8983');
            $('.needle').css('background', '#6B8983');
            $('.s1-success').css('background', 'none');
            $('.needle').addClass('needle-on');
            $('.access').removeAttr('tabindex');
            $('.access').css('cursor', 'default');
            $('.access').off('click');
            $('.s1-fail').fadeIn(500);
            $('.s1-submit, .s1-fail, .btn1').attr('tabindex');
            $('.s1-submit, .s1-fail, .btn1').attr('role', 'button');
            $('.s1-submit, .s1-fail, .btn1').css('cursor', 'pointer');
            $('.s1-submit, .s1-fail, .btn1').on('click', function(e){
                audioSwitchOff();
                audioPlaySong1.pause();
            })   
                audioTape.play();
                setTimeout(function(){
                playSong1();
            }, 2400);
        }
    }

// Main Menu Functions
    const mainMenu = () => {
        $('.s1-switch-1, .s1-switch-2, .s1-trigger-1, .s1-trigger-2, .s1-switch-length-1, .s1-switch-length-2, .s1-button, .s1-fail, .s1-success, .s1-submit').css('cursor', 'default');
        //Removes Attributes
        $('.main-switch, .s1-switch-1, .s1-switch-2, .s1-submit, .s2-switch-1, .s2-switch-2, .s2-switch-3, .s2-switch-4, .s2-switch-5, .s2-button').removeAttr('tabindex role');
        $('.intro-switch').on('click', function (e) {
            e.preventDefault();
            $('.intro-trigger').toggleClass('intro-on');
            if (ready === true) {
                ready = false;
                audioSwitchOff();
            } else {
                ready = true;
                audioSwitchOn();
            }
        })
    }
    const mainMenuStart = () => {
        $('.intro-button').on('click', function (e) {
            e.preventDefault();
            if (ready === true) {
                audioSuccess();
                sequenceOne();
                sequenceTwo();
                $('.text, .intro, .mode').hide();
                $('.s1-switch-1, .s1-switch-2, .s1-trigger-1, .s1-trigger-2, .s1-switch-length-1, .s1-switch-length-2, .s1-button, .s1-fail, .s1-success, .s1-submit').css('cursor', 'pointer');
                $('.main-switch .s1-switch-1, .s1-switch-2, .s1-submit, .s2-switch-1, .s2-switch-2, .s2-switch-3, .s2-switch-4, .s2-switch-5, .s2-button .intro-switch').attr('role', 'button');
                $('.main-switch, .s1-switch-1, .s1-switch-2, .s1-submit, .s2-switch-1, .s2-switch-2, .s2-switch-3, .s2-switch-4, .s2-switch-5, .s2-button, .intro-switch').attr('tabindex', '0');
            } else {
                audioFail();
                $('.intro-fail').fadeIn(50);
                setTimeout(function () {
                    $('.intro-fail').fadeOut(50);
                }, 800);
            }
        })
    }
//Difficulty Modes
    const settingToggle = () => {
        $('.mode-trigger').toggleClass('mode-trigger-on');
        $('.radiohead, .s2-trigger-1, .s2-trigger-2, .s2-trigger-3, .s2-trigger-4, .s2-trigger-5, .main-trigger, .s1-trigger-1, .s1-trigger-2').toggleClass('hard-mode');
    }
    const mode = () => {
        $('.mode').on('click', function(e) {
            e.preventDefault();
            if (hardMode === false) {
                hardMode = true;
                settingToggle();
                audioSwitchOn();
            } else {
                hardMode = false;
                audioSwitchOff();
                settingToggle();
            }
        })
    }

// Test to see if sequence checks are true
    const sequenceCheck1 = [1, 2, 3];
    const sequenceCheck2 = [1, 2, 3, 4, 5]
    const failCheck1 = [];
    const failCheck2 = [];
    const finalCheck = [1, 2];    

// Main Menu Variables
    let ready = false
    let hardMode = false;

//Audio Logic
    const audioPlaySong1 = $('#play-song-1')[0];
    const audioSwitch1 = $('#audio-switch-1')[0];
    const audioSwitch2 = $('#audio-switch-2')[0];
    const audioSwitch3 = $('#audio-switch-3')[0];
    const audioBell = $('#bell')[0];
    const audioDud = $('#dud')[0];
    const audioTape = $('#tape')[0];

    const audioSwitchOn = () => {
        audioSwitch1.pause();
        audioSwitch2.pause();
        audioSwitch1.currentTime = 0;
        audioSwitch2.currentTime = 0;
        audioSwitch2.play();
    }
    const audioSwitchOff = () => {
        audioSwitch1.pause();
        audioSwitch2.pause();
        audioSwitch1.currentTime = 0;
        audioSwitch2.currentTime = 0;
        audioSwitch1.play();
    }
    const audioSuccess = () => {
        audioBell.pause();
        audioDud.pause();
        audioBell.currentTime = 0;
        audioDud.currentTime = 0;
        audioBell.play();
    }
    const audioFail = () => {
        audioBell.pause();
        audioDud.pause();
        audioBell.currentTime = 0;
        audioDud.currentTime = 0;
        audioDud.play()
    }

    // Play Song
    const playSong1 = () => {
        audioPlaySong1.play();
    }
    //Sequence1
    const sequenceOne = () => {
        mainSwitch();
        switch1();
        switch2();
        submitSequence1();
    }
    //Sequence1
    const sequenceTwo = () => {
        s2Switch1();
        s2Switch2();
        s2Switch3();
        s2Switch4();
        s2Switch5();
        submitSequence2();
    }
//Final Sequence 
    finalSequenceCheck();

//Doc Ready
    $(function(){
        mainMenu();
        mainMenuStart();
        mode();
    })
