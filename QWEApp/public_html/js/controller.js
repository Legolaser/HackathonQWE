/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var people = [{name:"Lukáš Kadlec", phone:"372 207 745", email:"LukasKadlec@inbound.plus", gender:"Male", height:"177", bday:"March 11, 1933"},
              {name:"Jitka Žáková", phone:"494 761 365", email:"JitkaZakova@inbound.plus", gender:"Female", height:"156", bday:"May 13, 1981"}];

var lastDetail = 0;

$("#page1").ready(function() {
//    refreshList();
    
});

//var refreshList = function() {
//    var tag = '<ul data-role="listview"  data-inset="true" data-filter="true" data-autodividers="true">';
//    for (var i = 0; i < people.length; i++) {
//        tag += '<li><a href="#page2" data-transition="slide" onclick="prepareDetail('+ i +')"><span id="user'+ i +'">'+ people[i].name +'</span></a></li>';
//    }
//    tag += '</ul>';
//    $("#contacts").append(tag);
//    
//    var $ul = $('<ul data-role="listview" id="contacts" data-inset="true" data-filter="true" data-autodividers="true">');
//    for (i = 0; i < people.length; i++) {
//        $ul.append('<li><a href="#page2" data-transition="slide" onclick="prepareDetail('+ i +')"><span id="user'+ i +'">'+ people[i].name +'</span></a></li>');
//    }
//    $ul.appendTo('#results');
//};

var prepareDetail = function(i) {
    
    $("#name").text(people[i].name);
    $("#phone").text(people[i].phone);
    $("#email").text(people[i].email);
    $("#gender").text(people[i].gender);
    $("#height").text(people[i].height + " cm");
    $("#bday").text(people[i].bday);
    lastDetail = i;
};

var prepareEdit = function() {
    var i = lastDetail;
    $("#nameIn").val(people[i].name);
    $("#phoneIn").val(people[i].phone);
    $("#emailIn").val(people[i].email);
    //$("[name='radio-choice-gender']").val(people[i].gender);
    //$("input[name=radio-choice-gender]:radio").val(people[i].gender);
    if (people[i].gender === "Male") {
        //$("#radio-choice-female").removeAttr('checked');
        $("#radio-choice-male").attr('checked', 'checked');
        //$("#radio-choice-female").attr('checked', false);
    } else {
        //$("#radio-choice-male").removeAttr('checked');
        $("#radio-choice-female").attr('checked', 'checked');
        //$("#radio-choice-male").attr('checked', false);
    }
    $("#heightIn").val(parseInt(people[i].height));
    $("#bdayIn").val(people[i].bday);
};

var addNew = function() {
    people[people.length] = {name:$("#nameIn").val(), phone:$("#phoneIn").val(), email:$("#emailIn").val(), gender:$("#genderIn").val(), height:$("#heightIn").val(), bday:$("#bdayIn").val()};
    $("#contacts").append('<li><a href="#page2" data-transition="slide" onclick="prepareDetail('+ (people.length-1) +')"><span id="user'+ i +'">'+ people[(people.length-1)].name +'</span></a></li>');
    //$('#contacts').load(document.URL +  '#contacts');
    $("#contacts").listview("refresh");
};

//$("#page1").ready(function() {
//    console.log( "ready1!" );
//});
//$("#page2").ready(function() {
//    console.log( "ready2!" );
//});

//$(document).ready(function() {
//    var date = $(id).val();
//    $("#out").text(date);
//});


