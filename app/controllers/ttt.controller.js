function getFreq(str) {
    
    // This will contain Key as the Word and respective value as their occurrence
    var hashMap = {};

    // Consider newline, tabspaces as single whitespace
    str = str.replace(/([\n]|[\t]|[\f]|[\v]|[\r])+/gi, ' ');

    // Treat Common Punctuation as single whitespace
    str = str.replace(/([?]|[,]|[.]|[;]|[!])+[\s]/gi, ' ');

    // Get rid of quotations (only at the start or end of the word)
    str = str.replace(/(["]|[']|[’])+[\s]/gi, ' ');
    str = str.replace(/[\s]+(["]|[']|[’])/gi, ' ');

    // Different Cases with Same spelling should be considered as one word.
    str = str.toLowerCase();
    var words = str.split(' ');
    words.forEach(word => {
        if(!hashMap[word]) {
            hashMap[word] = 1;
        }
        else hashMap[word]++;
    });
    return hashMap;
};

function getNOccurrences(N,dict) {
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

exports.findOccurrences = (req, res) => {
    const request = require('request');
    
    console.log('request has been received to the controller.');
    
    // Get the input number
    N = req.query.userInput;

    /* Processing takes place now onwards.
    */
   var bIsDigit = RegExp(/^\d+$/).test(N);
   console.log(bIsDigit);
    if( !bIsDigit || N <= 0 ) {
        res.send({status:400, message:'Bad Request'});
        res.end();
        return;
    }
    // fetch the text file from URL: https://terriblytinytales.com/test.txt
    request.get('https://terriblytinytales.com/test.txt', function (error, response, body) {
        console.log(error);
        
        if (!error && response.statusCode == 200) {
            
            const data = body;
            //const data = "This is a random generated sentence which does not seem random at all all seems all all is a random which.";
            
            // Count occurrences
            var dict = getFreq(data);

            // Check if words are more than the desired input. 
            var wordsCount = Object.keys(dict).length;
            if(wordsCount < N ) {
                console.log("Not enough words, as desired by input; Displaying maximum data possible.");
            }
            
            // Sort the occurrences in decreasing order and slice the array so that only N words are stored.
            var finalArr = getNOccurrences(N,dict);
            res.send({status:200, message: finalArr});
        }
        else {
            res.send({status:500, message:'Error contacting server.'});
        }
    });
};