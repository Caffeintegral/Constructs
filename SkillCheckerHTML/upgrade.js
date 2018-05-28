var flagA = 0;
function ug_A(){
    console.log(flagA);
    switch(flagA){
        case 0: break;
        case 1: ugA_1(false); break;
        case 2: ugA_2(false); break;
        case 3: ugA_3(false); break;
        case 4: ugA_4(false); break;
        case 5: ugA_5(false); break;
        case 6: ugA_6(false); break;
        case 7: ugA_7(false); break;
    }
    switch(document.form1.ugA.value){
        case "a0": break;
        case "a1": ugA_0(true); break;
        case "a2": ugA_1(true); break;
        case "a3": ugA_2(true); break;
        case "a4": ugA_3(true); break;
        case "a5": ugA_4(true); break;
        case "a6": ugA_5(true); break;
        case "a7": ugA_6(true); break;
        case "a8": ugA_7(true); break;
    }
}

function ugA_0(ischecked){ //主兵装改良1
    if(ischecked == true){
        flagA = 0;
    } else{

    }
}

function ugA_1(ischecked){ //主兵装改良1
    if(ischecked == true){
        flagA = 1;
    } else{

    }
}

function ugA_2(ischecked){ //副兵装改良1
    if(ischecked == true){
        flagA = 2;
    } else{

    }
}
function ugA_3(ischecked){ //弾薬庫改良1
    if(ischecked == true){
        flagA = 3;
    } else{

    }
}
function ugA_4(ischecked){ //飛行機隊改良1
    if(ischecked == true){
        flagA = 4;
    } else{

    }
}
function ugA_5(ischecked){ //射撃システム改良0
    if(ischecked == true){
        flagA = 5;
        document.form1.SRange.value *= 1.20;
    } else{
        document.form1.SRange.value /= 1.20;
    }
}
function ugA_6(ischecked){ //応急工作班改良1
    if(ischecked == true){
        flagA = 6;
    } else{

    }
}
function ugA_7(ischecked){ //着弾観測機改良1
    if(ischecked == true){
        flagA = 7;
    } else{

    }
}

var flagB = 0;
function ug_B(){
    console.log(flagB);
    switch(flagB){
        case 0: break;
        case 1: ugB_1(false); break;
        case 2: ugB_2(false); break;
        case 3: ugB_3(false); break;
        case 4: ugB_4(false); break;
        case 5: ugB_5(false); break;
        case 6: ugB_6(false); break;
        case 7: ugB_7(false); break;
    }
    switch(document.form1.ugB.value){
        case "b0": break;
        case "b1": ugB_0(true); break;
        case "b2": ugB_1(true); break;
        case "b3": ugB_2(true); break;
        case "b4": ugB_3(true); break;
        case "b5": ugB_4(true); break;
        case "b6": ugB_5(true); break;
        case "b7": ugB_6(true); break;
        case "b8": ugB_7(true); break;
    }
}

function ugB_0(ischecked){ //主兵装改良1
    if(ischecked == true){
        flagB = 0;
    } else{

    }
}

function ugB_1(ischecked){ //ダメージコントロールシステム改良1
    if(ischecked == true){
        flagB = 1;
    } else{

    }
}
function ugB_2(ischecked){ //推力改良1
    if(ischecked == true){
        flagB = 2;
    } else{

    }
}
function ugB_3(ischecked){ //操舵装置改良1
    if(ischecked == true){
        flagB = 3;
    } else{

    }
}
function ugB_4(ischecked){ //エンジンブースト改良1
    if(ischecked == true){
        flagB = 4;
    } else{

    }
}
function ugB_5(ischecked){ //水中聴音改良1
    if(ischecked == true){
        flagB = 5;
    } else{

    }
}
function ugB_6(ischecked){ //対空防御砲火改良1
    if(ischecked == true){
        flagB = 6;
    } else{

    }
}
function ugB_7(ischecked){ //警戒レーダー改良１
    if(ischecked == true){
        flagB = 7;
    } else{

    }
}

var flagC = 0;
function ug_C(){
    console.log(flagC);
    switch(flagC){
        case 0: break;
        case 1: ugC_1(false); break;
        case 2: ugC_2(false); break;
        case 3: ugC_3(false); break;
        case 4: ugC_4(false); break;
        case 5: ugC_5(false); break;
        case 6: ugC_6(false); break;
        case 7: ugC_7(false); break;
        case 8: ugC_8(false); break;
    }
    switch(document.form1.ugC.value){
        case "c0": break;
        case "c1": ugC_0(true); break;
        case "c2": ugC_1(true); break;
        case "c3": ugC_2(true); break;
        case "c4": ugC_3(true); break;
        case "c5": ugC_4(true); break;
        case "c6": ugC_5(true); break;
        case "c7": ugC_6(true); break;
        case "c8": ugC_7(true); break;
        case "c9": ugC_8(true); break;
    }
}

