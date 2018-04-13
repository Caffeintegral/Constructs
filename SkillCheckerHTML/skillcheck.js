function paste(){
    var text = document.form1.elements[target];
}
var selectedCountry ="";
function countrySet(){
    // var selectedCountry ="";
    for(i = 1; i < 5; i++){
        switch (document.form1.country.selectedIndex){
            case 0: document.form1.type.options[i].text="" ; break;
            case 1: document.form1.type.options[i].text= jptype[i]; selectedCountry= "jp"; break;
            case 2: document.form1.type.options[i].text= ustype[i]; selectedCountry= "us"; break;
            case 3: document.form1.type.options[i].text= kmtype[i]; selectedCountry= "km"; break;
            case 4: document.form1.type.options[i].text= rutype[i]; selectedCountry= "ru"; break;
            case 5: document.form1.type.options[i].text= uktype[i]; selectedCountry= "uk"; break;
            case 6: document.form1.type.options[i].text= frtype[i]; selectedCountry= "fr"; break;
            case 7: document.form1.type.options[i].text= patype[i]; selectedCountry= "pa"; break;
            case 8: document.form1.type.options[i].text= potype[i]; selectedCountry= "po"; break;
            case 9: document.form1.type.options[i].text= ettype[i]; selectedCountry= "et"; break;
        }
    }
    document.form1.type.selectedIndex=0;
}

function typeSet(){
    if(selectedCountry == "jp"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= jpdd[i]; break;
                case 2: document.form1.Name.options[i].text = jpca[i]; break;
                case 3: document.form1.Name.options[i].text= jpbb[i]; break;
                case 4: document.form1.Name.options[i].text= jpcv[i]; break;
            }
        }
        document.form1.Name.selectedIndex=0;
    }
    if(selectedCountry == "us"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= usdd[i]; break;
                case 2: document.form1.Name.options[i].text = usca[i]; break;
                case 3: document.form1.Name.options[i].text= usbb[i]; break;
                case 4: document.form1.Name.options[i].text= uscv[i]; break;
            }
        }
    }
    if(selectedCountry == "km"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= kmdd[i]; break;
                case 2: document.form1.Name.options[i].text = kmca[i]; break;
                case 3: document.form1.Name.options[i].text= kmbb[i]; break;
                case 4: document.form1.Name.options[i].text= kmcv[i]; break;
            }
        }
    }
    if(selectedCountry == "ru"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= rudd[i]; break;
                case 2: document.form1.Name.options[i].text = ruca[i]; break;
                case 3: document.form1.Name.options[i].text= rubb[i]; break;
                case 4: document.form1.Name.options[i].text= rucv[i]; break;
            }
        }
    }
    if(selectedCountry == "eu"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= eudd[i]; break;
                case 2: document.form1.Name.options[i].text = euca[i]; break;
                case 3: document.form1.Name.options[i].text= eubb[i]; break;
                case 4: document.form1.Name.options[i].text= eucv[i]; break;
            }
        }
    }
    if(selectedCountry == "fr"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= frdd[i]; break;
                case 2: document.form1.Name.options[i].text = frca[i]; break;
                case 3: document.form1.Name.options[i].text= frbb[i]; break;
                case 4: document.form1.Name.options[i].text= frcv[i]; break;
            }
        }
    }
    if(selectedCountry == "pa"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= padd[i]; break;
                case 2: document.form1.Name.options[i].text = paca[i]; break;
                case 3: document.form1.Name.options[i].text= pabb[i]; break;
                case 4: document.form1.Name.options[i].text= pacv[i]; break;
            }
        }
    }
    if(selectedCountry == "po"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= podd[i]; break;
                case 2: document.form1.Name.options[i].text = poca[i]; break;
                case 3: document.form1.Name.options[i].text= pobb[i]; break;
                case 4: document.form1.Name.options[i].text= pocv[i]; break;
            }
        }
    }
    if(selectedCountry == "et"){
        for(i = 1; i < 20; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: document.form1.Name.options[i].text= etdd[i]; break;
                case 2: document.form1.Name.options[i].text = etca[i]; break;
                case 3: document.form1.Name.options[i].text= etbb[i]; break;
                case 4: document.form1.Name.options[i].text= etcv[i]; break;
            }
        }
    }
}


