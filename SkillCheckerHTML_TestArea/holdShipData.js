var currentShipData = ["", "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setCurrentShipData(idname){
    var shipNameId = document.getElementById(idname);
    var idx = shipNameId.selectedIndex;
    var shipName = shipNameId.options[idx].text;
    for(i = 0; i < shipdata.length; i++){
        if (shipdata[i][0] == shipName){
            currentShipData[1] = shipdata[i][1];
            currentShipData[2] = shipdata[i][2];
            currentShipData[3] = shipdata[i][3];
            currentShipData[4] = shipdata[i][4];
            currentShipData[5] = shipdata[i][5];
            currentShipData[6] = shipdata[i][6];
            currentShipData[7] = shipdata[i][7];
            currentShipData[8] = shipdata[i][8];
            currentShipData[9] = shipdata[i][9];
            currentShipData[10] = shipdata[i][10];
            currentShipData[11] = shipdata[i][11];
            currentShipData[12] = shipdata[i][12];
            currentShipData[13] = shipdata[i][13];
            currentShipData[14] = shipdata[i][14];
            currentShipData[15] = shipdata[i][15];
            currentShipData[16] = shipdata[i][16];
            currentShipData[17] = shipdata[i][17];
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

function d8(ischecked) {

    if (ischecked == true) {
        var count = parseInt(document.form1.Count.value) + 4;
        document.form1.Count.value = count;
        console.log("aaaaaaaaaaaaa");

        if (currentShipData[1] == "駆逐艦") {
            currentShipData[16] *= 0.90;
            document.form1.Hiding.value = Math.ceil(currentShipData[16]*100)/100;
            currentShipData[17] *= 0.90;
            document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;
        }
        if (currentShipData[1] == "巡洋艦") {
            currentShipData[16] *= 0.88;
            document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
            currentShipData[17] *= 0.88;
            document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

        }
        if (currentShipData[1] == "戦艦") {
            currentShipData[16] *= 0.86;
            document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
            currentShipData[17] *= 0.86;
            document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

        }
        if (currentShipData[1] == "航空母艦") {
            currentShipData[16] *= 0.84;
            document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
            currentShipData[17] *= 0.84;
            document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

        }
    } else {
        var count = parseInt(document.form1.Count.value) - 4;
        document.form1.Count.value = count;
        if (currentShipData[1] == "駆逐艦") {
            currentShipData[16] /= 0.90;
            document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
            currentShipData[17] /= 0.90;
            document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

        }
        if (currentShipData[1] == "巡洋艦") {
            currentShipData[16] /= 0.88;
            document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
            currentShipData[17] /= 0.88;
            document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

        }
        if (currentShipData[1] == "戦艦") {
            currentShipData[16] /= 0.86;
            document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
            currentShipData[17] /= 0.86;
            document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

        }
        if (currentShipData[1] == "航空母艦") {
            currentShipData[16] /= 0.84;
            document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
            currentShipData[17] /= 0.84;
            document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

        }
    }
}