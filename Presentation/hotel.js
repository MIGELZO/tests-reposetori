window.addEventListener("load", () => {
  let cutomerName = document.getElementById("userName");

  cutomerName.addEventListener("input", () => {
    welcome.innerHTML = "יש לי שאלה  , כמה ימים תרצה להתארח אצלינו??"
  });
});
