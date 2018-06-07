var selectedCountry ="";//
function countrySet(idname){
    allcheck(false);
    ugReset();
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
    allcheck(false);
    ugReset();
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

var currentShipData = ["", "", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setCurrentShipData(idname) {
    allcheck(false);
    ugReset();
    var shipNameId = document.getElementById(idname);
    var idx = shipNameId.selectedIndex;
    var shipName = shipNameId.options[idx].text;
    var index;
    for (i = 0; i < shipdata.length; i++) {
        if (shipdata[i][0] == shipName) {
            index = i;
            break;
        }
    }
    for (n = 0; n < currentShipData.length; n++) {
        currentShipData[n] = shipdata[index][n];
    }
    setShip();
}

function setShip() {

    document.form1.Tier.value = Math.ceil(currentShipData[2] * 100) / 100; //Tier
    document.form1.HP.value = Math.ceil(currentShipData[3] * 100) / 100; //HP
    document.form1.Caliber.value = Math.ceil(currentShipData[4] * 100) / 100; //主砲口径
    document.form1.Range.value = Math.ceil(currentShipData[5] * 100) / 100; //主砲射程
    document.form1.Burn.value = Math.ceil(currentShipData[6] * 100) / 100; //主砲火災発生率
    document.form1.SRange.value = Math.ceil(currentShipData[7] * 100) / 100; //副砲射程
    document.form1.SBurn.value = Math.ceil(currentShipData[8] * 100) / 100; //副砲火災発生率
    document.form1.TRange.value = Math.ceil(currentShipData[9] * 100) / 100; //魚雷射程
    document.form1.TSpeed.value = Math.ceil(currentShipData[10] * 100) / 100; //魚雷速度
    document.form1.TLoad.value = Math.ceil(currentShipData[11] * 100) / 100; //魚雷装填速度
    document.form1.AA.value = Math.ceil(currentShipData[12] * 100) / 100; //最長対空砲距離
    document.form1.AADamage.value = Math.ceil(currentShipData[13] * 100) / 100; //最長対空砲秒間平均ダメージ
    document.form1.Speed.value = Math.ceil(currentShipData[14] * 100) / 100; //最大速度
    document.form1.Turn.value = Math.ceil(currentShipData[15] * 100) / 100; //転舵所要時間
    document.form1.Hiding.value = Math.ceil(currentShipData[16] * 100) / 100; //海面発見距離
    document.form1.AHiding.value = Math.ceil(currentShipData[17] * 100) / 100; //航空発見距離
}