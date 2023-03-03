function Confirm(){
   let confirmAction = confirm("Er du sikker på at du vil Afmelde dit Abonnement?");
   if (confirmAction) {
    top.location.href="afmeld.html"
   } else {
    top.location.href="profil.html"
   }
  }