function ugC_0(ischecked){ //主兵装改良1
    if(ischecked == true){
        flagC = 0;
    } else{

    }
}
function ugC_1(ischecked){ //主砲改良2
    if(ischecked == true){
        flagC = 1;
    } else{

    }
}

function ugC_2(ischecked){ //副砲改良2
    if(ischecked == true){
        flagC = 2;
        document.form1.SRange.value *= 1.20;
    } else{
        document.form1.SRange.value /= 1.20;
    }
}
function ugC_3(ischecked){ //射撃システム改良1
    if(ischecked == true){
        flagC = 3;
        document.form1.SRange.value *= 1.05;
    } else{
        document.form1.SRange.value /= 1.05;
    }
}
function ugC_4(ischecked){ //射撃管制室改良1
    if(ischecked == true){
        flagC = 4;
        document.form1.Range.value *= 1.16;
        document.form1.SRange.value *= 1.05;
    } else{
        document.form1.Range.value /= 1.16;
        document.form1.SRange.value /= 1.05;
    }
}

function ugC_5(ischecked){ //対空砲改良2
    if(ischecked == true){
        flagC = 5;
        document.form1.AA.value *= 1.20;
    } else{
        document.form1.AA.value /= 1.20;
    }
} 
function ugC_6(ischecked){ //飛行機隊改良2
    if(ischecked == true){
        flagC = 6;
    } else{

    }
}
function ugC_7(ischecked){ //航空管制改良1
    if(ischecked == true){
        flagC = 7;
    } else{

    }
}

function ugC_8(ischecked){ //発煙装置改良1
    if(ischecked == true){
        flagC = 8;
    } else{

    }
}

var flagD = 0;
function ug_D(){
    console.log(flagD);
    switch(flagD){
        case 0: break;
        case 1: ugD_1(false); break;
        case 2: ugD_2(false); break;
        case 3: ugD_3(false); break;
        
    }
    switch(document.form1.ugD.value){
        case "d0": break;
        case "d1": ugD_0(true); break;
        case "d2": ugD_1(true); break;
        case "d3": ugD_2(true); break;
        case "d4": ugD_3(true); break;
    }
}

function ugD_0(ischecked){ //主兵装改良1
    if(ischecked == true){
        flagD = 0;
    } else{

    }
}

function ugD_1(ischecked){ //ダメージコントロールシステム改良2
    if(ischecked == true){
        flagD = 1;
    } else{

    }
}
function ugD_2(ischecked){ //推力改良2
    if(ischecked == true){
        flagD = 2;
    } else{

    }
}
function ugD_3(ischecked){ //操舵装置改良2
    if(ischecked == true){
        flagD = 3;
        document.form1.Turn.value *= 0.8;
    } else{
        document.form1.Turn.value /= 0.8;
    }
}

var flagE = 0;
function ug_E(){
    switch(flagE){
        case 0: break;
        case 1: break;
        case 2: ugE_1(false); break;
        case 3: ugE_2(false); break;
        case 4: ugE_3(false); break;
    }
    switch(document.form1.ugE.value){
        case "e0": break;
        case "e1": ugE_0(true); break;
        case "e2": ugE_1(true); break;
        case "e3": ugE_2(true); break;
        case "e4": ugE_3(true); break;
    }
}

function ugE_0(ischecked) { //隠蔽システム改良1
    if (ischecked == true) {
        flagE = 1;
    } else {
    }
}

function ugE_1(ischecked){ //隠蔽システム改良1
    if(ischecked == true){
        flagE = 2;
        document.form1.Hiding.value *= 0.9;
    } else{
        document.form1.Hiding.value /= 0.9;
    }
}
function ugE_2(ischecked){ //目標測距装置改良1
    if(ischecked == true){
        flagE = 3;
    } else{

    }
}
function ugE_3(ischecked){ //操舵装置改良3
    if(ischecked == true){
        flagE = 4;
        document.form1.Turn.value *= 0.6;
    } else{
        document.form1.Turn.value /= 0.6;
    }
}

