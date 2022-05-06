const language = prompt('What language do you want the popularity assessed for?');

switch (language) {
    case ('chinese' || 'mandarin'):
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('4th place');
        break;
    case 'arabic':
        console.log('5th place');
        break;
    default:
        console.log('Great language too :D');
}