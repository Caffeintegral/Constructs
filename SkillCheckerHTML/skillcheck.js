function paste(){
    var text = document.form1.elements[target];
}
var selectedCountry ="";
function countrySet(idname){
    var select1 = document.forms.form1.type;
    var select2 = document.forms.form1.Name;
    select1.options.length = 0;
    var a = document.getElementById(idname);
    console.log(a);
    document.form1.Name.value = "";
    document.form1.Tier.value = "";
    document.form1.HP.value = "";
    document.form1.Caliber.value = "";
    document.form1.Range.value = "";
    document.form1.Burn.value = "";
    document.form1.SRange.value = "";
    document.form1.SBurn.value = "";
    document.form1.TRange.value = "";
    document.form1.TSpeed.value = "";
    document.form1.TLoad.value = "";
    document.form1.AA.value = "";
    document.form1.AADamage.value = "";
    document.form1.Speed.value = "";
    document.form1.Turn.value = "";
    document.form1.Hiding.value = "";
    document.form1.AHiding.value = "";

    var typeNum;
    switch (document.form1.country.selectedIndex) {
        case 0: break;
        case 1: typeNum = jptype; break;
        case 2: typeNum = ustype; break;
        case 3: typeNum = kmtype; break;
        case 4: typeNum = rutype; break;
        case 5: typeNum = uktype; break;
        case 6: typeNum = frtype; break;
        case 7: typeNum = patype; break;
        case 8: typeNum = potype; break;
        case 9: typeNum = etctype; break;
    }

    for(i = 1; i < typeNum.length; i++){
        switch (document.form1.country.selectedIndex){
            case 0: document.form1.type.options[i].text="" ; break;
            case 1: select1.options[i] = new Option(jptype[i]); selectedCountry= "jp"; break;
            case 2: select1.options[i] = new Option(ustype[i]); selectedCountry= "us"; break;
            case 3: select1.options[i] = new Option(kmtype[i]); selectedCountry= "km"; break;
            case 4: select1.options[i] = new Option(rutype[i]); selectedCountry= "ru"; break;
            case 5: select1.options[i] = new Option(uktype[i]); selectedCountry= "uk"; break;
            case 6: select1.options[i] = new Option(frtype[i]); selectedCountry= "fr"; break;
            case 7: select1.options[i] = new Option(patype[i]); selectedCountry= "pa"; break;
            case 8: select1.options[i] = new Option(potype[i]); selectedCountry= "po"; break;
            case 9: select1.options[i] = new Option(etctype[i]); selectedCountry= "etc"; break;
        }
        
    }
    document.form1.type.selectedIndex=0;
}

function typeSet(){
    var select2 = document.forms.form1.Name;
    select2.options.length = 0;
    var shipNum;

    document.form1.Name.value = "";
    document.form1.Tier.value = "";
    document.form1.HP.value = "";
    document.form1.Caliber.value = "";
    document.form1.Range.value = "";
    document.form1.Burn.value = "";
    document.form1.SRange.value = "";
    document.form1.SBurn.value = "";
    document.form1.TRange.value = "";
    document.form1.TSpeed.value = "";
    document.form1.TLoad.value = "";
    document.form1.AA.value = "";
    document.form1.AADamage.value = "";
    document.form1.Speed.value = "";
    document.form1.Turn.value = "";
    document.form1.Hiding.value = "";
    document.form1.AHiding.value = "";
    

    if(selectedCountry == "jp"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = jpdd; break;
            case 2: shipNum = jpca; break;
            case 3: shipNum = jpbb; break;
            case 4: shipNum = jpcv; break;
        }
        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(jpdd[i]); break;
                case 2: select2.options[i] = new Option(jpca[i]); break;
                case 3: select2.options[i] = new Option(jpbb[i]); break;
                case 4: select2.options[i] = new Option(jpcv[i]); break;
            }
        }
        document.form1.Name.selectedIndex=0;
    }
    if(selectedCountry == "us"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = usdd; break;
            case 2: shipNum = usca; break;
            case 3: shipNum = usbb; break;
            case 4: shipNum = uscv; break;
        }

        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(usdd[i]); break;
                case 2: select2.options[i] = new Option(usca[i]); break;
                case 3: select2.options[i] = new Option(usbb[i]); break;
                case 4: select2.options[i] = new Option(uscv[i]); break;
            }
        }
    }
    if(selectedCountry == "km"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = kmdd; break;
            case 2: shipNum = kmca; break;
            case 3: shipNum = kmbb; break;
            case 4: shipNum = kmcv; break;
        }
        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(kmdd[i]); break;
                case 2: select2.options[i] = new Option(kmca[i]); break;
                case 3: select2.options[i] = new Option(kmbb[i]); break;
                case 4: select2.options[i] = new Option(kmcv[i]); break;
            }
        }
    }
    if(selectedCountry == "ru"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = rudd; break;
            case 2: shipNum = ruca; break;
            case 3: shipNum = rubb; break;
            // case 4: shipNum = rucv; break;
        }
        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(rudd[i]); break;
                case 2: select2.options[i] = new Option(ruca[i]); break;
                case 3: select2.options[i] = new Option(rubb[i]); break;
            }
        }
    }
    if(selectedCountry == "uk"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = ukdd; break;
            case 2: shipNum = ukca; break;
            case 3: shipNum = ukbb; break;
            // case 4: shipNum = ukcv; break;
        }
        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(ukdd[i]); break;
                case 2: select2.options[i] = new Option(ukca[i]); break;
                case 3: select2.options[i] = new Option(ukbb[i]); break;
            }
        }
    }
    if(selectedCountry == "fr"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = frdd; break;
            case 2: shipNum = frca; break;
            case 3: shipNum = frbb; break;
            // case 4: shipNum = frcv; break;
        }
        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(frdd[i]); break;
                case 2: select2.options[i] = new Option(frca[i]); break;
                case 3: select2.options[i] = new Option(frbb[i]); break;
            }
        }
    }
    if(selectedCountry == "pa"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = padd; break;
            case 2: shipNum = paca; break;
            // case 3: shipNum = pabb; break;
            // case 4: shipNum = pacv; break;
        }
        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(padd[i]); break;
                case 2: select2.options[i] = new Option(paca[i]); break;
            }
        }
    }
    if(selectedCountry == "po"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = podd; break;
            // case 2: shipNum = poca; break;
            // case 3: shipNum = pobb; break;
            // case 4: shipNum = pocv; break;
        }
        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(podd[i]); break;
            }
        }
    }
    if(selectedCountry == "etc"){
        switch (document.form1.type.selectedIndex) {
            case 0: break;
            case 1: shipNum = etcdd; break;
            case 2: shipNum = etcca; break;
            case 3: shipNum = etcbb; break;
            // case 4: shipNum = etccv; break;
        }
        for(i = 1; i < shipNum.length; i++){
            switch(document.form1.type.selectedIndex){
                case 0: document.form1.Name.options[i].text=""; break;
                case 1: select2.options[i] = new Option(etcdd[i]); break;
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

function allcheck(re) {
    var count = document.form1.elements.length;
    for (i = 0; i < count; i++) {
        document.form1.elements[i].checked = re;
    }
    document.form1.Count.value = 0;

    for (i = 0; i < shipdata.length; i++) {
        if (shipdata[i][0] == document.form1.Name.value) {
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
        }
    }
}
