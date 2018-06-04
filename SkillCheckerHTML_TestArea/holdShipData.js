// var currentShipData = ["", "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// function setCurrentShipData(idname){
//     allcheck(false);
//     ugReset();
//     var shipNameId = document.getElementById(idname);
//     var idx = shipNameId.selectedIndex;
//     var shipName = shipNameId.options[idx].text;
//     var index;
//     for(i = 0; i < shipdata.length; i++){
//         if (shipdata[i][0] == shipName){
//             index = i;
//             break;
//         }
//     }
//     for(n = 0; n < currentShipData.length; n++){
//         currentShipData[n] = shipdata[index][n];
//     }
//     setShip();
// }

// function setShip(){

//     document.form1.Tier.value = Math.ceil(currentShipData[2]*100)/100; //Tier
//     document.form1.HP.value = Math.ceil(currentShipData[3]*100)/100; //HP
//     document.form1.Caliber.value = Math.ceil(currentShipData[4]*100)/100; //主砲口径
//     document.form1.Range.value = Math.ceil(currentShipData[5]*100)/100; //主砲射程
//     document.form1.Burn.value = Math.ceil(currentShipData[6]*100)/100; //主砲火災発生率
//     document.form1.SRange.value = Math.ceil(currentShipData[7]*100)/100; //副砲射程
//     document.form1.SBurn.value = Math.ceil(currentShipData[8]*100)/100; //副砲火災発生率
//     document.form1.TRange.value = Math.ceil(currentShipData[9]*100)/100; //魚雷射程
//     document.form1.TSpeed.value = Math.ceil(currentShipData[10]*100)/100; //魚雷速度
//     document.form1.TLoad.value = Math.ceil(currentShipData[11]*100)/100; //魚雷装填速度
//     document.form1.AA.value = Math.ceil(currentShipData[12]*100)/100; //最長対空砲距離
//     document.form1.AADamage.value = Math.ceil(currentShipData[13]*100)/100; //最長対空砲秒間平均ダメージ
//     document.form1.Speed.value = Math.ceil(currentShipData[14]*100)/100; //最大速度
//     document.form1.Turn.value = Math.ceil(currentShipData[15]*100)/100; //転舵所要時間
//     document.form1.Hiding.value = Math.ceil(currentShipData[16]*100)/100; //海面発見距離
//     document.form1.AHiding.value = Math.ceil(currentShipData[17]*100)/100; //航空発見距離
// }

// function d8(ischecked) {

//     if (ischecked == true) {
//         var count = parseInt(document.form1.Count.value) + 4;
//         document.form1.Count.value = count;
//         console.log(currentShipData[1]);

//         if (currentShipData[1] == "駆逐艦") {
//             currentShipData[16] *= 0.90;
//             // document.form1.Hiding.value = Math.ceil(currentShipData[16]*100)/100;
//             currentShipData[17] *= 0.90;
//             // document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;
//         }
//         if (currentShipData[1] == "巡洋艦") {
//             currentShipData[16] *= 0.88;
//             // document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
//             currentShipData[17] *= 0.88;
//             // document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

//         }
//         if (currentShipData[1] == "戦艦") {
//             currentShipData[16] *= 0.86;
//             // document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
//             currentShipData[17] *= 0.86;
//             // document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

//         }
//         if (currentShipData[1] == "航空母艦") {
//             currentShipData[16] *= 0.84;
//             // document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
//             currentShipData[17] *= 0.84;
//             // document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

//         }
//     } else {
//         var count = parseInt(document.form1.Count.value) - 4;
//         document.form1.Count.value = count;
//         if (currentShipData[1] == "駆逐艦") {
//             currentShipData[16] /= 0.90;
//             // document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
//             currentShipData[17] /= 0.90;
//             // document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

//         }
//         if (currentShipData[1] == "巡洋艦") {
//             currentShipData[16] /= 0.88;
//             // document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
//             currentShipData[17] /= 0.88;
//             // document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

//         }
//         if (currentShipData[1] == "戦艦") {
//             currentShipData[16] /= 0.86;
//             // document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
//             currentShipData[17] /= 0.86;
//             // document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

//         }
//         if (currentShipData[1] == "航空母艦") {
//             currentShipData[16] /= 0.84;
//             // document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100;
//             currentShipData[17] /= 0.84;
//             // document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100;

//         }
//     }
//     setShip();
// }