
// function showSetUpForm(linkElement) {
//     const formSetUp = document.getElementById('SetUp-form');
//     const showSetUpLink = document.getElementById('SetUp-Account');
//     formSetUp.classList.remove('hidden');//muestra el formulario
//     showSetUpLink.classList.add('hidden');//oculta el link de mostrar formulario
//     console.log("click en configurar cuenta");
// }
// function CancelSetUp() {
//     // e.preventDefault();
//     const formSetUp = document.getElementById('SetUp-form');
//     const showSetUpLink = document.getElementById('SetUp-Account');
//     formSetUp.classList.add('hidden');//oculta el formulario
//     showSetUpLink.classList.remove('hidden');//muestra el link de mostrar formulario
//     console.log("click en cancelar configurar");
//     // Obtener todos los inputs dentro del formulario
//     const inputs = form.getElementsByTagName('input');

//     // Limpiar el valor de cada input
//     for (let i = 0; i < inputs.length; i++) {
//         inputs[i].value = '';
//     }
    
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const loginContainer = document.getElementById('login-container');
//     const registerContainer = document.getElementById('register-container');
//     const homeContainer = document.getElementById('home-container');
//     const profileContainer = document.getElementById('Profile-container')
//     const loginForm = document.getElementById('login-form');
//     const registerForm = document.getElementById('register-form');
//     const setupForm = document.getElementById('setup-account-form')
//     const showRegisterLink = document.getElementById('show-register');
//     const showLoginLink = document.getElementById('show-login');
//     const logoutButton = document.getElementById('logout');
//     const welcomeName = document.getElementById('welcome-name');
//     const welcomeUserNameProfile = document.getElementById('welcome-name-profile');
//     let username = ''
//     let passwordhash = ''

//                 // Verificar si el usuario está logueado
//     function checkAuthentication(username) {
//         if (!localStorage.getItem('loggedInUser')) {
//             // Si no está logueado, redirigir a index.html
//             window.location.href = '../pages/index.html';
//         }else{
//             try {
//                 // const user = username;
//                 // console.log('si esta logueado')
//                 // const welcomeUsernameProfile = document.getElementById('welcome-name-profile');
//                 // const name = localStorage.getItem('loggedInUser')
//                 // const userObject = JSON.parse(localStorage.getItem(username));
//                 // console.log("userObject: "+userObject)
//                 // console.log('name: '+name)
//                 // console.log('user: '+username)
//                 //     welcomeUserNameProfile.textContent = name;
//                 // if (welcomeUserNameProfile && loggedInUsername) {
//                 // }
//             } catch (error) {
//                 console.error
//             }
//         }
//     }

//     // Ejecutar la verificación solo si estamos en profile.html
//     if (window.location.pathname.includes('profile.html')) {
//         checkAuthentication();
//     }

//     // Check if user is already logged in
//     if (localStorage.getItem('loggedInUser')) {
//         showHome(localStorage.getItem('loggedInUser'));
//     } else {
//         showLogin();
//         console.log('no logueado')
//     }

//     // Show login form
//     function showLogin() {
//         loginContainer.classList.remove('hidden');
//         registerContainer.classList.add('hidden');
//         homeContainer.classList.add('hidden');
//         // profileContainer.classList.add('hidden');
//     }

//     // Show register form
//     function showRegister() {
//         loginContainer.classList.add('hidden');
//         registerContainer.classList.remove('hidden');
//         homeContainer.classList.add('hidden');
//     }

//     // Show home page
//     function showHome(name,username,password) {
//         loginContainer.classList.add('hidden');
//         registerContainer.classList.add('hidden');
//         homeContainer.classList.remove('hidden');
//         localStorage.setItem('loggedInUserData', JSON.stringify({ name, username, password }));
//         // profileContainer.classList.remove('hidden');
//         welcomeName.textContent = name;
//         // checkAuthentication(username)
//         // const userData = JSON.parse(localStorage.getItem('loggedInUserData'));
//         // console.log("desde home: "+username)
//         // console.log('objeto desde home: '+userData.name+" "+userData.user+" "+userData.password)
        
//     }

//     // function profilePage(name) {
//     //     welcomeNameProfile.textContent = name;
//     // }

//     // Handle login form submission
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         username = document.getElementById('login-username').value;
//         const password = document.getElementById('login-password').value;

