# vRate nudity detection API
see https://vrate.net for a live demo 

vRate - Media rating API applies the latest advances in computer vision and artificial intelligence to detect nudity, pornography and racy/provocative content in images.  Integrate this API into your application to instantly moderate images and protect your brand

## Input
API accepts a JSON input payload containing any one of the 2 options below:
+ Image encoded as a string in Base64 format
+ Public url to image

The JSON input has to have a single key-value pair called "Payload".  
#### Example of Input
    {"payload":"/9j/4AAQSkZJRgABAQAAAQABAAD//g......"}
    or
    {"payload":"https://vrate.net/images/vratelogo3.45d93685.png"}

## Output
The output returned by the API contains the rating of the image represented as below:
RatingCode:  Unique rating code
RatingDescription: Description of rating
Confidence: The confidence of the generated rating

The rating code and description can be interpreted as follows:
V01: Safe, OK - Implies that inappropriate content was not detected in the image
V02: Provocative, Racy - Image may contain subjects with skimpy clothing, partial nudity, excessive skin exposure or provocative poses
V03: Adult, Nudity - Image may contain explicit nudity, pornography or NSFW content

#### Example of output on successful execution:
    {"RatingCode": "V02",
    "RatingDescription": "Racy, Provocative",
    "Confidence": "High"}

The Confidence scores are High, Medium & Low.  A rating with high confidence typically means that there is a high probability of the generated rating.

### Error handling
The API returns a http 400 or 500 error if invalid input is detected or an application error occurs.  The error is returned as a JSON object of the below format
#### Example of output when error occurs:
    {"ErrorCode":  "400",
    "ErrorMsg":  "Url is unreachable or invalid"}

Questions? Contact info@vrate.net 
