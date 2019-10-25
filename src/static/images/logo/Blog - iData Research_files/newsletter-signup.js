/*!
* Serialize all form data into a query string
* (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
* @param {Node} form The form to serialize
* @return {String} The serialized form data
*/var serialize=function(form){var serialized=[];for(var i=0;i<form.elements.length;i++){var field=form.elements[i];if(!field.name||field.disabled||field.type==='file'||field.type==='reset'||field.type==='submit'||field.type==='button')continue;if(field.type==='select-multiple'){for(var n=0;n<field.options.length;n++){if(!field.options[n].selected)continue;serialized.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.options[n].value));}}
else if((field.type!=='checkbox'&&field.type!=='radio')||field.checked){serialized.push(encodeURIComponent(field.name)+"="+encodeURIComponent(field.value));}}
return serialized.join('&');};var newsletterform=document.querySelector('#mc-newsletter-signup');if(newsletterform!==null){newsletterform.addEventListener('submit',function(e){e.preventDefault();newsletterAjax(newsletterform);});}
function newsletterAjax(form){let data=serialize(form);let xhttp=new XMLHttpRequest();xhttp.addEventListener('load',function(response){if(!alert(response.target.responseText.replace(/"/g,"")))window.location.reload();});xhttp.open('POST','/wp-content/themes/creativo-child/includes/newsletter-signup.php',true);xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');xhttp.send(data);}