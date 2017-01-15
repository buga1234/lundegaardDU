// Inicializace nastaveni jednotlivych slideru.
var options = {

    // nastaveni slideru podle selectu. electronics se pouziva v pripade vyberu Electronics v <select id="select">
    electronics: {
        // to je inicializacni object pro slider #amount-slider
        amount: {
            // range potrebujeme pro urceni zacatecni hodnoty, kterou bude mit barevna cast slideru, barevna cast slideru ma barvu: #fb8044
            range: "min",
            // tady nastavujeme zacatecnou hodnotu, kterou bude mit slider.
            value: 1000,
            // minimalni hodnota, kterou muzeme vybrat pomoci slideru
            min: 1000,
            // maximalni hodnota, kterou muzeme vybrat pomoci slideru
            max: 50000,
            // urcujeme na kolik se zmeni hodnota slideru pri kazdem posunuti slideru
            step: 1000
        },
        // to je inicializacni object pro slider #repayment-period-slider
        repayment_period: {
            range: "min",
            value: 1,
            min: 1,
            max: 24,
            step: 1
        },
        // to je inicializacni object pro slider #procentual-repayment-slider
        procentual_repayment: {
            range: "min",
            value: 1,
            min: 1,
            max: 10,
            step: 1
        }
    },
    // nastaveni slideru podle selectu. car se pouziva v pripade vyberu Car v <select id="select">
    car: {
        amount: {
            range: "min",
            value: 50000,
            min: 50000,
            max: 500000,
            step: 10000
        },
        repayment_period: {
            range: "min",
            value: 12,
            min: 12,
            max: 60,
            step: 6
        },
        procentual_repayment: {
            range: "min",
            value: 1,
            min: 10,
            max: 20,
            step: 1
        }
    },
    // nastaveni slideru podle selectu. reality se pouziva v pripade vyberu Reality v <select id="select">
    reality: {
        amount: {
            range: "min",
            value: 500000,
            min: 500000,
            max: 5000000,
            step: 100000
        },
        repayment_period: {
            range: "min",
            value: 12,
            min: 12,
            max: 360,
            step: 12
        },
        procentual_repayment: {
            range: "min",
            value: 1,
            min: 1,
            max: 10,
            step: 1
        }
    }
};

// globalni promenna, kterou budeme potrebovat pri vypoctu vysledku pro zjisteni
// jaky slider byl zmenen #repayment-period-slider nebo #procentual-repayment-slider
var editedSlider = "";

// vola se pri kazde zmene hodnoty select boxu #select
function setRepaymentOptions() {

    // nacita se aktualni hodnota select boxu #select
    var selectedVal = $("#select").val();


    // nacitame udaje pro electronics z objectu options kdyz hodnota select boxu #select se rovna 1
    if (selectedVal == 1) {

        // vola se funkce, ktera inicializuje nastaveni jednotlivych slideru #amount-slider, #repayment-period-slider a #procentual-repayment-slider pro electronics
        sliderInit(options.electronics);

        // nacitame udaje pro car z objectu options kdyz hodnota select boxu #select se rovna 2
    } else if (selectedVal == 2) {

        // vola se funkce, ktera inicializuje nastaveni jednotlivych slideru #amount-slider, #repayment-period-slider a #procentual-repayment-slider pro car
        sliderInit(options.car);

        // nacitame udaje pro reality z objectu options kdyz hodnota select boxu #select se rovna 3
    } else if (selectedVal == 3) {

        // vola se funkce, ktera inicializuje nastaveni jednotlivych slideru #amount-slider, #repayment-period-slider a #procentual-repayment-slider pro reality
        sliderInit(options.reality);
    }
}


function setRepaymentPeriodLabel(val) {

    //inicializace labelVal pro dalsi pouziti
    var labelVal = "";

    // pokud repayment period ma hodnotu 1 tak hodnota pro #repayment-period-label nastavujeme na Měsíc
    if (val == 1) {


        labelVal = "Měsíc";


        // pokud repayment period ma hodnoty 2, 3 nebo 4 tak hodnota pro #repayment-period-label nastavujeme na Měsíce
    } else if (val == 2 || val == 3 || val == 4) {


        labelVal = "Měsíce";

        // pokud repayment period ma hodnotu vice nez 4 tak hodnota pro #repayment-period-label nastavujeme na Měsíců
    } else if (val > 4) {


        labelVal = "Měsíců";
    }

    // pomoci metody .text() priradime do bloku #repayment-period-label hodnotu, kterou ma labelVal
    $("#repayment-period-label").text(labelVal);


}

