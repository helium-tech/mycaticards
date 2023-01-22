<template>
    <div>
      <button @click="addContact">Ajouter contact</button>
    </div>
  </template>
  
  <script>
  import vCard from 'vcards-js';
  import Swal from 'sweetalert2';
  
  export default {
    methods: {
      addContact() {
        // Récupérez les informations de l'utilisateur A
        let userA = {
          firstName: "John",
          lastName: "Doe",
          phone: "+1 (555) 555-5555",
          email: "johndoe@example.com"
        };
  
        // Créez un nouveau contact avec les informations de l'utilisateur A
        let contact = new vCard();
        contact.firstName = userA.firstName;
        contact.lastName = userA.lastName;
        contact.phone = userA.phone;
        contact.email = userA.email;

        console.log(contact)
  
        // // Convertir le contact en format vCard
        let vcard = contact.getFormattedString();
  
        // Demandez l'autorisation de l'utilisateur B pour accéder à ses contacts
        navigator.permissions.query({name: 'contacts'}).then(permissionStatus => {
          if (permissionStatus.state === 'granted') {
            // Ajoutez le contact à la liste des contacts de l'utilisateur B
            window.navigator.contacts.add(vcard).then(() => {
              Swal.fire({
                icon: 'success',
                title: 'Le contact a été ajouté avec succès !',
                showConfirmButton: false,
                timer: 2000
              });
            }).catch(error => {
              Swal.fire({
                icon: 'error',
                title: 'Erreur lors de l\'ajout du contact',
                text: error,
                confirmButtonText: 'Ok'
              });
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Permission refusée',
              text: "L'utilisateur B n'a pas donné la permission d'accéder à ses contacts.",
              confirmButtonText: 'Ok'
            });
          }
        });
      }
    }
  }
  </script>
  