function setship(idname){
    var a = document.getElementById(idname);
    var idx = a.selectedIndex;
    var val = a.options[idx].value;
    var txt = a.options[idx].text;
    // console.log('選択したのは「インデックス:' + idx + ' 値:' + val + ' ラベル:' + txt + '」です');
    for(i=0; i<shipdata.length; i++){
        // for(n = 0; n < 15; n++){
        if(shipdata[i][0]==txt){
            // document.form1.Name.value = shipdata[i][0];
            // document.form1.Type.value = shipdata[i][1];
            document.form1.Tier.value = shipdata[i][2];
            document.form1.HP.value = shipdata[i][3];
            document.form1.Caliber.value = shipdata[i][4];
            document.form1.Range.value = shipdata[i][5];
            document.form1.Burn.value = shipdata[i][6];
            document.form1.SRange.value = shipdata[i][7];
            document.form1.SBurn.value = shipdata[i][8];
            document.form1.TRange.value = shipdata[i][9];
            document.form1.TSpeed.value = shipdata[i][10];
            document.form1.TLoad.value = shipdata[i][11];
            document.form1.AA.value = shipdata[i][12];
            document.form1.AADamage.value = shipdata[i][13];
            document.form1.Speed.value = shipdata[i][14];
            document.form1.Turn.value = shipdata[i][15];
            document.form1.Hiding.value = shipdata[i][16];
            document.form1.AHiding.value = shipdata[i][17];

            break;
        // }
        }
    }
}

// function shipsearch(){
//     var elm = document.getElementById('Name').value;
//     var j = 0;
//     var e = document.getElementById('combolist');
//     var e2 = '';
//     if (elm.length >= 1) {
//         for (i = 0; i < shipdata.length; i++) {
//             var elm3 = shipdata[i][0].toLowerCase();
//             var index = elm3.indexOf(elm);
//             if (index != -1) {
//                 e2 += '<option value = "' + shipdata[i][0] + '"></option>';
//                 j++;
//             }
//             if (j >= 20) {
//                 break;
//             }
//         }
//         document.getElementById('Name').value = elm;//挿入するけど2重になっていく

//         while (e.firstChild) {
//             e.removeChild(e.firstChild);
//         }
//         e.innerHTML += e2;
//     }

