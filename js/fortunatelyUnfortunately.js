  // Define the openings and descriptions
  const openings = ['Fortunately', 'Unfortunately', 'But then', 'Suddenly', 'In a surprising twist', 'Against all odds', 'Little did they know', 'With a sudden realization', 'To their astonishment', 'Just when they thought it was over', 'Meanwhile', 'Eventually', 'As a result', 'In the end', 'On the contrary', 'Consequently', 'Surprisingly', 'Eventually', 'Ironically', 'Eventually', 'In the midst of', 'In the blink of an eye', 'Out of nowhere', 'Without warning', 'As luck would have it', 'In the nick of time', 'To their dismay', 'Undoubtedly', 'Inexplicably', 'Regrettably', 'In retrospect', 'Miraculously', 'Alas', 'In the distance', 'Strangely', 'All of a sudden', 'Remarkably', 'Inevitably', 'To their relief', 'Consequently', 'As if on cue', 'Unbelievably', 'True to form', 'Unbeknownst to them', 'In the heat of the moment', 'Without hesitation', 'In the aftermath', 'Eerily', 'Without a doubt', 'In the grand scheme of things'];

  const descriptions = ['something good happens', 'something bad happens', 'something different happens', 'something unexpected happens', 'something unexpected happens', 'overcoming difficulties', 'a surprising discovery', 'suddenly understanding', 'they are very surprised', 'a new problem appears', 'at the same time', 'finally, after some time', 'because of this', 'finally, at last', 'the opposite of what was expected', 'as a result of something', 'unexpectedly', 'after some time', 'something happens that\'s the opposite of what you\'d expect', 'finally', 'during a situation', 'very quickly', 'suddenly, from nowhere', 'suddenly, no signs', 'luckily', 'just in time', 'they feel very sad or disappointed', 'without a doubt', 'in a way that\'s hard to understand', 'with regret', 'looking back', 'as if by magic', 'an expression of sorrow', 'far away', 'in a strange way', 'suddenly', 'amazingly', 'as expected would happen', 'they feel less stressed', 'as a result', 'at exactly the right time', 'hard to believe', 'as expected', 'unknown to them', 'done quickly without thinking', 'quickly and without waiting', 'as a result of that', 'in a strange way', 'no doubt, They know', 'considering everything'];

  function generateRandom() {
    const randomIndex = Math.floor(Math.random() * openings.length);
    const randomOpening = openings[randomIndex];
    const randomDescription = descriptions[randomIndex];

    document.getElementById('opening').innerText = randomOpening;
    document.getElementById('description').innerText = randomDescription;
  }

  // Attach the click event listener to the document
  document.addEventListener('click', generateRandom);