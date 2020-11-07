window.onload = function() {

    NumbersItemsPallete = 10

    var ramdomPalette = GetListPalette(NumbersItemsPallete)
    colorDrawn = ramdomPalette[Math.floor(Math.random() * ramdomPalette.length)]
    console.log(colorDrawn);

    for(loop = 0; loop < NumbersItemsPallete; loop++) {
        
        id = "p"+(loop+1)
        document.getElementById(id).style.backgroundColor = ramdomPalette[loop]
        document.getElementById(id).innerHTML = "<span class='text-box'>" + ramdomPalette[loop] + "</span>"
        document.getElementById(id).onclick = function() {
            if( this.style.backgroundColor == colorDrawn ) {
                document.body.style.backgroundColor = colorDrawn
            }
            else {

                if (letterValue(this.style.backgroundColor[0]) > letterValue(colorDrawn[0])) {
                    alert("Opa, a cor que você escolheu é maior na ordem alfabética do que a sorteada")
                } else if (letterValue(this.style.backgroundColor[0]) < letterValue(colorDrawn[0])) {
                    alert("Opa, a cor que você escolheu é menor na ordem alfabética do que a sorteada")
                } else {
                    alert("Eita trem! A cor escolhida possui a mesma ordedm alfabética que a cor sorteada! Está quente!!!")
                }
            }
        }
    }
}

function GetListPalette(NumbersItemsPallete) {

    var listColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]
    
    var ramdomPalette = []

    for(loop = 0; loop < NumbersItemsPallete; loop++) {
    
        color = listColors[Math.floor(Math.random() * listColors.length)]

        while(color == listColors.indexOf(color)) {
            color = listColors[Math.floor(Math.random() * listColors.length)]
        }

        ramdomPalette[loop] = color.toLowerCase()
    }

    return ramdomPalette
}

function letterValue(str){
    var anum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    if(str.length== 1) return anum[str] || ' ';
    return str.split('').map(letterValue);
}