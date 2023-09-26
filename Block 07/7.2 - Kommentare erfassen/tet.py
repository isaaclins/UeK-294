import requests
message = "test123"
response = requests.post("http://10.71.4.34/challenges/1")
token = response.headers.get("Authorization")
payload = {
              "message": message,
                "username": "test321"
            }
headers = {"Authorization": token}
comment_response = requests.post("http://10.71.4.34/comments", json=payload, headers=headers)
