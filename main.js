  //Set up an associative array
    //The keys represent the size of the cake
    //The values represent the cost of the cake i.e A 10" cake cost's $35
    var gun_model_prices = new Array();
    gun_model_prices["gun_model_1"] = 20;
    gun_model_prices["gun_model_2"] = 25;
    gun_model_prices["gun_model_3"] = 35;
    gun_model_prices["gun_model_4"] = 75;

    //Set up an associative array 
    //The keys represent the filling type
    //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
    //We use this this array when the user selects a filling from the form
    var gun_accesories_prices = new Array();
    gun_accesories_prices["gun_acc_0"] = 0;
    gun_accesories_prices["gun_acc_1"] = 5;
    gun_accesories_prices["gun_acc_2"] = 5;
    gun_accesories_prices["gun_acc_3"] = 7;
    gun_accesories_prices["gun_acc_4"] = 8;
    

    function getmodelPrice() {
        var gun_model_prices_var = 0;
        var theForm = document.forms["gunform"];
        var selectedCake = theForm.elements["gun_model"];
        for (var i = 0; i < selectedCake.length; i++) {
            if (selectedCake[i].checked) {
                gun_model_prices_var = gun_model_prices[selectedCake[i].value];
                break;
            }
        }
        return gun_model_prices_var;
    }
    
// function getAttribute(){
//    var dataAttri= $(this).attr("data-id");
//     console.log(dataAttri)
// }
function getModelDescription() {
    var gun_model_description = "";
    var theForm = document.forms["gunform"];
    var selectedModel = theForm.elements["gun_model"];
    for (var i = 0; i < selectedModel.length; i++) {
        if (selectedModel[i].checked) {
            var gun_model_ItemName = selectedModel[i].getAttribute("name");
            console.log(gun_model_ItemName);

            gun_model_description = selectedModel[i].getAttribute("description");
            console.log(gun_model_description);

            var gun_model_Price = selectedModel[i].getAttribute("targetvalue");
            var gun_model_Price_int = parseInt(gun_model_Price);
            console.log(gun_model_Price_int);
            var gun_model_qty = 2;
            var gun_model_value = selectedModel[i].getAttribute("value");
            console.log(gun_model_value);

            gun_accesories_prices = getgun_accesoriesPrice();
            gun_accesories_prices_int = parseInt(gun_accesories_prices);
            console.log(gun_accesories_prices_int);

            var gun_model_TotalPrice = parseInt(gun_accesories_prices) + parseInt(gun_model_Price);
            console.log(gun_model_TotalPrice);

            var divobj = document.getElementById('dj-table-body');
            divobj.innerHTML = " <tr class='item - row'>";
            divobj.innerHTML += "<td class='item - name'>" + gun_model_ItemName + "</td>";
            divobj.innerHTML += "<td class='description'>" + gun_model_description + "</td>";
            divobj.innerHTML += "<td><span class='sale - price'>" + gun_model_Price_int + "</span></td>";
            divobj.innerHTML += "<td><span class='qty'>" + gun_model_qty + "</span></td>";
            divobj.innerHTML += "<td><span class='sale-price'>" + gun_model_Price_int + "</span></td>";
            divobj.innerHTML += "<td><span class='price' > " + (gun_model_Price_int * gun_model_qty) + "</span ></td > ";
            break;
        }
    }
    return gun_model_description;
}


    //This function finds the filling price based on the 
    //
    //drop down selection
    function getgun_accesoriesPrice() {
        var gun_accesories_prices_var = 0;
        //Get a reference to the form id="gunform"
        var theForm = document.forms["gunform"];
        //Get a reference to the select id="filling"
        var selectedFilling = theForm.elements["gun_accesories"];

        //set cakeFilling Price equal to value user chose
        //For example filling_prices["Lemon".value] would be equal to 5
        gun_accesories_prices_var = gun_accesories_prices[selectedFilling.value];

        //finally we return cakeFillingPrice
        return gun_accesories_prices_var;
    }

    function calculateTotal() {
        //Here we get the total price by calling our function
        //Each function returns a number so by calling them we add the values they return together
        // var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();
        var cakePrice = 0;
        cakePrice = getmodelPrice() + getgun_accesoriesPrice();
        //display the result
        var divobj = document.getElementById('totalPrice');
        divobj.style.display = 'block';
        divobj.innerHTML = "Total Price For the Cake $" + cakePrice;
        document.getElementById('total-value').innerHTML=cakePrice;
        document.getElementById('due-value').innerHTML=cakePrice;
    }
    function AmountPaid(){
        var cakePrice = 0;
        cakePrice = getmodelPrice() + getgun_accesoriesPrice();
        var paidAmount = 0;
        var paidAmount = document.getElementById('TakenAmount');
        var remainingAmount = cakePrice-parseInt(paidAmount);
       document.getElementById('due-value').innerHTML= parseInt(remainingAmount);
    }

    
    function hideTotal() {
        var divobj = document.getElementById('totalPrice');
        divobj.style.display = 'none';
    }

    $('fieldset.field_area').each(function () {
        var radio_field = $(this).find('input[type="radio"]');
        var dj_table_body = document.getElementById('dj-table-body');
        radio_field.change(function () {
            var i
            for (i = 0; i < radio_field.length; i++) {
                radio_field[i].onclick = function () {
                    radio_field.append += this.dataset.price;
                }
            }
        });
    });
    
