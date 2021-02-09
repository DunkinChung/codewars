let mid;
let output;

function getMiddle(s)
{
  //Code goes here!
  if (s.length % 2 == 0){
    mid = s.length / 2;
    output = s.charAt(mid-1) + s.charAt(mid);
    console.log(output);
  }
  else{
    mid = s.length / 2;
    output = s.charAt(mid);
    console.log(output);
  }
}

getMiddle("1234567890asdfjklgasldifkgalskf");