// metoda urcena pro vypocet konecneho vysledku a prirazeni do bloku #result-value
// mame tri hodnoty pro vypocet
// amount, repaymentPeriod, procentualRepayment
// amount potrebujeme vzdycky
// procentualRepayment a repaymentPeriod potrebujeme na zaklade toho
// jaky slider byl zmenen naposled. #repayment-period-slider nebo #procentual-repayment-slider
function calculateResult() {

    //kdyz byl zmenen slider #repayment-period-slider
    if (editedSlider == "repaymentPeriod") {

        // tak prirazime hodnotu slideru #repayment-period-slider do repaymentPeriod
        var repaymentPeriod = $("#repayment-period-slider").slider("value");

        // a hodnotu procentualRepayment nastavujeme na false, protoze pro vypocet hodnotu nepotrebujeme
        var procentualRepayment = false;

        //kdyz byl zmenen slider #procentual-repayment-slider
    } else if (editedSlider == "procentualRepayment") {


        // tak hodnotu repaymentPeriod nastavujeme na false, protoze pro vypocet hodnotu nepotrebujeme
        var repaymentPeriod = false;


        // a prirazime hodnotu slideru #procentual-repayment-slider do procentualRepayment
        var procentualRepayment = $("#procentual-repayment-slider").slider("value");

    }

    // prirazime hodnotu slideru #amount-slider do amount
    var amount = $("#amount-slider").slider("value");

    // provadi se vypocet vysledku.
    // amount se deli bud na repaymentPeriod nebo na procentualRepayment, kdyz repaymentPeriod je false
    var price = amount / (repaymentPeriod || procentualRepayment);

    // vysledek je potreba zobrazovat ve tvaru dvoumistneho desetinneho cisla
    // proto pouzijeme metodu parseFloat a toFixed.
    // parseFloat() je potreba pro konvertaci hodnoty price do promenne typu float
    // toFixed() je potreba pro oriznuti cisla typu float do dvou cisel po destinne carky
    var roundedNumber = parseFloat(price).toFixed(2);


    // prirazime do bloku #result-value konecny vysledek a pridelime navic Kc
    $("#result-value").text(roundedNumber + " Kč");

}


// metoda provadi nastaveni jednotlivych slideru #amount-slider, #repayment-period-slider a #procentual-repayment-slider

