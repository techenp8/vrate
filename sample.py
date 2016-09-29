import os
import json
import requests
import base64

#globals
vrate_api = "https://api2.vrate.net/nudityrating"
vrate_headers = {"X-Auth":"<enter authorization key, contact info@vrate.net",'Content-Type':'application/json'}

if __name__ == "__main__":
    #***** Analyze an image on a public url and print result ******
    image_url = "http://30.media.tumblr.com/tumblr_m20ljbf2wy1r3e62yo1_500.jpg"
    image = requests.get(image_url).content #download image
    encoded_string = base64.b64encode(image) #convert to base64
    vrate_payload = json.dumps({"payload":encoded_string}) #create the input payload for vRate
    response = json.loads(requests.post(vrate_api,headers=vrate_headers,data=vrate_payload).content) #call api & get rating
    print response


    #***** Analyze a local image and print result *****************
    file_img = 'sample.jpg'
    with open(file_img, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    vrate_payload = json.dumps({"payload":encoded_string}) #create the input payload for vRate
    response = json.loads(requests.post(vrate_api,headers=vrate_headers,data=vrate_payload).content) #call api & get rating
    print response

