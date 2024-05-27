document.addEventListener('DOMContentLoaded', () => {
    function checkAuthentication(username) {
        if (!localStorage.getItem('loggedInUser')) {
            
            // Si no está logueado, redirigir a index.html
            window.location.href = 'index.html';
        }else{
            try {
            } catch (error) {
                console.error
            }
        }
    }

    // Ejecutar la verificación solo si estamos en profile.html
    if (window.location.pathname.includes('profile.html')) {
        checkAuthentication();
    }

    const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData'));
    if (loggedInUserData) {
        const name = loggedInUserData.name;
        const user = loggedInUserData.username;
        const password = loggedInUserData.password;
        // Utiliza los datos del usuario como necesites
        console.log('Nombre:', name);
        console.log('Usuario:', user);
        console.log('Contraseña:', password);
        // Actualiza la bienvenida en la página de perfil con el nombre del usuario
        document.getElementById('welcome-name-profile').textContent = user;
        // Set initial values in the form
                document.getElementById('edit-name').value = name;
                document.getElementById('edit-password').value = '';
                document.getElementById('confirm-password').value = '';
    } else {
        console.error('No se encontraron datos de usuario logueado en el almacenamiento local.');
    }

    const logoutButton = document.getElementById('logout');

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            localStorage.removeItem('loggedInUserData');
            console.log("Logout clicked");
            window.location.href = 'index.html'; // Redirect to login or home page after logout
        });
    }
});
        document.getElementById('setup-account-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = document.getElementById('edit-name').value;
            const newPassword = document.getElementById('edit-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (newPassword !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData'));

            if (loggedInUserData) {
                const updatedUserData = {
                    ...loggedInUserData,
                    name: newName,
                    password: hashCode(newPassword)
                };

                // Actualizar el localStorage
                localStorage.setItem('loggedInUserData', JSON.stringify(updatedUserData));
                localStorage.setItem(updatedUserData.username, JSON.stringify(updatedUserData));
                alert('Datos actualizados correctamente');
                location.reload();
            } else {
                console.error('No se encontraron datos para el usuario logueado en el almacenamiento local.');
            }
        });

        function hashCode(str) {
            let hash = 0;
            for (let i = 0, len = str.length; i < len; i++) {
                let chr = str.charCodeAt(i);
                hash = (hash << 5) - hash + chr;
                hash |= 0;
            }
            return hash;
        }