// }
function a1(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
}
function a2(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
}
function a3(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
}
function a4(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
}
function a5(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
}
function a6(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
}
function a7(ischecked){
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
}
function a8(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
}
function b1(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
}
function b2(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
}
function b3(ischecked){
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
}
function b4(ischecked){ //雷速向上
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
        var speed = parseInt(document.form1.TSpeed.value) + 5;
        document.form1.TSpeed.value = speed;
        document.form1.TRange.value *=0.80;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
        var speed = parseInt(document.form1.TSpeed.value) - 5;
        document.form1.TSpeed.value = speed;
        document.form1.TRange.value /= 0.80;
    }
}
function b5(ischecked){
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
}
function b6(ischecked){
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
}
function b7(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
}
function b8(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
}
function c1(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
    }
}
function c2(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
        var hp = parseInt(document.form1.HP.value) + parseInt(document.form1.Tier.value) * 350;
        document.form1.HP.value = hp;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
        var hp = parseInt(document.form1.HP.value) - parseInt(document.form1.Tier.value) * 350;
        document.form1.HP.value = hp;
    }
}
function c3(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
        document.form1.TLoad.value *= 0.90;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
        document.form1.TLoad.value /= 0.90;
    }
}
function c4(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
    }
}
function c5(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
        document.form1.AADamage.value *= 1.20;

    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
        document.form1.AADamage.value /= 1.20;
    }
}
function c6(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
    }
}
function c7(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
        var a = parseInt(document.form1.Burn.value) + 2;
        var b = parseInt(document.form1.SBurn.value) + 2;
        document.form1.Burn.value = a;
        document.form1.SBurn.value = b;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
        var a = parseInt(document.form1.Burn.value) - 2;
        var b = parseInt(document.form1.SBurn.value) - 2;
        document.form1.Burn.value = a;
        document.form1.SBurn.value = b;
    }
}
function c8(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
    }
}
function d1(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
    }
}
function d2(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
    }
}
function d3(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;

        if (document.form1.Caliber.value < 139) {
            var a = parseInt(document.form1.Burn.value) - 1;
            var b = parseInt(document.form1.SBurn.value) - 1;
            document.form1.Burn.value = a;
            document.form1.SBurn.value = b;
        }
        if (document.form1.Caliber.value > 139) {
            var a = parseInt(document.form1.Burn.value) - 3;
            var b = parseInt(document.form1.SBurn.value) - 3;
            document.form1.Burn.value = a;
            document.form1.SBurn.value = b;
        }
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        if (document.form1.Caliber.value < 139) {
            var a = parseInt(document.form1.Burn.value) + 1;
            var b = parseInt(document.form1.SBurn.value) + 1;
            document.form1.Burn.value = a;
            document.form1.SBurn.value = b;
        }
        if (document.form1.Caliber.value > 139) {
            var a = parseInt(document.form1.Burn.value) + 3;
            var b = parseInt(document.form1.SBurn.value) + 3;
            document.form1.Burn.value = a;
            document.form1.SBurn.value = b;
        }
    }
}
function d4(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
    }
}
function d5(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;

        if (document.form1.Caliber.value < 139) {
            document.form1.Range.value *= 1.20;
            document.form1.AA.value *= 1.20;
        }
        if (document.form1.Caliber.value > 139) {
            document.form1.AA.value *= 1.20;
        }
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        if (document.form1.Caliber.value < 139) {
            document.form1.Range.value /= 1.20;
            document.form1.AA.value /= 1.20;
        }
        if (document.form1.Caliber.value > 139) {
            document.form1.AA.value /= 1.20;
        }
    }
}
function d6(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
        document.form1.AA.value *= 2;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        document.form1.AA.value /= 2;
    }
}
function d7(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
    }
}
function d8(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;

        if (document.form1.Type.value == "駆逐艦") {
            document.form1.Hiding.value *= 0.90;
            document.form1.AHiding.value *= 0.90;
        }
        if (document.form1.Type.value == "巡洋艦") {
            document.form1.Hiding.value *= 0.88;
            document.form1.AHiding.value *= 0.88;
        }
        if (document.form1.Type.value == "戦艦") {
            document.form1.Hiding.value *= 0.86;
            document.form1.AHiding.value *= 0.86;
        }
        if (document.form1.Type.value == "航空母艦") {
            document.form1.Hiding.value *= 0.84;
            document.form1.AHiding.value *= 0.84;
        }
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        if (document.form1.Type.value == "駆逐艦") {
            document.form1.Hiding.value /= 0.90;
            document.form1.AHiding.value /= 0.90;
        }
        if (document.form1.Type.value == "巡洋艦") {
            document.form1.Hiding.value /= 0.88;
            document.form1.AHiding.value /= 0.88;
        }
        if (document.form1.Type.value == "戦艦") {
            document.form1.Hiding.value /= 0.86;
            document.form1.AHiding.value /= 0.86;
        }
        if (document.form1.Type.value == "航空母艦") {
            document.form1.Hiding.value /= 0.84;
            document.form1.AHiding.value /= 0.84;
        }
    }
}


