// window.onload=function(){
//   // $('.remote-jobs').css('display', 'none');
//   function renderTable(job) {
//     return (
//       `<tr>
//         <td>
//           <p class="position">${job.position}</p>
//           <p class="company">${job.company}</p>
//         </td>
//         <td>
//           <div class="tags">
//             <ul id="tagslist">
//               <p>${job.tags}</p>
//             </ul>
//           </div>
//         </td>
//         <td>
//           <p class="location">${job.location}</p>
//           <p class="location">${job.date}</p>
//         </td>
//         <td> <a href="https://sportekjobs.com/${job.slug}" class="button info">Get more Info </a></td>
//       </tr>`
//     )
//   }

//   document.getElementById("remote").addEventListener("click", function(event){
//    event.preventDefault();
//    $('.all-jobs').css('display', 'none');
//    //$('.remote-jobs').css('display', 'block');
//     axios
//                 .get('http://localhost:3000/virtual-reality-jobs')
//                 .then(function (res) {
//                     var jobs = res.data.data;
//                     jobs.forEach(job => {
//                       document.getElementById("remote-jobs").innerHTML += renderTable(job);
//                     });
//                   })
//                   .catch(function (error) {
//                     console.log(error);
//                   }); 
//   }, {once: true});
//   }

$(function () {
  $("#tags").each(function () {
    if ($(this).data() == 'Sales') {
      $(this).css('color', 'red');
    }
  });
});