var flagF = 0;
function ug_F(){
    console.log(flagF);
    switch(flagF){
        case 0: break;
        case 1: ugF_1(false); break;
        case 2: ugF_2(false); break;
        case 3: ugF_3(false); break;
        case 4: ugF_4(false); break;
        case 5: ugF_5(false); break;
        case 6: ugF_6(false); break;
        case 7: ugF_7(false); break;
        case 8: ugF_8(false); break;
    }
    switch(document.form1.ugF.value){
        case "f0": break;
        case "f1": ugF_0(true); break;
        case "f2": ugF_1(true); break;
        case "f3": ugF_2(true); break;
        case "f4": ugF_3(true); break;
        case "f5": ugF_4(true); break;
        case "f6": ugF_5(true); break;
        case "f7": ugF_6(true); break;
        case "f8": ugF_7(true); break;
        case "f9": ugF_8(true); break;
    }
}

function ugF_0(ischecked){ //ダミー
    if(ischecked == true){
        flagF = 0;       
    } else{

    }
}

function ugF_1(ischecked){ //主砲改良3
    if(ischecked == true){
        flagF = 1;
    } else{

    }
}
function ugF_2(ischecked){ //副砲改良3
    if(ischecked == true){
        flagF = 2;
    } else{

    }
}
function ugF_3(ischecked){ //魚雷発射管改良3
    if(ischecked == true){
        flagF = 3;
        document.form1.TLoad.value *= 0.85;
    } else{
        document.form1.TLoad.value /= 0.85;
    }
}

function ugF_4(ischecked){ //射撃管制装置改良2
    if(ischecked == true){
        flagF = 4;
        document.form1.Range.value *= 1.16;
    } else{
        document.form1.Range.value /= 1.16;
    }
}
function ugF_5(ischecked){ //射撃管制室改良2
    flagF = 5;
    if(ischecked == true){
        
    } else{

    }
} 
function ugF_6(ischecked){ //対空砲改良3
    if(ischecked == true){
        flagF = 6;
        document.form1.AA.value *= 1.25;
    } else{
        document.form1.AA.value /= 1.25;
    }
}

function ugF_7(ischecked){ //飛行機隊改良3
    if(ischecked == true){
        flagF = 7;
    } else{

    }
}
function ugF_8(ischecked){ //航空管制改良2
    if(ischecked == true){
        flagF = 8;
    } else{

    }
}

function camoflage(ischecked){
    if(ischecked == true){
        document.form1.Hiding.value *= 0.98;
    } else{
        document.form1.Hiding.value /= 0.98;
    }
}

function AAFlag(ischecked){
    if(ischecked == true){
        document.form1.AA.value *= 1.1;
    } else{
        document.form1.AA.value /= 1.1;
    }
}

function SWFlag(ischecked){
    if(ischecked == true){
        document.form1.SRange.value *= 1.05;
    } else{
        document.form1.SRange.value /= 1.05;
    }
}

function indiaFlag(ischecked){
    if (ischecked == true) {
        if (document.form1.Caliber.value < 160) {
            document.form1.Burn.value += 1.005;
            document.form1.SBurn.value += 1.005;
        }
        if (document.form1.Caliber.value > 160) {
            document.form1.Burn.value += 1.01;
            document.form1.SBurn.value += 1.005;
        }
    } else {
        document.form1.Count.value = count;
        if (document.form1.Caliber.value < 160) {
            document.form1.Burn.value -= 1.005;
            document.form1.SBurn.value -= 1.005;
        }
        if (document.form1.Caliber.value > 160) {
            document.form1.Burn.value -= 1.01;
            document.form1.SBurn.value -= 1.005;
        }
    }
}

function hurricaneFlag(ischecked){
    if (ischecked == true) {
        if (document.form1.Caliber.value < 160) {
            document.form1.Burn.value += 1.005;
            document.form1.SBurn.value += 1.005;
        }
        if (document.form1.Caliber.value > 160) {
            document.form1.Burn.value += 1.01;
            document.form1.SBurn.value += 1.005;
        }
    } else {
        document.form1.Count.value = count;
        if (document.form1.Caliber.value < 160) {
            document.form1.Burn.value -= 1.005;
            document.form1.SBurn.value -= 1.005;
        }
        if (document.form1.Caliber.value > 160) {
            document.form1.Burn.value -= 1.01;
            document.form1.SBurn.value -= 1.005;
        }
    }
}

function speedFlag(ischecked){
    if(ischecked == true){
        document.form1.Speed.value *= 1.005;
    } else{
        document.form1.Speed.value /= 1.005;
    }
}

function ugReset(){
    document.getElementById("ugA").selectedIndex = 0;
    ug_A();
    document.getElementById("ugB").selectedIndex = 0;
    ug_B();
    document.getElementById("ugC").selectedIndex = 0;
    ug_C();
    document.getElementById("ugD").selectedIndex = 0;
    ug_D();
    document.getElementById("ugE").selectedIndex = 0;
    ug_E();
    document.getElementById("ugF").selectedIndex = 0;
    ug_F();
}
