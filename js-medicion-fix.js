console.log('GA Utils loaded - v1.0');

const gaUtils = {
    getCanal: () => {
        const canalElement = document.getElementById('canal');
        return canalElement ? canalElement.textContent.replace('tag:', '').trim() : 'Coppel.com';
    },

    getCuentaTipo: () => {
        const input = document.getElementById('email');
        return input?.value?.includes('@') ? 'Correo' : 'Celular';
    },

    pushEvent: (params) => {
        const defaultParams = {
            canal: gaUtils.getCanal(),
            cuentaTipo: gaUtils.getCuentaTipo()
        };

        const eventData = {
            ...defaultParams,
            ...params
        };

        console.log('Pushing event to dataLayer:', eventData); // Agregar este log
        dataLayer.push(eventData);
    }
};

/* Eventos de login */
window.continueLoginButtonTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Continuar',
        page: '/login-universal',
        event: 'clicClienteDigital'
    });
};

window.continueLoginPassTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Login normal - Click',
        page: '/login-normal',
        event: 'loginIntento'
    });
};

window.continueLoginEnterPassTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Login normal - Enter',
        page: '/login-normal',
        event: 'loginIntento'
    });
};

window.continueLoginEnterTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Enter',
        page: '/login-universal',
        event: 'clicClienteDigital'
    });
};

window.socialButtonTag = function (platform) {
    gaUtils.pushEvent({
        interaccionNombre: 'Login social',
        page: '/login-universal',
        cuentaTipo: platform,
        event: 'loginIntento'
    });
};

window.continueEnterTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Enter',
        page: window.page || '',
        event: 'crearCuenta'
    });
};

window.passwordEnterLoginTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Login normal - Enter',
        page: '/login-normal',
        event: 'clicClienteDigital'
    });
};

window.registerClickTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Crear Cuenta - Regístrate',
        page: '/login-normal',
        event: 'clicClienteDigital',
        cuentaTipo: undefined
    });
};

/* Eventos de creación de cuenta */
window.continueCreateEnterTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Enter',
        page: '/crear-cuenta',
        event: 'crearCuenta'
    });
};

window.continueCreateButtonTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Continuar',
        page: '/crear-cuenta',
        event: 'crearCuenta'
    });
};

window.goToLoginTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Inicia Sesión',
        page: '/crear-cuenta',
        event: 'clicClienteDigital',
        cuentaTipo: undefined
    });
};

window.socialCreateButtonTag = function (platform) {
    gaUtils.pushEvent({
        interaccionNombre: 'Continuar social',
        page: '/crear-cuenta',
        cuentaTipo: platform,
        event: 'crearCuenta'
    });
};

/* Eventos de recuperación de contraseña */
window.forgotPassTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Recuperar contraseña - ¿Olvidaste tu contraseña?',
        page: '/login-normal',
        event: 'clicClienteDigital',
        cuentaTipo: undefined
    });
};

window.askNewEmailTag = function () {
    var canalElement = document.getElementById('canal');
    var canal = canalElement ? canalElement.textContent.replace('tag:', '').trim() : 'Coppel.com';
    gaUtils.pushEvent({
        interaccionNombre: 'Solicitar correo nuevamente',
        page: '/recuperacion-contrasena/revisa-tu-correo-electronico',
        event: 'recuperacionContra',
        canal: canal,
        cuentaTipo: 'Correo'
    });
};

window.passwordEnterCreateTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Crear cuenta enter',
        page: '/crear-cuenta/crear-password',
        event: 'crearCuenta'
    });
};

window.recoverPassEnterTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Enter',
        page: '/recuperacion-contrasena',
        event: 'recuperacionContra'
    });
};

window.recoverPassClickTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Continuar',
        page: '/recuperacion-contrasena',
        event: 'recuperacionContra'
    });
};

window.recoverPassReturnLoginTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Inicia Sesión',
        page: '/recuperacion-contrasena',
        event: 'clicClienteDigital'
    });
};

window.createPassButtonTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Crear cuenta',
        page: '/crear-cuenta/crear-password',
        event: 'crearCuenta'
    });
};

/* Eventos de Enrrolamiento de passkeys */

window.createDigitalKeyTag = function () {
    //console.log('createDigitalKeyTag called'); // Agregar este log
    gaUtils.pushEvent({
        interaccionNombre: 'Crear llave digital',
        page: '/crear-llave-digital',
        cuentaTipo: '',
        event: 'crearCuenta'
    });
};

window.continueNoDigitalKey = function () {
    //console.log('continueNoDigitalKey called'); // Agregar este log
    gaUtils.pushEvent({
        interaccionNombre: 'Continuar sin llave',
        page: '/crear-llave-digital',
        event: 'clicClienteDigital'
    });
};

window.goBackDigitalKey = function () {
    //console.log('goBackDigitalKey called'); // Agregar este log
    gaUtils.pushEvent({
        interaccionNombre: 'Regresar',
        page: '/crear-llave-digital',
        event: 'clicClienteDigital'
    });
};

/* Eventos de Enrrolamiento de passkeys */
window.continueCreateNewPassTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Continuar',
        page: '/crea-nueva-contraseña',
        cuentaTipo: gaUtils.getCuentaTipo(),
        event: 'recuperacionContra'
    });
};

window.createPasskeyTag = function () {
    gaUtils.pushEvent({
        interaccionNombre: 'Crear llave digital',
        page: '/crear-llave-digital',
        cuentaTipo: 'NA',
        event: 'crearCuenta'
    });
};

/*
function backToLoginTag() {
    var 
    var canalElement = document.getElementById('canal');
    var canal = canalElement ? canalElement.textContent.replace('tag:', '').trim() : 'Coppel.com';
    dataLayer.push({
        data-page: page,
        data-interaccionNombre: 'Inicia sesión',
        data-canal: 'Coppel.com',
        data-evento: 'clicClienteDigital'
    });

}; */