//         const storedUser = JSON.parse(localStorage.getItem(username)); //extrae el objeto user del LS en formato JSON
//         let name = '' // extrae la propieda name del objeto JSON 
//         let user = ''
//         let pass = ''
//         passwordhash = hashCode(password)
//         console.log("password hash login: "+passwordhash);
//         // console.log(storedUser)
//         // console.log("password hash login: "+passwordhash);
//         if (storedUser && storedUser.password === passwordhash) {
//             localStorage.setItem('loggedInUser', storedUser.name); // mantiene la sesion abierta del user con su name 
//             // getNameByUsername(username);
//             name = storedUser.name
//             user = storedUser.username
//             pass = storedUser.password
//             console.log(user)
//             showHome(name,user,pass);
//             checkAuthentication(user)
//             // profilePage(name)
            
//         } else {
//             alert('Invalid username or password');
//         }
//     });

//     //form submission and register handler
//     registerForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = document.getElementById('register-name').value;
//         const user = document.getElementById('register-username').value;
//         let password = document.getElementById('register-password').value;
//         // let passwordhash = ''
//         if (localStorage.getItem(user)) {
//             alert('Username already exists');
//         } else {

//             passwordhash = hashCode(password);
//             password = passwordhash

//             // save user to Local Storage
//             const newUser = { name, user, password };
//             localStorage.setItem(user, JSON.stringify(newUser));
//             localStorage.setItem('loggedInUser', user);
//             // console.log("Registrado "+name);
//             console.log("password hash: "+passwordhash);
//             showHome(name,user,password);
//         }
//     });

//     // setupForm.addEventListener('submit',(e)=>{
//     //     e.preventDefault();

//     // })

//     function hashCode(str) {
//         let hash = 0;
//         for (let i = 0, len = str.length; i < len; i++) {
//             let chr = str.charCodeAt(i);
//             hash = (hash << 5) - hash + chr;
//             hash |= 0; // Convert to 32bit integer
//         }
//         return hash;
//     }

//     // Handle logout
//     logoutButton.addEventListener('click', () => {
//         console.log("cerrando sesion")
//         localStorage.removeItem('loggedInUser');
//         showLogin();
//     });

//     // Show register form link click
//     showRegisterLink.addEventListener('click', (e) => {
//         e.preventDefault();
//         showRegister();
//     });

//     // Show login form link click
//     showLoginLink.addEventListener('click', (e) => {
//         e.preventDefault();
//         showLogin();
//     });

// });

// --------------------------------------------------------------------------

function showSetUpForm(linkElement) {
    const formSetUp = document.getElementById('SetUp-form');
    const showSetUpLink = document.getElementById('SetUp-Account');
    formSetUp.classList.remove('hidden');//muestra el formulario
    showSetUpLink.classList.add('hidden');//oculta el link de mostrar formulario
    console.log("click en configurar cuenta");
}

