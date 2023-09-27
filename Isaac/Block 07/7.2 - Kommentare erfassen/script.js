const HOST = "http://10.71.4.34";

 

      function handleDomContenLoaded() {

        const form = document.getElementById('comment-form');

        form.addEventListener('submit', handleFormSubmit);

      }

 

      async function handleFormSubmit(event) {

        event.preventDefault();

        const challengeResponse = await fetch(`${HOST}/challenges/1`, {

          method: "POST"});

        const token = challengeResponse.headers.get('Authorization');

        const username = document.getElementById('username').value;

        const message = document.getElementById('message').value;

        console.log(

          `Going to send Username: ${username} message: ${message} with token: ${token}`

        );

 

        const jsonToSend = JSON.stringify({

          username: username,

          message: message});

 

        await fetch(`${HOST}/comments` ,{

          method: "POST",

          headers: {

            Authorization: token,

            "Content-Type": "application/json"

          },

          body: jsonToSend,

        });

      }

 

      document.addEventListener("DOMContentLoaded", handleDomContenLoaded);