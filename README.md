"# terriblytinytales-task" 
# TerriblyTinyTales Task

## Objective

To create a website which takes a number N from the user and after submitting the number, the user should be displayed with a list of N words that are most frequently occurring in the [text file hosted on this website](https://terriblytinytales.com/test.txt).

## Requirements

To run the website, there are no requirements as such because the website is hosted on Heroku cloud platform. [Click here to redirect](https://terriblytinytalestask.herokuapp.com/)

## Technologies Used

### Front-end Technologies
* Languages: HTML5
* Frameworks
  * CSS
  * Bootstrap v4
  * AJAX used to communicate with back-end

### Back-end Technologies
* Languages: Javascript
* Frameworks/NPM Modules
  * Express.js @express@4.16.4
  * request
  * body-parser
  * path

## Architecture

#### Request:
index.html -- (AJAX Call) --> index.js -> routes/ttt.route.js -> controllers/ttt.controller.js -> findOccurrences()

#### Response:
findOccurrences() -> controllers/ttt.controller.js -> routes/ttt.route.js -> index.js -> index.html -> AJAX Response

## Modules

### Working of Front-end

1. Webpage having the following elements
  * Header
  * Footer
  * Side Navigation Bar

2. Consists of HTML Form
  * Input Item: Inputs only value greater than 0
  * Submit Button: When the form is submitted, processing begins and results is obtained below
  * Result Table: After processing data, the result is diplayed in a tabular form
  
### Working of Back-end

1. Web API
  * Homepage which displays landing webpage
  * Contains GET type of API which takes the user input as the parameter and returns the result
2. Algorithm
    1. Fetch the text file by creating a request to URL
    2. If successful, 
        1. Check if total words are more than the user input
        2. Count frequency of each word and store into a HashMap
        3. The frequency is counted as 
            * Consider newline, tabspaces, vertical spaces, etc. as single whitespace
            * Treat Common Punctuation as single whitespace
            * Get rid of quotations (only at the start or end of the word)
            * Different Cases with Same spelling should be considered as one word.
            * Split the words into an array
            * If word has a key
                * Increment by one
            * Else create the key with value 1.
        4. Sort the hashmap by their values in Decreasing order
        5. Slice the array to only N (desired input)
        6. Return the final result
    3. Else Return internal server error (500)

## Results

### Screenshots: 
landing page:
* ![alt text][landing page]

Test input "3":
* ![alt text][Test input "3"]

Test input "-9":
* ![alt text][Test input "-9"]

[landing page]: https://github.com/aditya-sahu/terriblytinytales-task/blob/master/test_files/end%20to%20end/1.JPG "Landing Page"
[Test input "3"]: https://github.com/aditya-sahu/terriblytinytales-task/blob/master/test_files/end%20to%20end/2.JPG "Test Input 3"
[Test input "-9"]: https://github.com/aditya-sahu/terriblytinytales-task/blob/master/test_files/end%20to%20end/3.JPG "Test Input -9"

## Test Cases

```
{
	"info": {
		"_postman_id": "9730eb30-2f6b-4221-a25f-b1d12b104449",
		"name": "ttt-backend-test-collection-postman",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Get N Occurrences",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://terriblytinytalestask.herokuapp.com/findOccurrences?userInput=4",
					"protocol": "https",
					"host": [
						"terriblytinytalestask",
						"herokuapp",
						"com"
					],
					"path": [
						"findOccurrences"
					],
					"query": [
						{
							"key": "userInput",
							"value": "4"
						}
					]
				},
				"description": "GET Web API:\n1. Takes a number N as input\n2. Processes a text file hosted on https://terriblytinytales.com/test.txt\n3. Returns top N frequent occurences"
			},
			"response": []
		},
		{
			"name": "Get N Occurrences 2",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://terriblytinytalestask.herokuapp.com/findOccurrences?userInput=10",
					"protocol": "https",
					"host": [
						"terriblytinytalestask",
						"herokuapp",
						"com"
					],
					"path": [
						"findOccurrences"
					],
					"query": [
						{
							"key": "userInput",
							"value": "10"
						}
					]
				},
				"description": "GET Web API:\n1. Takes a number N as input\n2. Processes a text file hosted on https://terriblytinytales.com/test.txt\n3. Returns top N frequent occurences"
			},
			"response": []
		},
		{
			"name": "Get N Occurrences 3",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://terriblytinytalestask.herokuapp.com/findOccurrences?userInput=50",
					"protocol": "https",
					"host": [
						"terriblytinytalestask",
						"herokuapp",
						"com"
					],
					"path": [
						"findOccurrences"
					],
					"query": [
						{
							"key": "userInput",
							"value": "50"
						}
					]
				},
				"description": "GET Web API:\n1. Takes a number N as input\n2. Processes a text file hosted on https://terriblytinytales.com/test.txt\n3. Returns top N frequent occurences"
			},
			"response": []
		},
		{
			"name": "Get N Occurrences 4 (negative)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://terriblytinytalestask.herokuapp.com/findOccurrences?userInput=-1",
					"protocol": "https",
					"host": [
						"terriblytinytalestask",
						"herokuapp",
						"com"
					],
					"path": [
						"findOccurrences"
					],
					"query": [
						{
							"key": "userInput",
							"value": "-1"
						}
					]
				},
				"description": "GET Web API:\n1. Takes a number N as input\n2. Processes a text file hosted on https://terriblytinytales.com/test.txt\n3. Returns top N frequent occurences"
			},
			"response": []
		},
		{
			"name": "Get N Occurrences 5 (negative)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://terriblytinytalestask.herokuapp.com/findOccurrences?userInput=-100",
					"protocol": "https",
					"host": [
						"terriblytinytalestask",
						"herokuapp",
						"com"
					],
					"path": [
						"findOccurrences"
					],
					"query": [
						{
							"key": "userInput",
							"value": "-100"
						}
					]
				},
				"description": "GET Web API:\n1. Takes a number N as input\n2. Processes a text file hosted on https://terriblytinytales.com/test.txt\n3. Returns top N frequent occurences"
			},
			"response": []
		},
		{
			"name": "Get N Occurrences 6 (negative)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://terriblytinytalestask.herokuapp.com/findOccurrences?userInput=-500000",
					"protocol": "https",
					"host": [
						"terriblytinytalestask",
						"herokuapp",
						"com"
					],
					"path": [
						"findOccurrences"
					],
					"query": [
						{
							"key": "userInput",
							"value": "-500000"
						}
					]
				},
				"description": "GET Web API:\n1. Takes a number N as input\n2. Processes a text file hosted on https://terriblytinytales.com/test.txt\n3. Returns top N frequent occurences"
			},
			"response": []
		},
		{
			"name": "Get N Occurrences 7 (negative)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://terriblytinytalestask.herokuapp.com/findOccurrences?userInput=999",
					"protocol": "https",
					"host": [
						"terriblytinytalestask",
						"herokuapp",
						"com"
					],
					"path": [
						"findOccurrences"
					],
					"query": [
						{
							"key": "userInput",
							"value": "999"
						}
					]
				},
				"description": "GET Web API:\n1. Takes a number N as input\n2. Processes a text file hosted on https://terriblytinytales.com/test.txt\n3. Returns top N frequent occurences"
			},
			"response": []
		},
		{
			"name": "Get N Occurrences 8 (negative)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://terriblytinytalestask.herokuapp.com/findOccurrences?userInput=999",
					"protocol": "https",
					"host": [
						"terriblytinytalestask",
						"herokuapp",
						"com"
					],
					"path": [
						"findOccurrences"
					],
					"query": [
						{
							"key": "userInput",
							"value": "999"
						}
					]
				},
				"description": "GET Web API:\n1. Takes a number N as input\n2. Processes a text file hosted on https://terriblytinytales.com/test.txt\n3. Returns top N frequent occurences"
			},
			"response": []
		}
	],
	"protocolProfileBehavior": {}
}
```
