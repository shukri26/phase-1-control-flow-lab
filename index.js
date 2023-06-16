function scuberGreetingForFeet(feet) {
  let message;
  if (feet <= 400) {
    message = "This one is on me!";
  } else if (feet > 2000) {
    message = "I will gladly take your thirty bucks.";
  } else {
    message = "I am sorry, we do not have a pricing option for that distance.";
  }
  return message;
}
function scuberGreetingForFeet(feet) {
  let message;
  if (feet <= 400) {
    message = "This one is on me!";
  } else if (feet > 2000 && feet <= 2500) {
    message = "I will gladly take your thirty bucks.";
  } else {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

  



  