// function checkButton() {

//     var getSelectedValue = $(this.checked);
//     var getSelectedValue_jq = $(this.checked);
//     var getSelectedValue_name = getSelectedValue_jq.attr('name');
//     // var getSelectedValue_value = getSelectedValue_jq.attr('value');

//     console.log(getSelectedValue_name);
//     // console.log(getSelectedValue_value)
//     if (getSelectedValue != null) {
//         var getSelectedValue_name = $(this).attr('description');
//         console.log(getSelectedValue_name);
//         // console.log(getSelectedValue_value)
//         //document.getElementById("dj-table-body").innerHTML
//         // += '<tr class="item-row '+getSelectedValue_jq+'"><td class="item-name">'+radio_value+'</td><td class="description">'+getSelectedValue.description+'</td><td><span class="sale-price">'+getSelectedValue.price+'</span></td><td><span class="qty">'+getSelectedValue.qty+'</span></td><td><span class="price">'+getSelectedValue.price+'</span></td></tr>'
//         ;
//     }
//     else {
//         document.getElementById("error").innerHTML
//             = "*You have not selected any season";
//     }
// }
function checkButton() {

    var getSelectedValue = $(this.checked);
    var getSelectedValue_jq = $(this.checked);
    var getSelectedValue_name = getSelectedValue_jq.attr('description');
    console.log(getSelectedValue_name);

    if (getSelectedValue != null) {
        var getSelectedValue_name = $(this).attr('description');
        console.log(getSelectedValue_name);

    }
    else {
        document.getElementById("error").innerHTML
            = "*You have not selected any season";
    }

}

function checkButton() {

    var getSelectedValue = $(this.checked);
    var getSelectedValue_name = getModelDescription();
    console.log();
   
    if (getSelectedValue != null) {
        var getSelectedValue_name = $(this).attr('description');
        console.log(getSelectedValue_name);
        
    }
    else {
        document.getElementById("error").innerHTML
            = "*You have not selected any season";
    }

}


    function inputRemoveDuplicates() {
        var found = {};
        $('.gun_model').each(function () {
            var $this = $(this);
            if (found[$this.attr('value')]) {
                $this.remove();
            } else {
                found[$this.attr('value')] = true;
            }
        });
    };

    function inputRemoveDuplicates_acc() {
        var found = {};
        $('.gun_accesories').each(function () {
            var $this = $(this);
            if (found[$this.attr('value')]) {
                $this.remove();
            } else {
                found[$this.attr('value')] = true;
            }
        });
    };

    $("button#print_invoice").on("click", function () {
        var divContents = $("#page-wrap").html();
        var printWindow = window.open('', '', 'height=400,width=800');
        printWindow.document.write('<html><head><title>DIV Contents</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(divContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    });
