var array = [['RADIASIYA','Hər hansı bir cismin elektromaqnit dalğaları şüalandırması; cismin buraxdığı elektromaqnit şüa enerjisi'],['FACIƏ','Dəhşətli, ağır nəticəli hadisə, fəlakət, müsibət, bədbəxtlik'],['POLIQON','Hərbi təlim, habelə müxtəlif silahların sınaqdan keçirilməsi üçün böyük sahə'], ['TABUT','Cənazəni qoymaq üçün iri qutu.'], ['GÜNBƏZ', 'Yarımkürə şəklində bina damı; qübbə'], ['NƏFƏSLIK','Otağın havasını dəyişdirmək üçün pəncərədə kiçik göz'], ['ABSURD','Boş və mənasız sözsöhbət, cəfəngiyat'], ['TÖHMƏT','Danlama, danlayış, məzəmmət, danlaq'], ['TÖHFƏ','Hədiyyə, bəxşiş, ərməğan, pay'], ['PƏHRIZ','Müəyyən yemək rejimi'], ['ÜMID','Arzu edilən bir şeyin ola biləcəyinə inanma və bu inamdan doğan daxili fərəh, xatircəmlik hissi; güman.']]

var chooseWord = function(){

    var i = Math.floor(Math.random() * array.length)

    var chosenWord = array[i]

    var index = array.indexOf(array[i]);
    if (index > -1) {
        array.splice(index, 1);
        // console.log(array.length);
        // if(array.length == 0){
        //     console.log("Array ended");
        //     clearInterval(timer)
        // }
    }

    return chosenWord
}


// var timer = setInterval(function(){
//     chooseWord()
// }, 2000)


module.exports = chooseWord

