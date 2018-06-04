function a1(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
    setShip();
}
function a2(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
    setShip();
}
function a3(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
    setShip();
}
function a4(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
    setShip();
}
function a5(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
    setShip();
}
function a6(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
    setShip();
}
function a7(ischecked){
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
    setShip();
}
function a8(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 1;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 1;
        document.form1.Count.value = count;
    }
    setShip();
}
function b1(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
    setShip();
}
function b2(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
    setShip();
}
function b3(ischecked){
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
    setShip();
}
function b4(ischecked){ //雷速向上
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
        var speed = parseInt(currentShipData[10]) + 5;
        currentShipData[10] = speed;
        document.form1.TRange.value *=0.80;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
        var speed = parseInt(currentShipData[10]) - 5;
        currentShipData[10] = speed;
        document.form1.TRange.value /= 0.80;
    }
    setShip();
}
function b5(ischecked){
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
    setShip();
}
function b6(ischecked){
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
    setShip();
}
function b7(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
    setShip();
}
function b8(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 2;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 2;
        document.form1.Count.value = count;
    }
    setShip();
}
function c1(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
    }
    setShip();
}
function c2(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
        var hp = parseInt(currentShipData[3]) + parseInt(currentShipData[2]) * 350;
        currentShipData[3] = hp;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
        var hp = parseInt(currentShipData[3]) - parseInt(currentShipData[2]) * 350;
        currentShipData[3] = hp;
    }
    setShip();
}
function c3(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
        currentShipData[11] *= 0.90;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
        currentShipData[11] /= 0.90;
    }
    setShip();
}
function c4(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
    }
    setShip();
}
function c5(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
        currentShipData[13] *= 1.20;

    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
        currentShipData[13] /= 1.20;
    }
    setShip();
}
function c6(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
    }
    setShip();
}
function c7(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
        var a = parseInt(currentShipData[6]) + 2;
        var b = parseInt(document.form1.c.value) + 2;
        currentShipData[6] = a;
        currentShipData[8] = b;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
        var a = parseInt(currentShipData[6]) - 2;
        var b = parseInt(currentShipData[8]) - 2;
        currentShipData[6] = a;
        currentShipData[8] = b;
    }
    setShip();
}
function c8(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 3;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 3;
        document.form1.Count.value = count;
    }
    setShip();
}
function d1(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
    }
    setShip();
}
function d2(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
    }
    setShip();
}
function d3(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;

        if (currentShipData[4] < 139) {
            var a = parseInt(currentShipData[6]) - 1;
            var b = parseInt(currentShipData[8]) - 1;
            currentShipData[6] = a;
            currentShipData[8] = b;
        }
        if (currentShipData[4] > 139) {
            var a = parseInt(currentShipData[6]) - 3;
            var b = parseInt(currentShipData[8]) - 3;
            currentShipData[6] = a;
            currentShipData[8] = b;
        }
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        if (currentShipData[4] < 139) {
            var a = parseInt(currentShipData[6]) + 1;
            var b = parseInt(currentShipData[8]) + 1;
            currentShipData[6] = a;
            currentShipData[8] = b;
        }
        if (currentShipData[4] > 139) {
            var a = parseInt(currentShipData[6]) + 3;
            var b = parseInt(currentShipData[8]) + 3;
            currentShipData[6] = a;
            currentShipData[8] = b;
        }
    }
    setShip();
}
function d4(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
    }
    setShip();
}
function d5(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;

        if (currentShipData[4] < 139) {
            document.form1.Range.value *= 1.20;
            currentShipData[12] *= 1.20;
        }
        if (currentShipData[4] > 139) {
            currentShipData[12] *= 1.20;
        }
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        if (currentShipData[4] < 139) {
            document.form1.Range.value /= 1.20;
            currentShipData[12] /= 1.20;
        }
        if (currentShipData[4] > 139) {
            currentShipData[12] /= 1.20;
        }
    }
    setShip();
}
function d6(ischecked) {
    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
        currentShipData[12] *= 2;
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        currentShipData[12] /= 2;
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
    setShip();
}
function d8(ischecked) {
    var defaultHid = parseInt(currentShipData[16]);
    var defaultAHid = parseInt(currentShipData[17]);

    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
        console.log(document.form1.type.value);

        if (document.form1.type.value == "駆逐艦") {
            currentShipData[16] *= 0.90;
            currentShipData[17] *= 0.90;
        }
        if (document.form1.type.value == "巡洋艦") {
            currentShipData[16] *= 0.88;
            currentShipData[17] *= 0.88;
        }
        if (document.form1.type.value == "戦艦") {
            currentShipData[16] *= 0.86;
            currentShipData[17] *= 0.86;
        }
        if (document.form1.type.value == "航空母艦") {
            currentShipData[16] *= 0.84;
            currentShipData[17] *= 0.84;
        }
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        if (document.form1.type.value == "駆逐艦") {
            currentShipData[16] /= 0.90;
            currentShipData[17] /= 0.90;
        }
        if (document.form1.type.value == "巡洋艦") {
            currentShipData[16] /= 0.88;
            currentShipData[17] /= 0.88;
        }
        if (document.form1.type.value == "戦艦") {
            currentShipData[16] /= 0.86;
            currentShipData[17] /= 0.86;
        }
        if (document.form1.type.value == "航空母艦") {
            currentShipData[16] /= 0.84;
            currentShipData[17] /= 0.84;
        }
    }
    setShip();
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


