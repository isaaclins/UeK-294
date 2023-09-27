import requests
message= 'hello'
username= '''



'''
response = requests.post("http://10.71.4.34/challenges/1")
token = response.headers.get("Authorization")
payload = {
  "message": message, 
  "username": username
  }
headers = {"Authorization": token}
comment_response = requests.post("http://10.71.4.34/comments", json=payload, headers=headers)
