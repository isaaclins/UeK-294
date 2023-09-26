document
  .getElementById('commentForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
      // Send a POST request to /challenges/1 to get the token
      const responseToken = await fetch('http://10.71.4.34/challenges/1', {
        method: 'POST',
      });
      const dataToken = await responseToken.json();
      
      // Extract the token from the response
      const token = dataToken.token;

      // Create the comment object
      const comment = {
        message: document.getElementById('message').value,
        username: document.getElementById('username').value,
      };

      // Send a POST request to /comments with the token and comment data
      const responseComment = await fetch('http://10.71.4.34/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      });
      
      const dataComment = await responseComment.json();

      // Display the comment result
      document.getElementById('commentResult').innerHTML = `Kommentar hinzugefügt: ${dataComment.message}`;
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Kommentars:', error);
      document.getElementById('commentResult').innerHTML =
        'Fehler beim Hinzufügen des Kommentars.';
    }
  });