function CancelSetUp() {
    const formSetUp = document.getElementById('SetUp-form');
    const showSetUpLink = document.getElementById('SetUp-Account');
    formSetUp.classList.add('hidden');//oculta el formulario
    showSetUpLink.classList.remove('hidden');//muestra el link de mostrar formulario
    console.log("click en cancelar configurar");

    const inputs = formSetUp.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     const loginContainer = document.getElementById('login-container');
//     const registerContainer = document.getElementById('register-container');
//     const homeContainer = document.getElementById('home-container');
//     const loginForm = document.getElementById('login-form');
//     const registerForm = document.getElementById('register-form');
//     const showRegisterLink = document.getElementById('show-register');
//     const showLoginLink = document.getElementById('show-login');
//     const logoutButton = document.getElementById('logout');
//     const welcomeName = document.getElementById('welcome-name');

//     const addEntryButton = document.getElementById('add-entry');
//     const entryType = document.getElementById('entry-type');
//     const entryAmount = document.getElementById('entry-amount');
//     const financialEntries = document.getElementById('financial-entries');

//     const incomeBar = document.getElementById('income-bar');
//     const expenseBar = document.getElementById('expense-bar');

//     let usernamelog = '';
//     let passwordhash = '';

//     function showLogin() {
//         loginContainer.classList.remove('hidden');
//         registerContainer.classList.add('hidden');
//         homeContainer.classList.add('hidden');
//     }

//     function showRegister() {
//         loginContainer.classList.add('hidden');
//         registerContainer.classList.remove('hidden');
//         homeContainer.classList.add('hidden');
//     }

//     function showHome(name) {
//         loginContainer.classList.add('hidden');
//         registerContainer.classList.add('hidden');
//         homeContainer.classList.remove('hidden');
//         welcomeName.textContent = name;
//         // Llama a loadFinancialEntries() después de que la página se haya cargado completamente
//         loadFinancialEntries();
//     }

//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         username = document.getElementById('login-username').value;
//         const password = document.getElementById('login-password').value;

//         const storedUser = JSON.parse(localStorage.getItem(username));
//         if (storedUser) {
//             passwordhash = hashCode(password);
//             if (storedUser.password === passwordhash) {
//                 localStorage.setItem('loggedInUser', username);
//                 localStorage.setItem('loggedInUserData', JSON.stringify({ name: storedUser.name, username, password: passwordhash }));
//                 showHome(storedUser.name);
//             } else {
//                 alert('Invalid username or password');
//             }
//         } else {
//             alert('No existe la cuenta, registrate para iniciar sesión'+storedUser);
//         }
//     });

//     registerForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = document.getElementById('register-name').value;
//         const user = document.getElementById('register-username').value;
//         const password = document.getElementById('register-password').value;

//         if (localStorage.getItem(user)) {
//             alert('Username already exists');
//         } else {
//             passwordhash = hashCode(password);
//             const newUser = { name, user, password: passwordhash };
//             localStorage.setItem(user, JSON.stringify(newUser));
//             localStorage.setItem('loggedInUser', user);
//             localStorage.setItem('loggedInUserData', JSON.stringify({ name, username: user, password: passwordhash }));
//             showHome(name);
//         }
//     });

//     function hashCode(str) {
//         let hash = 0;
//         for (let i = 0, len = str.length; i < len; i++) {
//             let chr = str.charCodeAt(i);
//             hash = (hash << 5) - hash + chr;
//             hash |= 0;
//         }
//         return hash;
//     }

//     logoutButton.addEventListener('click', () => {
//         localStorage.removeItem('loggedInUser');
//         localStorage.removeItem('loggedInUserData');
//         showLogin();
//     });

//     showRegisterLink.addEventListener('click', (e) => {
//         e.preventDefault();
//         showRegister();
//     });

//     showLoginLink.addEventListener('click', (e) => {
//         e.preventDefault();
//         showLogin();
//     });

//     if (localStorage.getItem('loggedInUser')) {
//         const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData'));
//         if (loggedInUserData) {
//             showHome(loggedInUserData.name);
//         } else {
//             showLogin();
//         }
//     } else {
//         showLogin();
//     }

//     addEntryButton.addEventListener('click', () => {
//         const type = entryType.value;
//         const amount = entryAmount.value;

//         if (amount === '') {
//             alert('Please enter an amount');
//             return;
//         }

//         const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData')) || {};
//         if (!loggedInUserData.entries) {
//             loggedInUserData.entries = [];
//         }

//         const newEntry = { type, amount };
//         loggedInUserData.entries.push(newEntry);

//         localStorage.setItem('loggedInUserData', JSON.stringify(loggedInUserData));
//         const storedUser = JSON.parse(localStorage.getItem(loggedInUserData.username));
//         storedUser.entries = loggedInUserData.entries;
//         localStorage.setItem(loggedInUserData.username, JSON.stringify(storedUser));
        
//         addEntryToTable(newEntry);
//         entryAmount.value = '';
//     });

//     function loadFinancialEntries() {
//         const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData'));
//         if (loggedInUserData && loggedInUserData.entries) {
//             financialEntries.innerHTML = ''; // Clear existing entries
//             loggedInUserData.entries.forEach(entry => {
//                 addEntryToTable(entry);
//             });
//             updateChart(loggedInUserData.entries);
//         }
//     }

//     function addEntryToTable(entry) {
//         const row = document.createElement('tr');
//         const typeCell = document.createElement('td');
//         const amountCell = document.createElement('td');

//         typeCell.textContent = entry.type;
//         amountCell.textContent = entry.amount;

//         row.appendChild(typeCell);
//         row.appendChild(amountCell);
//         financialEntries.appendChild(row);
//     }

    
//     function updateChart(entries) {
//         const totalIncome = entries.filter(entry => entry.type === 'ingresos').reduce((sum, entry) => sum + parseFloat(entry.amount), 0);
//         const totalExpense = entries.filter(entry => entry.type === 'gastos').reduce((sum, entry) => sum + parseFloat(entry.amount), 0);

//         const maxAmount = Math.max(totalIncome, totalExpense);

//         incomeBar.style.height = `${(totalIncome / maxAmount) * 100}%`;
//         incomeBar.textContent = `Ingresos: $${totalIncome}`;

//         expenseBar.style.height = `${(totalExpense / maxAmount) * 100}%`;
//         expenseBar.textContent = `Gastos: $${totalExpense}`;
//     }

// });

// ---------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const homeContainer = document.getElementById('home-container');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const logoutButton = document.getElementById('logout');
    const profileContainer= document.getElementById('Profile-container');
    const welcomeName = document.getElementById('welcome-name');
    const addEntryButton = document.getElementById('add-entry');
    const entryType = document.getElementById('entry-type');
    const entryAmount = document.getElementById('entry-amount');
    const financialEntries = document.getElementById('financial-entries');
    const incomeBar = document.getElementById('income-bar');
    const expenseBar = document.getElementById('expense-bar');
    

    let usernamelog = '';
    let passwordhash = '';

    function showLogin() {
        loginContainer.classList.remove('hidden');
        registerContainer.classList.add('hidden');
        homeContainer.classList.add('hidden');
    }

    function showRegister() {
        loginContainer.classList.add('hidden');
        registerContainer.classList.remove('hidden');
        homeContainer.classList.add('hidden');
    }

    function showHome(name) {
        loginContainer.classList.add('hidden');
        registerContainer.classList.add('hidden');
        homeContainer.classList.remove('hidden');
        welcomeName.textContent = name;
        loadFinancialEntries();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUser = JSON.parse(localStorage.getItem(username));
        if (storedUser) {
            passwordhash = hashCode(password);
            if (storedUser.password === passwordhash) {
                localStorage.setItem('loggedInUser', username);
                localStorage.setItem('loggedInUserData', JSON.stringify({
                    name: storedUser.name,
                    username: username,
                    password: passwordhash,
                    entries: storedUser.entries || []
                }));
                showHome(storedUser.name);
            } else {
                alert('Invalid username or password');
            }
        } else {
            alert('No existe la cuenta, registrate para iniciar sesión');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const user = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (localStorage.getItem(user)) {
            alert('Username already exists');
        } else {
            passwordhash = hashCode(password);
            const newUser = { name, user, password: passwordhash, entries: [] };
            localStorage.setItem(user, JSON.stringify(newUser));
            localStorage.setItem('loggedInUser', user);
            localStorage.setItem('loggedInUserData', JSON.stringify({
                name: name,
                username: user,
                password: passwordhash,
                entries: []
            }));
            showHome(name);
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

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('loggedInUserData');
        console.log("click: Logout")
        showLogin();
    });

    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        showRegister();
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showLogin();
    });

    function loadFinancialEntries() {
        const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData'));
        if (loggedInUserData && loggedInUserData.entries) {
            financialEntries.innerHTML = ''; // Clear existing entries
            loggedInUserData.entries.forEach(entry => {
                addEntryToTable(entry);
            });
            updateChart(loggedInUserData.entries);
        }
    }

    function addEntryToTable(entry) {
        let row = document.createElement('tr');
        let typeCell = document.createElement('td');
        const amountCell = document.createElement('td');
        row.classList.add("active-row")
        typeCell.classList.add("column-transaction")
        typeCell.textContent = entry.type;
        amountCell.textContent = entry.amount;

        row.appendChild(typeCell);
        row.appendChild(amountCell);
        financialEntries.appendChild(row);
    }

    function updateChart(entries) {
        const totalIncome = entries.filter(entry => entry.type === 'Incomes').reduce((sum, entry) => sum + parseFloat(entry.amount), 0);
        const totalExpense = entries.filter(entry => entry.type === 'Expenses').reduce((sum, entry) => sum + parseFloat(entry.amount), 0);

        const maxAmount = Math.max(totalIncome, totalExpense);

        incomeBar.style.height = `${(totalIncome / maxAmount) * 100}%`;
        incomeBar.textContent = `Incomes: $${totalIncome}`;

        expenseBar.style.height = `${(totalExpense / maxAmount) * 100}%`;
        expenseBar.textContent = `Expenses: $${totalExpense}`;
    }

    addEntryButton.addEventListener('click', () => {
        const type = entryType.value;
        const amount = entryAmount.value;

        if (amount === '') {
            alert('Please enter an amount');
            return;
        }

        const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData')) || {};
        if (!loggedInUserData.entries) {
            loggedInUserData.entries = [];
        }

        const newEntry = { type, amount };
        loggedInUserData.entries.push(newEntry);

        localStorage.setItem('loggedInUserData', JSON.stringify(loggedInUserData));
        const storedUser = JSON.parse(localStorage.getItem(loggedInUserData.username));
        storedUser.entries = loggedInUserData.entries;
        localStorage.setItem(loggedInUserData.username, JSON.stringify(storedUser));

        addEntryToTable(newEntry);
        updateChart(loggedInUserData.entries);
        entryAmount.value = '';
    });

    if (localStorage.getItem('loggedInUser')) {
        const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData'));
        if (loggedInUserData) {
            showHome(loggedInUserData.name);
            loadFinancialEntries();
        } else {
            showLogin();
        }
    } else {
        showLogin();
    }
});
