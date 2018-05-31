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
    var defaultHid = parseInt(document.form1.Hiding.value);
    var defaultAHid = parseInt(document.form1.AHiding.value);

    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
        console.log(document.form1.type.value);

        if (document.form1.type.value == "駆逐艦") {
            document.form1.Hiding.value *= 0.90;
            document.form1.AHiding.value *= 0.90;
        }
        if (document.form1.type.value == "巡洋艦") {
            document.form1.Hiding.value *= 0.88;
            document.form1.AHiding.value *= 0.88;
        }
        if (document.form1.type.value == "戦艦") {
            document.form1.Hiding.value *= 0.86;
            document.form1.AHiding.value *= 0.86;
        }
        if (document.form1.type.value == "航空母艦") {
            document.form1.Hiding.value *= 0.84;
            document.form1.AHiding.value *= 0.84;
        }
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        if (document.form1.type.value == "駆逐艦") {
            document.form1.Hiding.value /= 0.90;
            document.form1.AHiding.value /= 0.90;
        }
        if (document.form1.type.value == "巡洋艦") {
            document.form1.Hiding.value /= 0.88;
            document.form1.AHiding.value /= 0.88;
        }
        if (document.form1.type.value == "戦艦") {
            document.form1.Hiding.value /= 0.86;
            document.form1.AHiding.value /= 0.86;
        }
        if (document.form1.type.value == "航空母艦") {
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


