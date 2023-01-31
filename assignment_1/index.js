// SubHeading 
subHeadings=["Name","Age","DOB","Email","Company"];

//data to be used in table
data=[
      ['Sunil Kumar','23','14-07-2001','sunilkumar333221@gmail.com','Gemini_Solutions'],
      ['abc','24','04-2-2000','abc5@gmail.com','Gemini_Solutions'],
      ['def','25','23-3-1999','abc007@gmail.com','Gemini_Solutions'],
      ['ijkkjj','26','12-4-1998','defkumarsibghkabhdi@gmail.com','Gemini_Solutions'],
      ['lmnu','27','25-7-1997','lmuaqwd@gmail.com','Gemini_Solutions'],
    ];

  

//Self invoke function
( function dyanamic_Table ()
{

// Heading of our webpage
  let h1_tag =document.createElement("H1");
  let heading = document.createTextNode('Dynamic Table From JavaScript');
  h1_tag.appendChild(heading);
  h1_tag.setAttribute("style", "color:brown");
  h1_tag.setAttribute("style", "padding:1% 35%");

  // adding h1 tag with content in body of HTML
  document.body.appendChild(h1_tag);
  document.body.setAttribute("style", "background-color:pink");

//  Creating table
  //Creating table, thead , tbody, tr 
  let tbl=document.createElement("table");
  let th=document.createElement("thead");
  let tbdy=document.createElement("tbody");
  let thr=document.createElement("tr");

  // inserting subheadings in table from subHeading array
  for(let i=0;i<subHeadings.length;i++){
    let cell=document.createElement("th");
    let text_node=document.createTextNode(`${subHeadings[i]}`)// entering subheading
    cell.appendChild(text_node);
    thr.appendChild(cell);
  }
  th.appendChild(thr);
  
  
  // inserting all data in table from data array
  for( let i=0;i<data.length;i++)
  {
    let row = document.createElement("tr");
      for(let j=0;j<data[i].length;j++)
      {
        let cell = document.createElement("td");
        let text_node = document.createTextNode(`${data[i][j]}`);
          cell.appendChild(text_node);
          row.appendChild(cell);
      }
  tbdy.appendChild(row);
  }

  //inserting thead and tbody into table
  tbl.appendChild(th);
  tbl.appendChild(tbdy);

  //setting designs for table 
  tbl.setAttribute("border", "5");
  th.setAttribute("style", "background-color:lightgreen");
  tbl.setAttribute("style", "margin:auto");
  tbdy.setAttribute("style", "color:black");
  tbdy.setAttribute("style","background-color:yellow");


  //inserting table to body
  document.body.appendChild(tbl);

})();