// ma argument objekt options, ktery obcahuje udaje o nastaveni.
// options nabizi jednu ze trech moznosti: electronics, car nebo reality
function sliderInit(options) {

    // na strance mame tri bloky pro zobrazeni aktualnich hodnot, ktere mame nastavene pomoci slideru
    // id bloku: #amount, #repayment-period a #procentual-repayment


    /* ------------------------------------------------------------------------------------------------------- */
    /* ------------------------------------------------------------------------------------------------------- */
    /* ----------------------------------  #AMOUNT SLIDER  --------------------------------------------------- */
    /* ------------------------------------------------------------------------------------------------------- */

    //inicializuje se slider #amount-slider s nastavenim, ktere jsme dostali na zaklade hodnoty #select
    // popis toho jak se zjistuje options je ukazan v metode setRepaymentOptions();
    $("#amount-slider").slider(options.amount);

    // pomoci $("#amount-slider").slider("value") zjistujeme aktualni hodnotu, kterou ma slider a prirazime do amountVal
    var amountVal = $("#amount-slider").slider("value");

    // zjistenou amountVal hodnotu nacitame do bloku #amount pomoci funkci .text()
    $("#amount").text(amountVal);

    // slider ve jquery ui ma metody, ktere muzeme pouzit pro evidenci jednotlivych udalosti, ktere vznikaji behem interakci s uzivatelem
    // metoda slide umoznuje zjistit, jestli uzivatel zmenil hodnotu slideru
    $("#amount-slider").slider("option", {

        // jakmile uzivatel zmeni hodnotu slideru tak vyvola se funkce, ktera ma argumenty event a ui
        // event rika jaka akce prave probehla
        // ui je object s hodnotami, ktere ma slider.
        // potrebujeme jenom ui.value, aby zjistit jakou hodnotu ma slider po zmene
        slide: function (event, ui) {

            // potrebujeme jenom ui.value, aby zjistit jakou hodnotu ma slider po zmene
            // zjistenou hodnotu ui.value nacitame do bloku #amount pomoci funkci .text()
            $("#amount").text(ui.value);

            // nastavujeme novou hodnotu pro slider #amount-slider
            $("#amount-slider").slider("value", ui.value);

            // dale volame funkci ktera vypocita vysledek a nastavuje vyslednou hodnotu pro zobrazeni na strance
            calculateResult();
        }
    });


    /* ------------------------------------------------------------------------------------------------------- */
    /* ------------------------------------------------------------------------------------------------------- */
    /* ----------------------------------  #REPAYMENT PERIOD SLIDER  ----------------------------------------- */
    /* ------------------------------------------------------------------------------------------------------- */


    //inicializuje se slider #repayment-period-slider s nastavenim? ktere jsme dostali na zaklade hodnoty #select
    // popis toho jak se zjistuje options je ukazan v metode setRepaymentOptions();
    $("#repayment-period-slider").slider(options.repayment_period);

    // pomoci $("#repayment-period-slider").slider("value") zjistujeme aktualni hodnotu, kterou ma slider a prirazime do repaymentPeriodVal
    var repaymentPeriodVal = $("#repayment-period-slider").slider("value");

    // nastavujeme editedSlider na hodnotu repayment period jako defaultni
    editedSlider = "repaymentPeriod";

    // zjistenou repaymentPeriodVal hodnotu nacitame do bloku #amount pomoci funkci .text()
    $("#repayment-period").text(repaymentPeriodVal);

    // metoda pro zobrazeni urcitych koncovek pro slovo mesic.
    // 1 mesic, 2-3-4 mesice, pro 5 - mesicu.
    setRepaymentPeriodLabel(repaymentPeriodVal);

    // slider ve jquery ui ma metody, ktere muzeme pouzit pro evidenci jednotlivych udalosti, ktere vznikaji behem interakci s uzivatelem
    // metoda slide umoznuje zjistit, jestli uzivatel zmenil hodnotu slideru
    $("#repayment-period-slider").slider("option", {

        // jakmile uzivatel zmeni hodnotu slideru tak vyvola se funkce, ktera ma argumenty event a ui
        // event rika jaka akce prave probehla
        // ui je object s hodnotami, ktere ma slider.
        slide: function (event, ui) {


            // potrebujeme jenom ui.value, aby zjistit jakou hodnotu ma slider po zmene
            // zjistenou hodnotu ui.value nacitame do bloku #repayment-period pomoci funkci .text()
            $("#repayment-period").text(ui.value);

            // nastavujeme novou hodnotu pro slider #repayment-period-slider
            $("#repayment-period-slider").slider("value", ui.value);



            // prirazime hodnotu repaymentPeriod do editedSlider
            // pri vypocetnu vysledni hodnoty budeme pouzivat hodnotu ze slideru #repayment-period-slider
            editedSlider = "repaymentPeriod";

            // metoda pro zobrazeni urcitych koncovek pro slovo mesic.
            // 1 mesic, 2-3-4 mesice, pro 5 a vice - mesicu.
            // ma jeden arument ui.value - hodnota, kterou slider #repayment-period-slider
            setRepaymentPeriodLabel(ui.value);

            // dale volame funkci ktera vypocita vysledek a nastavuje vyslednou hodnotu pro zobrazeni na strance
            calculateResult();
        }
    });


    /* ------------------------------------------------------------------------------------------------------- */
    /* ------------------------------------------------------------------------------------------------------- */
    /* ----------------------------------  #PROCENTUAL REPAYMENT SLIDER  ------------------------------------- */
    /* ------------------------------------------------------------------------------------------------------- */


    //inicializuje se slider #procentual-repayment-slider s nastavenim? ktere jsme dostali na zaklade hodnoty #select
    // popis toho jak se zjistuje options je ukazan v metode setRepaymentOptions();
    $("#procentual-repayment-slider").slider(options.procentual_repayment);

    // pomoci $("#procentual-repayment-slider").slider("value") zjistujeme aktualni hodnotu, kterou ma slider a prirazime do procentualRepayment
    var procentualRepayment = $("#procentual-repayment-slider").slider("value");

    // zjistenou procentualRepayment hodnotu nacitame do bloku #procentual-repayment pomoci funkci .text()
    $("#procentual-repayment").text(procentualRepayment);

    // slider ve jquery ui ma metody, ktere muzeme pouzit pro evidenci jednotlivych udalosti, ktere vznikaji behem interakci s uzivatelem
    // metoda slide umoznuje zjistit, jestli uzivatel zmenil hodnotu slideru
    $("#procentual-repayment-slider").slider("option", {

        // jakmile uzivatel zmeni hodnotu slideru tak vyvola se funkce, ktera ma argumenty event a ui
        // event rika jaka akce prave probehla
        // ui je object s hodnotami, ktere ma slider.
        slide: function (event, ui) {

            // potrebujeme jenom ui.value, aby zjistit jakou hodnotu ma slider po zmene
            // zjistenou hodnotu ui.value nacitame do bloku #procentual-repayment-period pomoci funkci .text()
            var procentualRepayment = $("#procentual-repayment").text(ui.value);

            // nastavujeme novou hodnotu pro slider #procentual-repayment-slider
            $("#procentual-repayment-slider").slider("value", ui.value);

            // prirazime hodnotu procentualRepayment do editedSlider
            // pri vypocetnu vysledni hodnoty budeme pouzivat hodnotu ze slideru #procentual-repayment-slider
            editedSlider = "procentualRepayment";

            // dale volame funkci ktera vypocita vysledek a nastavuje vyslednou hodnotu pro zobrazeni na strance
            calculateResult();
        }
    });


    // volame funkci ktera vypocita vysledek a nastavuje vyslednou hodnotu pro zobrazeni na strance
    calculateResult();


}

// vstupni bod pro inicializci slideru a selectBoxu pomoci jquery pluginu niceSelect
$(document).ready(function () {

    // inicializce selectBoxu pomoci jquery pluginu niceSelect
    $('#select').niceSelect();

    // inicializace slideru. Defaultni pouzivame hodnoty prednastavene pro Electronics.
    sliderInit(options.electronics);

});