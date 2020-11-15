/**
 * Give a list of students, filter out non-female 
 */
 
var members = [
    { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
  var result = members.filter(function(member){
      if (member.gender != 'female'){
          return member;
      }
  });
  return result;
}
