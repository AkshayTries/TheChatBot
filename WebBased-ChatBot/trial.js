var x=0
function check_if_word_exists(word) {
    const url = "https://api.wordnik.com/v4/word.json/" + word + "/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    $.ajax({
        type: "GET",
        url: url
    }).done(function (result) {
        console.log("word exists");
        x=0
    }).fail(function () {
        x=1
        console.log("word does not exist");
    });
}

check_if_word_exists("how")
console.log(x)