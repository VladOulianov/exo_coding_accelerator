
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  
var heure12 = formatAMPM(new Date).split('');

//console.log(heure12.indexOf);

function formatPMAM() {
    var hours = heure12[0]+heure12[1];
    var minutes = heure12[3]+heure12[4];
    var ampm = heure12[6]+heure12[7];
    hours = ampm == "pm" ? parseInt(hours) + 12 : hours ;
   // hours = hours < 10 ? '0'+hours : hours;
   // hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ';
    return strTime;
  }
  
  console.log(formatPMAM());