timestamp API which converts url query to a timestamp ../api/:date?
if date is in a format that can be parsed by the Date object, or if it is a UNIX timestamp, the API will return a JSON object with the unix code and the date in a string in the format: "Sat, 10 Feb 1996 00:00:00 GMT"
if there is no date provided, the API will return an object with the current date.
if the date is in the wrong format, the API will return an error
