async function onCall() {
  /*i created a constant image and error variables to access them from any where 
  and changed there display to none if the user submits another website everything will be cleared */

  const image = document.getElementById("image");
  const error_text = document.getElementById("error_text");
  error_text.style.display = "none";

  /* created a XMLHttpRequest */
  const xhr = new XMLHttpRequest();
  const user_input = document.getElementById("site_name").value;
  // const url = `https://icons.duckduckgo.com/ip3/www.${user_input}.com.ico`;
  const url = `https://www.google.com/s2/favicons?domain=www.${user_input}.com&sz=128&type=png`;
  xhr.open("GET", `https://www.${user_input}.com`, true);
  xhr.onreadystatechange = function () {
    // checking if the request had came back with data
    if (xhr.readyState === 4) {
      // if the status is 200 we will display the favicon
      if (xhr.status === 200) {
        image.src = url;
        image.style.display = "block";
        image.style.height = "200px";
        image.style.width = "200px";
      } else {
        // if we got an error then we will give the error out
        error_text.style.display = "block";
        error_text.innerHTML =
          " the site you have entered might not exist on the internet or it might exist with a different name";
        image.src = "/images/undraw_domain_names_re_0uun.svg";
        image.style.height = "261px";
        image.style.width = "400px";
      }
    }
  };
  xhr.send();
}
