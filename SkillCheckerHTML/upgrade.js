function ugA_1(ischecked){ //主兵装改良1
    if(ischecked == true){

    } else{

    }
}

function ugA_2(ischecked){ //副兵装改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugA_3(ischecked){ //弾薬庫改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugA_4(ischecked){ //飛行機隊改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugA_5(ischecked){ //射撃システム改良0
    if(ischecked == true){
        document.form1.SRange.value *= 1.20;
    } else{
        document.form1.SRange.value /= 1.20;
    }
}
function ugA_6(ischecked){ //応急工作班改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugA_7(ischecked){ //着弾観測機改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugB_1(ischecked){ //ダメージコントロールシステム改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugB_2(ischecked){ //推力改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugB_3(ischecked){ //操舵装置改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugB_4(ischecked){ //エンジンブースト改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugB_5(ischecked){ //水中聴音改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugB_6(ischecked){ //対空防御砲火改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugB_7(ischecked){ //警戒レーダー改良１
    if(ischecked == true){
        
    } else{

    }
}
function ugC_1(ischecked){ //主砲改良2
    if(ischecked == true){
        
    } else{

    }
}

function ugC_2(ischecked){ //副砲改良2
    if(ischecked == true){
        document.form1.SRange.value *= 1.20;
    } else{
        document.form1.SRange.value /= 1.20;
    }
}
function ugC_3(ischecked){ //射撃システム改良1
    if(ischecked == true){
        document.form1.SRange.value *= 1.05;
    } else{
        document.form1.SRange.value /= 1.05;
    }
}
function ugC_4(ischecked){ //射撃管制室改良1
    if(ischecked == true){
        document.form1.Range.value *= 1.16;
        document.form1.SRange.value *= 1.05;
    } else{
        document.form1.Range.value /= 1.16;
        document.form1.SRange.value /= 1.05;
    }
}

function ugC_5(ischecked){ //対空砲改良2
    if(ischecked == true){
        document.form1.AA.value *= 1.20;
    } else{
        document.form1.AA.value /= 1.20;
    }
} 
function ugC_6(ischecked){ //飛行機隊改良2
    if(ischecked == true){
        
    } else{

    }
}
function ugC_7(ischecked){ //航空管制改良1
    if(ischecked == true){
        
    } else{

    }
}

function ugC_8(ischecked){ //発煙装置改良1
    if(ischecked == true){
        
    } else{

    }
}

function ugD_1(ischecked){ //ダメージコントロールシステム改良2
    if(ischecked == true){
        
    } else{

    }
}
function ugD_2(ischecked){ //推力改良2
    if(ischecked == true){
        
    } else{

    }
}
function ugD_3(ischecked){ //操舵装置改良2
    if(ischecked == true){
        document.form1.Turn.value *= 0.8;
    } else{
        document.form1.Turn.value /= 0.8;
    }
}

function ugE_1(ischecked){ //隠蔽システム改良1
    if(ischecked == true){
        document.form1.Hiding.value *= 0.9;
    } else{
        document.form1.Hiding.value /= 0.9;
    }
}
function ugE_2(ischecked){ //目標測距装置改良1
    if(ischecked == true){
        
    } else{

    }
}
function ugE_3(ischecked){ //操舵装置改良3
    if(ischecked == true){
        document.form1.Turn.value *= 0.6;
    } else{
        document.form1.Turn.value /= 0.6;
    }
}

function ugF_1(ischecked){ //主砲改良3
    if(ischecked == true){
        
    } else{

    }
}
function ugF_2(ischecked){ //副砲改良3
    if(ischecked == true){
        
    } else{

    }
}
function ugF_3(ischecked){ //魚雷発射管改良3
    if(ischecked == true){
        document.form1.TLoad.value *= 0.85;
    } else{
        document.form1.TLoad.value /= 0.85;
    }
}

function ugF_4(ischecked){ //射撃管制装置改良2
    if(ischecked == true){
        document.form1.Range.value *= 1.16;
    } else{
        document.form1.Range.value /= 1.16;
    }
}
function ugF_5(ischecked){ //射撃管制室改良2
    if(ischecked == true){
        
    } else{

    }
} 
function ugF_6(ischecked){ //対空砲改良3
    if(ischecked == true){
        document.form1.AA.value *= 1.25;
    } else{
        document.form1.AA.value /= 1.25;
    }
}

function ugF_7(ischecked){ //飛行機隊改良3
    if(ischecked == true){
        
    } else{

    }
}
function ugF_8(ischecked){ //航空管制改良2
    if(ischecked == true){
        
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
