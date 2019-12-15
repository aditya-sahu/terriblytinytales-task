function getWordCount(str) {
    str = str.replace(/\W+[ ]/g, ' ');
    var words = str.split(' ');
    var ctr = words.length;
    return ctr;
}

function getFreq(str) {
    var hashMap = {};
    str = str.replace(/\W+[ ]/g, ' ');
    var words = str.split(' ');
    words.forEach(word => {
        if(!hashMap[word]) {
            hashMap[word] = 1;
        }
        else hashMap[word]++;
    });
    return hashMap;
};

function getNOcurrences(N,dict) {
    // Create items array
    var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
    });
    
    // Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    
    // Create a new array with only the first N items
    var finalArr = items.slice(0, N)
    return finalArr;
}

exports.findOccurences = (req, res) => {
    const request = require('request');
    const N = req.query.userInput;
    // Processing takes place here.

    // fetch the text file from URL: http://terriblytinytales.com/test.txt
    
    request.get('http://terriblytinytales.com/test.txt', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            
            //const data = body;
            const data = "This is a random generated sentence which does not seem random at all all seems all all is a random which.";
            
            // Check if words are more than the desired input. 
            var wordsCount = getWordCount(data);
            if(wordsCount < N ) {
                console.log("Not enough words, as desired by input; Displaying maximum data.");
            }

            // Count occurences
            var dict = getFreq(data);
            // Sort the occurences
            var finalArr = getNOcurrences(N,dict);
            var htmlString = "<html><body>";
            htmlString = htmlString.concat("<table border='1'><th>Word</th><th>Frequency</th>");
            for(var i = 0; i < N ; i++) {
                htmlString = htmlString.concat("<tr>");
                htmlString = htmlString.concat("<td>"+finalArr[i][0]+"</td>");
                htmlString = htmlString.concat("<td>"+finalArr[i][1]+"</td>");
                htmlString = htmlString.concat("</tr>");
            }
            htmlString = htmlString.concat("</table></body></html>");
            console.log(htmlString);
            res.write(htmlString);
            res.end();
            // res.send(finalArr);
        }
    });
    
};