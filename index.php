<!-- tzv document definition type. Ukazujeme, ze document ma typ html5 -->
<!-- potrebujeme prave proto, aby prohlizec chapal podle jakych standartu zobrazovat stranku -->
<!DOCTYPE html>

<html>
<head>

    <!--  title dokumentu  -->
    <title>Domaci ukol</title>

    <!--  Zadavame typ kodovani starnky do utf-8  -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <!--  Zadavame viewport pro jednotlive zarizeni.  -->
    <!--  width=device-width : Pri prvnim loadu stranky sirka se nastavi na sirku obrazovky zarizeni -->
    <!--  maximum-scale : maximalni hodnota scale obsahu stranky. nastaveno na 1 => obsah ma puvodni velikost  -->
    <!--  user-scalable : nastavujeme jestli muze uzivatel zvetsovat ci zmensovat obsah stranky na sensorovych zarizeni, no - protoze mame RWD -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <!--  import zkompilovaneho css  -->
    <link href="assets/css/main.css" rel="stylesheet" type="text/css"/>

</head>
<body>


<!-- Zakladni blok, -->
<div class="calc-block">

    <!--  container, ktery pouzivame z bootstrap grid systemu  -->
    <!--  je vyrovnan upostred a ma paddingy zleva a zprava 15px -->
    <!--  navic container ma sve break pointy nastavene pro sirku jednotlivych obrazovek  -->
    <!--  pro kazdy break point container ma zvlastni sirku  -->
    <div class="container">

        <!--   obrazek v leve casti zakladniho bloku     -->
        <img class="money-heart-img" src="assets/images/money-heart.png">


        <!--    row - taky z grid systemu bootstrap    -->
        <!--    ma sirku containeru a navic ma nastavene marginy left a right -15px, protoze contaner ma paddnigy 15px    -->
        <div class="row">

            <!--  grid system bootstrapu je rozdelen na 12 sloupcu -->

            <!--  a col-xs-12 znamena, ze blok bude mit sirku 100% pro sirku obrazovky minimalne 768px a vice -->
            <div class="col-xs-12">

                <!--  hlavicka zakladniho bloku  -->
                <h2>
                    <span>Here to lend with our door is</span>

                    <!-- vydeleny text v hlavicce -->
                    <strong>firmly open</strong>
                </h2>


                <!--  col-sm-11 znamena, ze blok bude mit sirku 91.66666667% pro sirku obrazovky minimalne 768px a vice -->
                <!--  col-md-9 znamena, ze blok bude mit sirku 75% pro zirku obrazovky minimalne 992px a vice -->

                <!--  col-sm-push a col-md-push - jsou pravidla pro posunuti sloupcu v grid systemu -->
                <!--  col-sm-push-1 znamena, ze cely blok se posune o 8.33333333% doprava  pro sirku obrazovky minimalne 768px a vice-->
                <!--  col-md-push-3 znamena, ze cely blok se posune o 25% doprava  pro sirku obrazovky minimalne 992px a vice-->
                <div class="col-sm-11 col-sm-push-1 col-md-9 col-md-push-3 calc">


                    <!--    row - taky z grid systemu bootstrap    -->
                    <!--    ma sirku containeru a navic ma nastavene marginy left a right -15px, protoze contaner ma paddnigy 15px    -->
                    <div class="row">

                        <!--  block, ktery ma v sobe select box  -->
                        <div class="select-wrapper">

                            <!-- selectbox, ma tri moznosti vyberu: -->
                            <!-- Electronics: value=1 -->
                            <!-- Car: value=2 -->
                            <!-- Reality: value=3 -->
                            <!-- a takze ma metodu setRepaymentOptions(), ktera se vola po kazde zmene hodnoty select boxu -->

                            <select id="select" onchange="setRepaymentOptions();">
                                <option data-display="Electronics" value="1">Electronics</option>
                                <option value="2">Car</option>
                                <option value="3">Reality</option>
                            </select>


                        </div>

                    </div>

                    <!--    row - taky z grid systemu bootstrap    -->
                    <!--    ma sirku containeru a navic ma nastavene marginy left a right -15px, protoze contaner ma paddnigy 15px    -->
                    <div class="row">


                        <!--  col-sm-7 znamena, ze blok bude mit sirku 58.33333333% pro sirku obrazovky minimalne 768px a vice -->
                        <!--  col-md-8 znamena, ze blok bude mit sirku 66.66666667% pro zirku obrazovky minimalne 992px a vice -->
                        <div class="col-sm-7 col-md-8">

                            <!-- blok, ktery ma v sobe slider a jeho hodnotu  -->
                            <div class="slider-wrapper">

                                <!--  hlavicka slideru  -->
                                <div class="label">
                                    How much do you need
                                </div>

                                <!-- block slideru, do ktereho probiha inicializace -->
                                <div id="amount-slider" class="slider"></div>
                            </div>
                        </div>

                        <!--  col-sm-5 znamena, ze blok bude mit sirku 41.66666667% pro sirku obrazovky minimalne 768px a vice -->
                        <!--  col-md-4 znamena, ze blok bude mit sirku 33.33333333% pro zirku obrazovky minimalne 992px a vice -->
                        <div class="col-sm-5 col-md-4">

                            <div class="slider-value-container-outer">

                                <!-- block, ktery ma v sobe hodnotu slideru a jji oznaceni -->
                                <div class="slider-value-container">

                                    <!-- block, ktery ma v sobe hodnotu slideru -->
                                    <span id="amount" class="slider-value"></span>

                                    <!-- block, ktery ma v sobe oznaceni hodnoty slideru, tedy kc -->
                                    <span class="slider-value-label">Kč</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--    row - taky z grid systemu bootstrap    -->
                    <!--    ma sirku containeru a navic ma nastavene marginy left a right -15px, protoze contaner ma paddnigy 15px    -->
                    <div class="row">

                        <!--  col-sm-7 znamena, ze blok bude mit sirku 58.33333333% pro sirku obrazovky minimalne 768px a vice -->
                        <!--  col-md-8 znamena, ze blok bude mit sirku 66.66666667% pro zirku obrazovky minimalne 992px a vice -->
                        <div class="col-sm-7 col-md-8">

                            <!-- blok, ktery ma v sobe slider a jeho hodnotu  -->
                            <div class="slider-wrapper">

                                <!--  hlavicka slideru  -->
                                <div class="label">
                                    Repayment period
                                </div>


                                <!-- block slideru, do ktereho probiha inicializace -->
                                <div id="repayment-period-slider" class="slider"></div>
                            </div>
                        </div>


                        <!--  col-sm-5 znamena, ze blok bude mit sirku 41.66666667% pro sirku obrazovky minimalne 768px a vice -->
                        <!--  col-md-4 znamena, ze blok bude mit sirku 33.33333333% pro zirku obrazovky minimalne 992px a vice -->
                        <div class="col-sm-5 col-md-4">

                            <div class="slider-value-container-outer">

                                <!-- block, ktery ma v sobe hodnotu slideru a jji oznaceni -->
                                <!-- nastavuji se po zmene nebo inicializace jednotlivych slideru pomoci jquery a jquery-ui -->
                                <div class="slider-value-container">

                                    <!-- block, ktery ma v sobe hodnotu slideru -->
                                    <span id="repayment-period" class="slider-value"></span>

                                    <!-- block, ktery ma v sobe oznaceni hodnoty slideru, tedy mesic -->
                                    <span class="slider-value-label" id="repayment-period-label">mesic</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--    row - taky z grid systemu bootstrap    -->
                    <!--    ma sirku containeru a navic ma nastavene marginy left a right -15px, protoze contaner ma paddnigy 15px    -->
                    <div class="row">

                        <!--  col-sm-7 znamena, ze blok bude mit sirku 58.33333333% pro sirku obrazovky minimalne 768px a vice -->
                        <!--  col-md-8 znamena, ze blok bude mit sirku 66.66666667% pro zirku obrazovky minimalne 992px a vice -->
                        <div class="col-sm-7 col-md-8">

                            <!-- block, ktery ma v sobe hodnotu slideru a jji oznaceni -->
                            <!-- nastavuji se po zmene nebo inicializace jednotlivych slideru pomoci jquery a jquery-ui -->
                            <div class="slider-wrapper">


                                <!--  hlavicka slideru  -->
                                <div class="label">
                                    Procentual repayment
                                </div>

                                <!-- block slideru, do ktereho probiha inicializace -->
                                <div id="procentual-repayment-slider" class="slider"></div>
                            </div>
                        </div>

                        <!--  col-sm-5 znamena, ze blok bude mit sirku 41.66666667% pro sirku obrazovky minimalne 768px a vice -->
                        <!--  col-md-4 znamena, ze blok bude mit sirku 33.33333333% pro zirku obrazovky minimalne 992px a vice -->
                        <div class="col-sm-5 col-md-4">

                            <div class="slider-value-container-outer">

                                <!-- block, ktery ma v sobe hodnotu slideru a jji oznaceni -->
                                <!-- nastavuji se po zmene nebo inicializace jednotlivych slideru pomoci jquery a jquery-ui -->
                                <div class="slider-value-container">

                                    <!-- block, ktery ma v sobe hodnotu slideru -->
                                    <span id="procentual-repayment" class="slider-value"></span>

                                    <!-- block, ktery ma v sobe oznaceni hodnoty slideru, tedy % -->
                                    <span class="slider-value-label">%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--    row - taky z grid systemu bootstrap    -->
                    <!--    ma sirku containeru a navic ma nastavene marginy left a right -15px, protoze contaner ma paddnigy 15px    -->
                    <div class="row">

                        <!-- block, ktery ma v sobe hodnotu vysledku a jeho hlavicku -->
                        <div class="results">

                            <!--  col-sm-6 znamena, ze blok bude mit sirku 50% pro sirku obrazovky minimalne 768px a vice -->
                            <div class="col-sm-6">

                                <!-- block, ktery ma v sobe hlavicku vysledku -->
                                <h4 class="summary">Summary</h4>

                            </div>

                            <!--  col-sm-6 znamena, ze blok bude mit sirku 50% pro sirku obrazovky minimalne 768px a vice -->
                            <div class="col-sm-6">

                                <div class="result-value">

                                    <!-- block, ktery ma v sobe hodnotu vysledku nastavuje se pomoci jquery po vypoctu -->
                                    <span id="result-value"></span>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>


    </div>
</div>


<!-- import jquery -->
<script src="assets/js/jquery-3.1.1.min.js" type="text/javascript"></script>

<!-- import jquery ui, je nezbytny pro slidery -->
<script src="assets/js/jquery-ui.min.js" type="text/javascript"></script>

<!-- import nice-select.js, je nezbytny pro zobrazeni custom select boxu -->
<script src="assets/js/jquery.nice-select.js" type="text/javascript"></script>

<!-- import main.js - obsahuje v sobe vsechny metody, nezbutne pro fungovani stranky -->
<script src="assets/js/main.js" type="text/javascript"></script>

</body>
</html>
