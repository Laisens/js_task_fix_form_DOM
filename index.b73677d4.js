document.querySelectorAll("input").forEach(function(e){var l=document.createElement("label"),a=e.name;(a=a[0].toUpperCase()+a.slice(1)).includes("Name")&&(a=a.replace("Name"," Name")),l.htmlFor=e.id,l.innerHTML=a.toUpperCase(),l.classList="field-label",e.placeholder=a,e.insertAdjacentElement("beforebegin",l)});
//# sourceMappingURL=index.b73677d4.js.map
